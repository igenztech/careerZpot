import { Home, User } from 'react-feather'

export default [
  {
    header: 'Pages'
  },
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'profiledetails',
    title: 'Profile Details',
    icon: <User size={20} />,
    navLink: '/profiledetails'
  }
  // {
  //   id: 'invoiceApp',
  //   title: 'Invoice',
  //   icon: <FileText size={20} />,
  //   children: [
  //     {
  //       id: 'invoiceList',
  //       title: 'List',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/invoice/list'
  //     }
  //   ]
  // }
]
