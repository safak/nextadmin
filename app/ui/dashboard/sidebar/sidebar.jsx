import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdOutlineBarChart,
    MdMap,
    MdSettings,
    MdLogout,
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
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />,
            },
            {
                title: "Charts",
                path: "/dashboard/charts",
                icon: <MdOutlineBarChart />,
            },
            {
                title: "Map",
                path: "/dashboard/map",
                icon: <MdMap />,
            },
        ],
    },
    {
        title: "More",
        list: [
            {
                title: "Setting",
                path: "/dashboard/setting",
                icon: <MdSettings />
            },
        ],
    },
];

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <img className={styles.userImage} src="/noavatar.png" alt="" width="50" height="50"/>
                <div className={styles.userDetail}>
                    <span className={styles.username}>Diwan</span>
                    <span className={styles.userTitle}>Automatic Water System</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {cat.list.map((item) => (
                            <MenuLink item={item} key={item.title} />
                        ))}
                    </li>
                ))}
            </ul>
            <button className={styles.logout}>
                <MdLogout/>
                Logout
            </button>
        </div>
    );
};

export default Sidebar;
