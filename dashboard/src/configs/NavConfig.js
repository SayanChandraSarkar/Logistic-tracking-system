// routes
import { PATH_DASHBOARD } from '../routes/paths';
// components
// import Label from '../components/micro/Label';
import SvgIconStyle from '../components/micro/SvgIconStyle';

// -----------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/assets/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  dashboard: getIcon('dashboard'),
  bill: getIcon('bill'),
  truck: getIcon('truck'),
  settings: getIcon('settings'),
  user: getIcon('user'),
  query: getIcon('query'),
  estimation: getIcon('estimation'),
  tracking: getIcon('tracking'),
};

export const navConfig = [
  // GENERAL
  // -----------------------------------------------
  {
    subheader: 'general',
    items: [
      {
        title: 'dashboard',
        path: PATH_DASHBOARD.general.app,
        icon: ICONS.dashboard,
      },
      {
        title: 'consignment',
        path: PATH_DASHBOARD.consignment.root,
        icon: ICONS.bill,
        children: [{ title: 'add', path: PATH_DASHBOARD.consignment.add }],
      },
      {
        title: 'tracking',
        path: PATH_DASHBOARD.tracking.root,
        icon: ICONS.tracking,
        children: [{ title: 'all', path: PATH_DASHBOARD.tracking.all }],
      },
      {
        title: 'couriers',
        path: PATH_DASHBOARD.general.couriers,
        icon: ICONS.truck,
      },
    ],
  },

  // SALES
  // -----------------------------------------------
  {
    subheader: 'others',
    items: [
      {
        title: 'accounts',
        path: PATH_DASHBOARD.general.accounts,
        icon: ICONS.user,
      },
    ],
  },
];
