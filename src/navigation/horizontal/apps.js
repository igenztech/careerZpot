import { Box, Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Archive, Bookmark, BookOpen, Award, Globe, Upload } from 'react-feather'

export default [
    {
        id: 'find-jobs',
        title: 'Find Jobs',
        icon: <Archive />,
        children: [
        {
            id: 'email',
            title: 'Full Time Jobs',
            icon: <Mail />,
            navLink: '/'
        },
        {
            id: 'chat',
            title: 'Part Time Jobs',
            icon: <MessageSquare />,
            navLink: '/apps/chat'
        },
        {
            id: 'todo',
            title: 'Consultant Jobs',
            icon: <CheckSquare />,
            navLink: '/apps/todo'
        }
        ]
    },
    {
        id: 'community-forum',
        title: 'Community Forum',
        icon: <BookOpen />
        
    },
    {
        id: 'about-us',
        title: 'About Us',
        icon: <Globe />,
        children: [
            {
                id: 'email',
                title: 'Job Application',
                icon: <Mail />,
                navLink: '/'
            },
            {
                id: 'chat',
                title: 'Career',
                icon: <MessageSquare />,
                navLink: '/apps/chat'
            }
            ]
        
    },
    {
        id: 'rewards',
        title: 'Rewards',
        icon: <Award />
        
    },
    {
        id: 'upload-resume',
        title: 'Upload Resume',
        icon: <Upload />,
        navLink: '/profiledetails'
    }
]
