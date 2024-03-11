import React from "react";
import styles from "./Premium.module.css";
import CardHighlight from "../Card/CardHighlight";
import IconCrown from "../Icons/IconCrown";
import Button, { ButtonType } from "../Button/Button";

export default function Premium() {
  return (
    <CardHighlight title="Go to Premium">
      <div className={styles.premium_icon}>
        <IconCrown />
      </div>
      <h3 className="font-medium">Need more features ?</h3>
      <p className="mb-5">Please contact Ifan Ashari for more features.</p>
      <a href="https://www.linkedin.com/in/ifan-ashari-06419b167/" target="_blank">
      <Button type={ButtonType.PRIMARY} full>
        Linked In Ifan Ashari
      </Button>
      </a>
    </CardHighlight>
  );
}
