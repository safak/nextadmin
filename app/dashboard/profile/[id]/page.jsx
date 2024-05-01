import styles from '@/app/ui/dashboard/profile/singleUser/singleUser.module.css'
import Image from 'next/image'

const SingleUserPage = () => {
    return(
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt="" fill />
                </div>
                John Doe
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Username</label>
                    <input type='text' name='Username' placeholder='John Doe' />
                    <label>Email</label>
                    <input type='email' name='Email' placeholder='john@gmail.com' />
                    <label>Password</label>
                    <input type='password' name='Password' />
                    <label>Phone</label>
                    <input type='text' name='Phone' placeholder='+256783923112' />
                    <label>Address</label>
                    <input type='text' name='Address' placeholder='Kalangala' />
                    <label>Is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <label>Is Active</label>
                    <select name="isActive" id="isActive">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage