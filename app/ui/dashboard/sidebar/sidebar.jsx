import styles from "./sidebar.module.css"
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";

import {
    MdDashboard,
    MdOutput,
    MdOutlineSwitchAccount,
    MdOutlineSubtitles,
    MdOutlineCampaign,
    MdOutlineSettings,
    MdOutlineHelpCenter,
    MdExitToApp
} from "react-icons/md";

const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />,
            },
            {
                title: "Profile",
                path: "/dashboard/profile",
                icon: <MdOutlineSwitchAccount />,
            },
            {
                title: "Analtyics",
                path: "/dashboard/analytics",
                icon: <MdOutlineSubtitles />
            },
            {
                title: "Campaigns",
                path: "/dashboard/campaigns",
                icon: <MdOutlineCampaign />,
            },
        ],
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path:"/dashboard/settings",
                icon: <MdOutlineSettings />,
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdOutlineHelpCenter />,
            },
        ],
    },
];

const  Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} src="/noavatar.png" alt="" width="50" height="50" />
                <div className={styles.userDetail}>
                    <span className={styles.username}>Sir Gordon</span>
                    <span className={styles.userTitle}>Administrator</span>
                </div>
            </div>
        <ul className={styles.list}>
            {menuItems.map((cat) => (
                <li key={cat.title}>
                    <span className={styles.cat}>{cat.title}</span>
                    {cat.list.map((item) => (
                        <MenuLink item={item} key={item.title}/>
                    ))}
                </li>
            ))}
        </ul>
        <button className={styles.logout}>
            <MdExitToApp />
            Logout
        </button>
        </div>
    );
};

export default Sidebar;