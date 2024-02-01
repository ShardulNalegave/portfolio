
import { ReactNode } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from './App';
import HomeView from './views/home';
import About from './views/about.mdx';
import Page from './components/page';

const POSTS_ROUTES = import.meta.glob('/src/posts/**/[a-z[]*.mdx', { eager: true, import: 'default' });
const posts_routes = Object.keys(POSTS_ROUTES).map(route => {
  const path = 'posts' + route
    .replace(/\/src\/posts|index|\.mdx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1');

  return { path, element: <Page>{(POSTS_ROUTES[route] as () => ReactNode)()}</Page> };
});

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<HomeView />} />
      <Route path='about' element={<Page><About /></Page>} />
      {posts_routes.map(({ path, element }) => {
        return <Route key={path} path={path} element={element} />;
      })}
    </Route>
  ),
);
