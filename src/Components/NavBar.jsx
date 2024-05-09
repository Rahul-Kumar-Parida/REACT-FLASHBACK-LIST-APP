import styles from "./NavBar.module.css";
const NavBar = function () {
  return (
    <div className={styles.Navbar}>
      <h1 className={styles.FlashBackH1}>FlashBack</h1>
      <button type="button" className={styles.CreateBtn}>
        CreateList
      </button>
    </div>
  );
};
export default NavBar;
