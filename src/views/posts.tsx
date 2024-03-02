
import moment from 'moment';
import { Heading1, Heading3 } from '../components/mdx/heading';
import Page from '../components/page';
import { getAllPostsMeta, postFilepathToRoutePath } from '../posts';
import { Link } from 'react-router-dom';

export function PostsView() {
  document.title = 'Posts - Shardul Nalegave';
  const postMetas = getAllPostsMeta();

  return (
    <Page>
      <Heading1>Posts</Heading1>
      <div className='h-[5px]'></div>

      {postMetas.sort((a, b) => {
        return moment(a.date, 'DD[/]MM[/]YYYY').isBefore(moment(b.date, 'DD[/]MM[/]YYYY')) ? 1 : -1;
      }).map(postMeta => {
        return (
          <Link key={postMeta.fp} to={'/' + postFilepathToRoutePath(postMeta.fp)}>
            <div className='bg-zinc-100 p-[25px] my-[15px] cursor-pointer'>
              <Heading3>{postMeta.title}</Heading3>
              <div className='h-[5px]'></div>
              <p className='text-sm'>{postMeta.description}</p>
              <div className='h-[10px]'></div>
              <p className='text-sm text-zinc-700'><span className='font-bold'>Posted:</span> {moment(postMeta.date, 'DD[/]MM[/]YYYY').format('Do MMMM[,] YYYY')}</p>
            </div>
          </Link>
        );
      })}
    </Page>
  );
}