
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from './App';
import HomeView from './views/home';
import About from './views/about.mdx';
import Page from './components/page';
import { components } from './components/mdx/mdx';
import { postsRoutes } from './posts';
import { PostsView } from './views/posts';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<HomeView />} />
      <Route path='posts' element={<PostsView />} />
      <Route path='about' element={<Page><About components={components} /></Page>} />
      {postsRoutes.map(({ path, element }) => {
        return <Route key={path} path={path} element={element} />;
      })}
    </Route>
  ),
);
