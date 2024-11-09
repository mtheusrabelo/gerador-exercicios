import { ErrorComponent, ThemedLayoutV2 } from '@refinedev/mui';

import { NavigateToResource } from '@refinedev/react-router-v6';
import { Outlet, Route, Routes as RoutesDom } from 'react-router-dom';

import { Header } from './components/header';
import {
  CategoryCreate,
  CategoryEdit,
  CategoryList,
  CategoryShow,
} from './pages/categories';
import { DashboadList } from './pages/dashboard';
import {
  ExerciseCreate,
  ExerciseEdit,
  ExerciseList,
  ExerciseShow,
} from './pages/exercises';
import { SettingsList } from './pages/settings';

export const Routes = () => (
  <RoutesDom>
    <Route
      element={
        <ThemedLayoutV2 Header={() => <Header sticky />}>
          <Outlet />
        </ThemedLayoutV2>
      }
    >
      <Route index element={<NavigateToResource resource="dashboard" />} />
      <Route path="/categories">
        <Route index element={<CategoryList />} />
        <Route path="create" element={<CategoryCreate />} />
        <Route path="edit/:id" element={<CategoryEdit />} />
        <Route path="show/:id" element={<CategoryShow />} />
      </Route>
      <Route path="/exercises">
        <Route index element={<ExerciseList />} />
        <Route path="create" element={<ExerciseCreate />} />
        <Route path="edit/:id" element={<ExerciseEdit />} />
        <Route path="show/:id" element={<ExerciseShow />} />
      </Route>
      <Route path="/dashboard" element={<DashboadList />} />
      <Route path="/settings" element={<SettingsList />} />
      <Route path="*" element={<ErrorComponent />} />
    </Route>
  </RoutesDom>
);
