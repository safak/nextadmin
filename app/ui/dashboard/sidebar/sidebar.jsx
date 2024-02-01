import Image from "next/image";
import MenuLink from "./menuLilnk/menuLink";
import styles from "./sidebar.module.css"
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
} from "react-icons/md"
import { auth, signOut } from "@/app/auth";

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
                title: "Products",
                path: "/dashboard/products",
                icon: <MdShoppingBag />,
            },
            {
                title: "Transaction",
                path: "/dashboard/transactions",
                icon: <MdAttachMoney />,
            }
        ],
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: "/dashboard/revenue",
                icon: <MdWork />,
            },
            {
                title: "Reports",
                path: "/dashboard/reports",
                icon: <MdAnalytics />,
            },
            {
                title: "Teams",
                path: "/dashboard/teams",
                icon: <MdPeople />,
            }
        ],
    },
    {
        title: "Users",
        list: [
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings />,
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpCenter />,
            }
        ]
    },
    {
        title: "Users",
        list: [
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings />,
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpCenter />,
            }
        ]
    },
    {
        title: "Users",
        list: [
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings />,
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpCenter />,
            }
        ]
    }
];

const Sidebar = async () => {
    const {user} = await auth();
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} src={user.img ? `/profile_img/${user.img}` : "/noavatar.png"} alt="" width="50" height="50" />
                <div className={styles.userDetail}>
                    <span className={styles.username}>{user.username}</span>
                    <span className={styles.userTitle}>{!user.isAdmin ? "Admin" : "Client"}</span>
                </div>
            </div>
            <ul className={styles.List}>
            {menuItems.map((cat) => (
                <li key={cat.title}>
                <span className={styles.cat}>{cat.title}</span>
                {cat.list.map((item) => (
                    <MenuLink item={item} key={item.title} />
                ))}
                </li>
            ))}
            </ul>
            <form action={async () => {
                "use server"
                await signOut();
            }}>
                <button className={styles.logout}>
                    <MdLogout />
                    Logout
                </button>
            </form>
        </div>
    );
};

export default Sidebar;