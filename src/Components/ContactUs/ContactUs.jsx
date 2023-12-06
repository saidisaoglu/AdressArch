import styles from "./ContactUs.module.scss";
import AllInformationJS from "../../informations";
import { ContactUsEmail } from "./Email";

export default function ContactUs({ contactWithUsRef }) {
  return (
    <section className={styles.footerContainer}>
      <p className={styles.contactUsText}>{AllInformationJS.texts.contactUs}</p>
      <ContactUsEmail />
      <div ref={contactWithUsRef} className={styles.footerWrapper}>
        <div className={styles.footerElements}>
          <div className={styles.firstWrapperElement}>
            <div className={styles.imageAddress}>
              <img
                className={styles.addressLogo}
                src={AllInformationJS.ContactInformations.bottomAddressLogo}
                alt="Address Logo"
              />
            </div>
            <a
              target="_blank"
              href={AllInformationJS.texts.locationInMap}
              className={styles.mapAndLocationText}
            >
              <img
                src={AllInformationJS.ContactInformations.whiteMapIcon}
                alt="Map Icon"
              />
              <p>{AllInformationJS.texts.locationText}</p>
            </a>
            <div className={styles.iconsContainer}>
              <a
                href={AllInformationJS.address.tel}
                className={styles.callAndPhoneNumber}
              >
                <img
                  src={AllInformationJS.ContactInformations.whitecallIcon}
                  alt="Call Icon"
                />
                <p>{AllInformationJS.texts.phoneNumber}</p>
              </a>
              <div className={styles.socialNetworkElements}>
                <a href="">
                  <img
                    src={AllInformationJS.ContactInformations.whiteFbIcon}
                    alt="Facebook Icon"
                  />
                </a>
                <a href="">
                  <img
                    src={AllInformationJS.ContactInformations.whiteWpIcon}
                    alt="Whatsapp Icon"
                  />
                </a>
                <a href="">
                  <img
                    src={AllInformationJS.ContactInformations.whiteInstaIcon}
                    alt="Instagram Icon"
                  />
                </a>
                <a href="">
                  <img
                    src={AllInformationJS.ContactInformations.whiteYoutubeIcon}
                    alt="Youtube Icon"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* ------------------responsive1440------------ */}
          <div className={styles.responsive1440WrapperElement}>
            <div className={styles.secondWrapperElement}>
              <p>{AllInformationJS.texts.homePage}</p>
              <p>{AllInformationJS.texts.blog}</p>
              <p>{AllInformationJS.texts.vlog}</p>
              <p>{AllInformationJS.texts.projects}</p>
              <p>{AllInformationJS.texts.Interior}</p>
            </div>
            <div className={styles.thirdWrapperElement}>
              <p>{AllInformationJS.texts.Exterior}</p>
              <p>{AllInformationJS.texts.whereToFind}</p>
              <p>{AllInformationJS.texts.ourProjects}</p>
              <p>{AllInformationJS.texts.competitions}</p>
            </div>
            <div className={styles.fourthWrapperElement}>
              <p>{AllInformationJS.texts.styless}</p>
              <p>{AllInformationJS.texts.educationalinformation}</p>
              <p>{AllInformationJS.texts.customerReviews}</p>
              <p>{AllInformationJS.texts.aboutUs}</p>
              <p>{AllInformationJS.texts.contactWithUs}</p>
            </div>
          </div>
          {/* ------------------responsive768------------ */}
          <div className={styles.responsive768WrapperElement}>
            <div className={styles.secondWrapperElement}>
              <p>{AllInformationJS.texts.homePage}</p>
              <p>{AllInformationJS.texts.vlog}</p>
              <p>{AllInformationJS.texts.projects}</p>
              <p>{AllInformationJS.texts.Exterior}</p>
            </div>
            <div className={styles.thirdWrapperElement}>
              <p>{AllInformationJS.texts.customerReviews}</p>
              <p>{AllInformationJS.texts.aboutUs}</p>
              <p>{AllInformationJS.texts.ourProjects}</p>
              <p>{AllInformationJS.texts.contactWithUs}</p>
              <p>{AllInformationJS.texts.whereToFind}</p>
            </div>
          </div>
          {/* ------------------responsive1024------------ */}
          <div className={styles.responsive1024WrapperElement}>
            <div className={styles.secondWrapperElement}>
              <p>{AllInformationJS.texts.homePage}</p>
              <p>{AllInformationJS.texts.vlog}</p>
              <p>{AllInformationJS.texts.projects}</p>
            </div>
            <div className={styles.thirdWrapperElement}>
              <p>{AllInformationJS.texts.Exterior}</p>
              <p>{AllInformationJS.texts.whereToFind}</p>
              <p>{AllInformationJS.texts.ourProjects}</p>
            </div>
            <div className={styles.fourthWrapperElement}>
              <p>{AllInformationJS.texts.customerReviews}</p>
              <p>{AllInformationJS.texts.aboutUs}</p>
              <p>{AllInformationJS.texts.contactWithUs}</p>
            </div>
          </div>
        </div>
        {/* ------------------designerPart------------ */}
        <div className={styles.aboutDesigner}>
          <div className={styles.aboutDesignerWrapper}>
            <div className={styles.designerTestElement}>
              <p>{AllInformationJS.texts.designerText}</p>
            </div>
            <div className={styles.designerCompanyElement}>
              <a target="_blank" href="https://webrandy.com/">
                {AllInformationJS.texts.designer}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
