import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

// Danh sách các route chính
export const ROUTER_LIST = [
    {
        path: '/',
        name: 'Home', // Trang chủ
    },
    {
        path: '/subjects',
        name: 'Subjects', // Môn học
    },
    {
        path: '/explanations',
        name: 'Explanations', // Giải thích
    },
];

// Danh sách các nút tạo với icon
export const ROUTER_BUTTON_CREATE = [
    {
        path: '/study', // Đường dẫn cho bộ bài học
        name: 'Study set',
        icon: ContentCopyOutlinedIcon, // Icon cho bộ bài học
    },
    {
        path: '/folders', // Đường dẫn cho thư mục
        name: 'Folder',
        icon: FolderOutlinedIcon, // Icon cho thư mục
    },
    {
        path: '/classes', // Đường dẫn cho lớp học
        name: 'Classes',
        icon: GroupOutlinedIcon, // Icon cho lớp học
    },
];

// Danh sách submenu theo nhóm
export const ROUTER_SUB_MENU = [
    {
        name: 'group1', // Tên nhóm
        items: [
            {
                path: '/profile',
                name: 'Profile', // Trang hồ sơ
            },
            {
                path: '/progress',
                name: 'Progress', // Tiến độ
            },
            {
                path: '/settings',
                name: 'Setting', // Cài đặt
            },
        ],
    },
    {
        name: 'group2', // Nhóm 2
        items: [
            {
                path: '/profile',
                name: 'Help and Feedback', // Giúp đỡ và phản hồi
            },
            {
                path: '/blog',
                name: 'Blog', // Blog
            },
            {
                path: '/privacy',
                name: 'Privacy', // Quyền riêng tư
            },
            {
                path: '/upgrade',
                name: 'Upgrade', // Nâng cấp
            },
        ],
    },
    {
        name: 'group3', // Nhóm 3
        items: [
            {
                path: '/logout',
                name: 'Logout', // Đăng xuất
            },
        ],
    },
];
