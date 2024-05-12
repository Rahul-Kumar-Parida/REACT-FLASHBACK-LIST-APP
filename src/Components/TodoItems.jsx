import AddHeading from "./AddHeading";
import styles from "./TodoItems.module.css";
const TodoItems = ({ TodoItems, onDeleteClick }) => {
  return (
    <div className={styles.AddHead}>
      {TodoItems.map((item, index) => (
        <AddHeading
          key={index}
          todoName={item.Name}
          amount={item.Amount}
          quantity={item.Quantity}
          todoDate={item.Date}
          todoTime={item.Time}
          onDeleteClick={onDeleteClick}
        ></AddHeading>
      ))}
    </div>
  );
};

export default TodoItems;
