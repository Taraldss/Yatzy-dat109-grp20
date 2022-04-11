import Brand from "../../src/view/components/brand/Brand";
import Button from "../../src/view/components/button/Button";
import styles from "./index.module.css"

const RegisterPage = () => {

    return (
        <div className={styles.root}>
          <Brand description={true}/>
          <div className={styles.form}>
            <div className={styles.input}>
                <h2>E-mail:</h2>
              <input type="text" placeholder="Brukernavn..." />
              <h2>Username:</h2>
              <input type="text" placeholder="Brukernavn..." />
              <h2>Password:</h2>
              <input type="password" placeholder="Passord..." />
              <h2>Confirm Password:</h2>
              <input type="password" placeholder="Passord..." />
            </div>
            <div className={styles.buttons}>
              <Button name={"Register"} onclick={() => null}/>
            </div>
          </div>
        </div>
      );
}

export default RegisterPage;