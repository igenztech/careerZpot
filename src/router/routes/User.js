import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const UserRoutes = [

    {
        path: '/profiledetails',
        component: lazy(() => import('../../views/Profile/view/ProfileDetails')),
        layout: 'HorizontalLayout',
        meta: {
            publicRoute: true
        }
    },
    {
        path: '/home',
        component: lazy(() => import('../../views/Home/KnowledgeBase')),
        layout: 'HorizontalLayout',
        meta: {
            publicRoute: true
        }
    },
    {
        path: '/pages/knowledge-base/:category',
        // exact: true,
        component: lazy(() => import('../../views/Home/KnowledgeBaseCategory')),
        meta: {
            navLink: '/pages/knowledge-base'
        }
    }
]

export default UserRoutes