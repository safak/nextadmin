import styles from '@/app/ui/dashboard/campaigns/singleCampaign/singleCampaign.module.css'
import Image from 'next/image'

const SingleCampaignPage = () => {
    return(
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt="" fill />
                </div>
                Organisation
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Organisation</label>
                    <input type='text' name='Organisation' placeholder='Organisation' />
                    <label>Campaign Title</label>
                    <input type='text' name='Campaign Title' placeholder='Campaign Title' />
                    <label>Duration</label>
                    <input type='text' name='Duration' placeholder='6 weeks' />
                    <label>Location</label>
                    <input type='text' name='Location' placeholder='Kalangala' />
                    <label>Category</label>
                    <select name="cat" id="cat">
                        <option value="Health">Health</option>
                        <option value="Works and Transport">Works and Transport</option>
                        <option value="Gender and Equality">Gender and Equality</option>
                        <option value="Disaster Preparedness">Disaster Preparedness</option>
                    </select>
                    <label>Description</label>
                    <textarea name="desc" id="desc" rows="10" placeholder='Project Description'></textarea>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleCampaignPage