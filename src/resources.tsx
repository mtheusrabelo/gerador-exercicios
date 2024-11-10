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
      canDelete: false,
      icon: <HomeOutlined />,
      dataProviderName: 'settings',
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
      dataProviderName: 'categories',
    },
  },
  {
    name: 'exercises',
    list: '/exercises',
    create: '/exercises/create',
    show: '/exercises/show/:id',
    meta: {
      canDelete: true,
      label: 'Exercícios',
      icon: <QuizOutlined />,
      dataProviderName: 'exercises',
    },
  },
  {
    name: 'settings',
    list: '/settings',
    meta: {
      canDelete: false,
      label: 'Configurações',
      icon: <SettingsOutlined />,
      dataProviderName: 'settings',
    },
  },
];
