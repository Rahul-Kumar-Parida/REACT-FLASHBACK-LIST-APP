import styles from "./AddSection.module.css";

const AddSection = function () {
  return (
    <div className={styles.AddDiv}>
      <input
        className={styles.addInput}
        type="text"
        placeholder="Enter Your Items"
      />
      <div className={styles.QtyDiv}>
        <div className={styles.TotalQty}>
          <label className={styles.TotalLabel} htmlFor="Total">
            Total:
          </label>
          <input placeholder="e.g: 500gm" type="number" />
          <label className={styles.label2} htmlFor="quant">
            Qty.:
          </label>
          <select name="quantity" id="quant" className={styles.selectQunt}>
            <option value="Kg">kg</option>
            <option value="Gm">Gm</option>
            <option value="Lit">Lit</option>
            <option value="Pac">Pac</option>
            <option value="MiliLit">MiliLit</option>
          </select>
        </div>
        <div className={styles.DateTime}>
          <label htmlFor="date">Date: </label>
          <input className={styles.inputDate} type="date" />
          <label htmlFor="time">Time: </label>
          <input className={styles.inputTime} type="time" />
        </div>
        <div className={styles.SaveReset}>
          <button className={styles.SaveBtn}>Save</button>
          <button className={styles.ResetBtn}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default AddSection;
