import { ErrorComponent, ThemedLayoutV2 } from '@refinedev/mui';

import { NavigateToResource } from '@refinedev/react-router-v6';
import { Outlet, Route, Routes as RoutesDom } from 'react-router-dom';

import { Header } from './components/header';
import {
  BlogPostCreate,
  BlogPostEdit,
  BlogPostList,
  BlogPostShow,
} from './pages/blog-posts';
import {
  CategoryCreate,
  CategoryEdit,
  CategoryList,
  CategoryShow,
} from './pages/categories';

export const Routes = () => (
  <RoutesDom>
    <Route
      element={
        <ThemedLayoutV2 Header={() => <Header sticky />}>
          <Outlet />
        </ThemedLayoutV2>
      }
    >
      <Route index element={<NavigateToResource resource="blog_posts" />} />
      <Route path="/blog-posts">
        <Route index element={<BlogPostList />} />
        <Route path="create" element={<BlogPostCreate />} />
        <Route path="edit/:id" element={<BlogPostEdit />} />
        <Route path="show/:id" element={<BlogPostShow />} />
      </Route>
      <Route path="/categories">
        <Route index element={<CategoryList />} />
        <Route path="create" element={<CategoryCreate />} />
        <Route path="edit/:id" element={<CategoryEdit />} />
        <Route path="show/:id" element={<CategoryShow />} />
      </Route>
      <Route path="*" element={<ErrorComponent />} />
    </Route>
  </RoutesDom>
);
