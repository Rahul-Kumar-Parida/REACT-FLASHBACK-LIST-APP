import AddSection from "./AddSection";
import styles from "./ItemList.module.css";
const ItemList = function () {
  return (
    <div className={styles.containerDiv}>
      <AddSection></AddSection>
    </div>
  );
};

export default ItemList;
