
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from './App';
import HomeView from './views/home';
import About from './views/about.mdx';
import Page from './components/page';
import { ComponentType, Suspense, lazy } from 'react';
import { components } from './components/mdx/mdx';

const POSTS_ROUTES = import.meta.glob('/src/posts/**/[a-z[]*.mdx');
const posts_routes = Object.keys(POSTS_ROUTES).map(route => {
  const path = 'posts' + route
    .replace(/\/src\/posts|index|\.mdx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const View = lazy(POSTS_ROUTES[route] as () => Promise<{ default: ComponentType<any> }>);
  return { path, element: <Page>
    <Suspense fallback={<>Loading...</>}>
      <View components={components} />
    </Suspense>
  </Page> };
});

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<HomeView />} />
      <Route path='about' element={<Page><About components={components} /></Page>} />
      {posts_routes.map(({ path, element }) => {
        return <Route key={path} path={path} element={element} />;
      })}
    </Route>
  ),
);
