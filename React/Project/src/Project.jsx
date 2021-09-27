import React from "react";
import Item from "../../components/project/Item";
import styles from "./Project.module.css";
import Form from "../../components/project/Form";
function Project() {
  const items = [
    {
      title: "abc",
      duedate: "2021/09/01",
      assignedTo: "abc",
      isComplete: "yes",
      details: "xxxxx",
    },
    {
      title: "abc",
      duedate: "2021/09/01",
      assignedTo: "abc",
      isComplete: "yes",
      details: "xxxxx",
    },
  ];

  return (
    <div className={styles.projectBody}>
      <p>No completed</p>
      {items.map((item) => (
        <Item item={item} />
      ))}
      <Form />
      {/* <Item item={{
            title: "abc",
            duedate: "2021/09/01",
            assignedTo: "abc",
            isComplete: "yes",
            details: "xxxxx",
          }} />
          <Item item={{
            title: "abc",
            duedate: "2021/09/01",
            assignedTo: "abc",
            isComplete: "yes",
            details: "xxxxx",
          }} /> */}
      <p>completed</p>
      <div className={styles.button}>
        <button className={styles.plusButton}>+</button>
      </div>
    </div>
  );
}

export default Project;
