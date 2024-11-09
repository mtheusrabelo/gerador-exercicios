import {
  CategoryOutlined,
  HomeOutlined,
  QuizOutlined,
  SettingsOutlined,
} from '@mui/icons-material';
import { ResourceProps } from '@refinedev/core';

export const resources: ResourceProps[] = [
  {
    name: 'dashboard',
    list: '/dashboard',
    meta: {
      label: 'Início',
      icon: <HomeOutlined />,
    },
  },
  {
    name: 'categories',
    list: '/categories',
    create: '/categories/create',
    edit: '/categories/edit/:id',
    show: '/categories/show/:id',
    meta: {
      canDelete: true,
      label: 'Categorias',
      icon: <CategoryOutlined />,
    },
  },
  {
    name: 'exercises',
    list: '/exercises',
    create: '/exercises/create',
    edit: '/exercises/edit/:id',
    show: '/exercises/show/:id',
    meta: {
      canDelete: true,
      label: 'Exercícios',
      icon: <QuizOutlined />,
    },
  },
  {
    name: 'settings',
    list: '/settings',
    meta: {
      canDelete: true,
      label: 'Configurações',
      icon: <SettingsOutlined />,
    },
  },
];
