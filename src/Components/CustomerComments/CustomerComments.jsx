import CustomerCommentsCarousel from "./CustomerCommentsCarousel";
import styles from "./CustomerComments.module.scss";
import AllInformationJS from "../../informations";
export default function CustomerComments({ customerReviewsRef }) {
  return (
    <section
      ref={customerReviewsRef}
      className={styles.customerCommentsSection}
    >
      <h2 className={styles.CustomerCommentsHeader}>
        {AllInformationJS.texts.customerReviews}
      </h2>
      <CustomerCommentsCarousel />
    </section>
  );
}
