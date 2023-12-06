import styles from "./VectorImage.module.scss";
import AllInformationJS from "../../informations";

export default function VectorImage() {
  return (
    <div className={styles.container}>
      <div className={styles.vectorImageContainer}>
        <img
          src={AllInformationJS.ContactInformations.ContactUsVector}
          alt="Vector Image"
        />
      </div>
    </div>
  );
}
