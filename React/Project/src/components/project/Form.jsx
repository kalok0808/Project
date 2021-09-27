import React from "react";
import styles from "../../page/project/Project.module.css";
function Form() {
  // input vaule set state, onchange setState
  return (
    <div>
      <form className={styles.projectForm}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />

        <label htmlFor="duedate">Duedate</label>
        <input
          class="due-date"
          type="date"
          name="duedate"
          placeholder="Due date"
        />

        <label htmlFor="assignedTo">Assigned To </label>
        <input type="text" name="assignedTo" id="assignedTo" />

        <label htmlFor="isComplete">
          Complete?
          <input
            type="checkbox"
            name="isComplete"
            id="isComplete"
            className={styles.checkBox}
          />
        </label>
        <label htmlFor="details">Details</label>
        <textarea
          id="details"
          name="details"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <div className={styles.formButton}>
          <button type="button" id="submit" className={styles.submitButton}>
            Submit
          </button>
          <button type="button" id="x" className={styles.xButton}>
            X
          </button>
        </div>
      </form>
    </div>
  );
}
export default Form;
