import styles from "./ContactUs.module.scss";
import AllInformationJS from "../../informations";

export default function ContactUs() {
  return (
    <section className={styles.footerContainer}>
      <p className={styles.contactUsText}>{AllInformationJS.texts.contactUs}</p>
      <div className={styles.inputsContainer}>
        <div className={styles.fullnameAndEmailElements}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={AllInformationJS.texts.fullName}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder={AllInformationJS.texts.email}
          />
        </div>
        <div className={styles.headerAndMessageElements}>
          <input
            type="text"
            name="header"
            id="header"
            placeholder={AllInformationJS.texts.header}
          />
          <input
            className={styles.messageInput}
            type="text"
            name="message"
            id="message"
            placeholder={AllInformationJS.texts.message}
          />
        </div>
        <div className={styles.sendButtonElement}>
          <button className={styles.sendButton}>
            {AllInformationJS.texts.sendButton}
          </button>
        </div>
      </div>
      <div className={styles.footerWrapper}>
        <div className={styles.footerElements}>
          <div className={styles.firstWrapperElement}>
            <div className={styles.imageAddress}>
              <img
                className={styles.addressLogo}
                src={AllInformationJS.ContactInformations.bottomAddressLogo}
                alt="Address Logo"
              />
            </div>
            <div className={styles.mapAndLocationText}>
              <img
                src={AllInformationJS.ContactInformations.whiteMapIcon}
                alt="Map Icon"
              />
              <p>{AllInformationJS.texts.locationText}</p>
            </div>
            <div className={styles.iconsContainer}>
              <div className={styles.callAndPhoneNumber}>
                <img
                  src={AllInformationJS.ContactInformations.whitecallIcon}
                  alt="Call Icon"
                />
                <p>{AllInformationJS.texts.phoneNumber}</p>
              </div>
              <div className={styles.socialNetworkElements}>
                <img
                  src={AllInformationJS.ContactInformations.whiteFbIcon}
                  alt="Facebook Icon"
                />
                <img
                  src={AllInformationJS.ContactInformationswhiteWpIcon}
                  alt="Whatsapp Icon"
                />
                <img
                  src={AllInformationJS.ContactInformationswhiteInstaIcon}
                  alt="Instagram Icon"
                />
                <img
                  src={AllInformationJS.ContactInformationswhiteYoutubeIcon}
                  alt="Youtube Icon"
                />
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
              <a href="#">{AllInformationJS.texts.designer}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
