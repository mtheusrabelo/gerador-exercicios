import { DashboardOutlined, OutlinedFlagOutlined } from '@mui/icons-material';

export const resources = [
  {
    name: 'blog_posts',
    list: '/blog-posts',
    create: '/blog-posts/create',
    edit: '/blog-posts/edit/:id',
    show: '/blog-posts/show/:id',
    meta: {
      canDelete: true,
      label: 'Posts',
      icon: <DashboardOutlined />,
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
      label: 'Categories',
      icon: <OutlinedFlagOutlined />,
    },
  },
];
