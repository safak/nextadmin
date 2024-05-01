import styles from '@/app/ui/dashboard/campaign/addCampaign/addCallCampaign.module.css'

const AddCallCampaign = () => {
    return (
        <div className={styles.container}>
            <div className={styles.subcontainer}>
                <div className={styles.form}>
                <form action="" className={styles.form}>
                <input type="text" placeholder='Campaign Title' name='Campaign Title' required />
                <input type="text" placeholder='Organisation'  name='Organisation' />
                <input type="text" placeholder='Department'  name='Department' />
                <select name="cat" id="cat">
                    <option value="general">Choose a Region</option>
                    <option value="Central Region">Central Region</option>
                    <option value="Eastern Region">Eastern Region</option>
                    <option value="Western Region">Western Region</option>
                    <option value="North Region">North Region</option>
                    <option value="All Regions">All Regions</option>
                </select>
                <div className={styles.uploadBtn}>
                    <button type='submit' className={styles.uploadButton}>Upload Excel/CSV</button>
                    <button type='submit' className={styles.uploadButton}>Upload Audio</button>
                </div>
                </form>
            </div>
            <button type='submit' className={styles.call}>Call</button>
            </div>
        </div>
    )
}

export default AddCallCampaign