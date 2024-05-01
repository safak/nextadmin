import Search from '@/app/ui/dashboard/search/search';
import styles from '@/app/ui/dashboard/campaigns/campaigns.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '@/app/ui/dashboard/pagination/pagination';
// import { SearchParams } from 'next/navigation'
import { fetchCampaigns } from '@/app/lib/data';

const  Campaigns = async ({ SearchParams }) => {
    const q = SearchParams?.q || '';
    const page = SearchParams?.page || 1;
    const {count, campaigns} = await fetchCampaigns(q, page);
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a Campaign..." />
                <Link href="/dashboard/campaigns/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Campaign</td>
                        <td>Duration</td>
                        <td>Created on</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {campaigns.map((campaign) => {
                        <tr key={campaign.id}>
                            <td>
                                <div className={styles.campaign}>
                                    <Image src={campaign.img || "/noavatar.png"} alt="" width={40} height={40} className={styles.campaignImage}/>
                                    {campaign.title}
                                </div>
                            </td>
                            <td>{campaign.campaign}</td>
                            <td>{campaign.duration}</td>
                            <td>{campaign.createdAt?.toString().splice(4, 16)}</td>
                            <td>{campaign.isActive ? "Active" : "Passive"}</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href={`/dashboard/campaigns/${campaign.id}`}>
                                    <button className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                    <button className={`${styles.button} ${styles.delete}`}>delete</button>
                                </div>
                                
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            <Pagination count={count} />
        </div>
    )
}

export default Campaigns