import styles from '@/app/ui/dashboard/campaigns/addCampaign/addCampaign.module.css'

const AddCampaign = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type="text" placeholder='Title' name='Title' required />
                <select name="cat" id="cat">
                    <option value="general">Choose a Category</option>
                    <option value="Health">Health</option>
                    <option value="Finance">Finance</option>
                    <option value="Non-Profit">Non-Profit</option>
                </select>
                <input type="text" placeholder='Duration'  name='Duration' />
                <input type="Region" placeholder='Region'  name='Region' />
                <input type="text" placeholder='Dept'  name='Dept' />
                <input type="text" placeholder='End Date'  name='EndDate' />
                <textarea name='desc' id='desc' rows="16" placeholder='Description'></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddCampaign