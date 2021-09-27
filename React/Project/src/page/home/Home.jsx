import React from "react";
import styles from "./Home.module.css";
import img from "../../img/IMG_4369-2.jpg";
import { Link } from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <section className={styles.showcase}>
        <header>
          <h2 className={styles.logo}>Welcome</h2>
          <div>
            <Link to="/Login">
              <div className={styles.toggle} />
            </Link>
          </div>
        </header>
        <img src={img} />
        <div className={styles.overlay}></div>
        <div className={styles.text}>
          <h2>Hello! {this.props.user}</h2>
          {/* <a href="./about_me/about_me.html">About me</a> */}
          <div className={styles.button}>
            <Link to="/Project">Project</Link>
            <Link to="/Todo">Todo </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
