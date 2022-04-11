import Brand from "../brand/Brand";
import styles from "./NavBar.module.css"

const NavBar = () => {

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <Brand/>
            </div>
            <div className={styles.navButtons}>
               <p>Settings</p> 
            </div>    
        </div>
    );

}

export default NavBar;