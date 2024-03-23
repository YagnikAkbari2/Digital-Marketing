import React from "react";
import styles from "../styles/MainSection.module.scss";

const MainSection = () => {
  return (
    <div className={`flex items-center my-10 ${styles.hero}`}>
      <div>
        <h1>
          Ignite Your YouTube Success Journey with Our World-Class Content Team
        </h1>
        <p>
          Empower Your Brand's Growth with GROWWITUP's Dynamic Digital
          Solutions. Let Us be Your Strategic Ally on the Path to Digital
          Success, Unleashing the Power of Social Media and Elevating Your
          Online Presence.
        </p>
        <button>Get Your Session</button>
      </div>
      <img src="images/Hero.svg" alt="Hero..." />
    </div>
  );
};

export default MainSection;