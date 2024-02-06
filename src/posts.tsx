
import { ComponentType, Suspense, lazy } from 'react';
import Page from './components/page';
import { components } from './components/mdx/mdx';

const POSTS = import.meta.glob('/src/posts/**/[a-z[]*.mdx');

export function postFilepathToRoutePath(fp: string): string {
  return 'posts' + fp
    .replace(/\/src\/posts|index|\.mdx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1');
}

export const postsRoutes = Object.keys(POSTS).map(path => {
  const routePath = postFilepathToRoutePath(path);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const View = lazy(POSTS[path] as () => Promise<{ default: ComponentType<any> }>);
  return { path: routePath, element: <Page>
    <Suspense fallback={<>Loading...</>}>
      <View components={components} />
    </Suspense>
  </Page> };
});

export function getAllPostsMeta(): IPostMeta[] {
  const metaRecords: Record<string, {
    title: string,
    description: string,
    date: string,
  }> = import.meta.glob('/src/posts/**/[a-z[]*.mdx', {
    eager: true,
    import: 'frontmatter',
  });

  const metas: IPostMeta[] = [];
  Object.keys(metaRecords).forEach(fp => {
    metas.push({
      fp,
      route: '/' + postFilepathToRoutePath(fp),
      ...metaRecords[fp],
    });
  });

  return metas;
}

interface IPostMeta {
  title: string,
  description: string,
  date: string,
  fp: string,
  route: string,
}