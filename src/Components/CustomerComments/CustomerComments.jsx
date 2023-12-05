import CustomerCommentsCarousel from "./CustomerCommentsCarousel";
import CustomerCommentsScss from "./CustomerComments.module.scss";
import AllInformationJS from "../../informations";
export default function CustomerComments({ customerReviewsRef }) {
  return (
    <section
      ref={customerReviewsRef}
      className={CustomerCommentsScss.customerCommentsSection}
    >
      <h2 className={CustomerCommentsScss.CustomerCommentsHeader}>
        {AllInformationJS.texts.customerReviews}
      </h2>
      <CustomerCommentsCarousel />
    </section>
  );
}
