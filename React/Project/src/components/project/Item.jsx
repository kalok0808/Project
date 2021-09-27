import React from "react";
import styles from "../../page/project/Project.module.css";

function Item(props) {
  return (
    <div>
      <div className={styles.Itemlist}>
        <p>Title:{props.item.title}</p>
        <p>Duedate:{props.item.duedate}</p>
        <p>Assigned To:{props.item.assignedTo}</p>
        <p>Is complete{props.item.isComplete}</p>
        <p>Details{props.item.details}</p>
      </div>
    </div>
  );
}
export default Item;
