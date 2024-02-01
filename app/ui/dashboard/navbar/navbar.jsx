"use client"
import Image from 'next/image';
// import { usePathname } from 'next/navigation';
import styles from './navbar.module.css'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md';

const Navbar = () => {
    // const pathname = usePathname();
    return (
        <nav className={styles.container}>
            {/* <div className={styles.title}>{headerText || pathname.replaceAll("/", " > ")}</div> */}
            <div className={styles.iconContainer}>
                <Image className={styles.icon} src="/company_logo/OJK_Logo.png" alt="" fill />
            </div>
            {/* <div className={styles.title}>
                OTORITAS JASA KEUANGAN
            </div> */}
            <div className={styles.menu}>
                <div className={styles.search}>
                    <MdSearch color='#2e374a' />
                    <input type="text" placeholder='Search...' className={styles.input} />
                </div>
                <div className={styles.icons}>
                    <MdOutlineChat size={20} />
                    <MdNotifications size={20} />
                    <MdPublic size={20} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;