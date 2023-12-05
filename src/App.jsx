import { useRef } from "react";
import styles from "./App.module.scss";
import HomePage from "./Components/HomePage/HomePage";
import Projects from "./Components/Projects/Projects";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import CustomerComments from "./Components/CustomerComments/CustomerComments";
import WhereToFindS from "./Components/WhereToFind/WhereToFindS";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  const refs = {
    projectsRef: useRef(null),
    vlogRef: useRef(null),
    whereToFindRef: useRef(null),
    customerReviewsRef: useRef(null),
    aboutUsRef: useRef(null),
    contactWithUsRef: useRef(null),
  };
  const handleClick = (refName) => {
    const refNames = refs[refName];
    refNames.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={styles.appContainer}>
      <HomePage handleClick={handleClick} />
      <Projects projectsRef={refs.projectsRef} vlogRef={refs.vlogRef} />
      <div className={styles.forBackground}>
        <WhereToFindS whereToFindRef={refs.whereToFindRef} />
        {/* <CustomerComments customerReviewsRef={refs.customerReviewsRef} /> */}
        <AboutUs aboutUsRef={refs.aboutUsRef} />
        <ContactUs contactWithUsRef={refs.contactWithUsRef} />
        <ToastContainer />
      </div>
    </div>
  );
}
