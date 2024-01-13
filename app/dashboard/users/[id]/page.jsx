import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

export default async function SingleUserPage({ params }) {
  const { id } = params;
  const user = await fetchUser(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={user.img || "/noavatar.png"}
            alt="An unknown person"
            fill
          />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} action={updateUser}>
          <input type="hidden" name="id" value={user.id} />
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            defaultValue={user.username}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            defaultValue={user.email}
          />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="phone"
            defaultValue={user.phone}
          />
          <label>Address</label>
          <textarea
            type="text"
            name="address"
            placeholder="address"
            defaultValue={user.address}
          />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin" defaultValue={user.isAdmin}>
            <option
              value={true}
              // selected={user.isAdmin}
            >
              Yes
            </option>
            <option
              value={false}
              //  selected={!user.isAdmin}
            >
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive" defaultValue={user.isActive}>
            <option
              value={true}
              // selected={user.isActive}
            >
              Yes
            </option>
            <option
              value={false}
              // selected={!user.isActive}
            >
              No
            </option>
          </select>
          <button className={styles.button}>Update</button>
        </form>
      </div>
    </div>
  );
}
