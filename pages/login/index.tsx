import Brand from "../../src/view/components/brand/Brand";
import Button from "../../src/view/components/button/Button";
import styles from "./index.module.css";

const LoginPage = () => {
  return (
    <div className={styles.root}>
      <Brand description={true}/>
      <div className={styles.form}>
        <div className={styles.input}>
          <h2>Username:</h2>
          <input type="text" placeholder="Brukernavn..." />
          <h2>Password:</h2>
          <input type="text" placeholder="Passord..." />
        </div>
        <div className={styles.buttons}>
          <Button name={"Login"} onclick={() => null}/>
          <Button name={"Register"} onclick={() => null}/>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
