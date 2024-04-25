export const menuItems = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Profile',
    path: '/profile',
    children: [
      {
        label: 'Details',
        path: '/details',
        children: [
          {
            label: 'Location',
            path: '/location',
            children: [
              {
                label: 'City',
                path: '/city',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Settings',
    path: '/settings',
    children: [
      {
        label: 'Account',
        path: '/account',
      },
      {
        label: 'Security',
        path: '/security',
        children: [
          {
            label: 'Login',
            path: '/login',
          },
          {
            label: 'Register',
            path: '/register',
          },
        ],
      },
    ],
  },
];
