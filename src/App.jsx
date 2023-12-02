import { useMediaQuery } from "react-responsive";
import HomePage from "./Components/HomePage/HomePage";
import Projects from "./Components/Projects/Projects";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Vlog from "./Components/Vlog/Vlog";
import WhereToFind from "./Components/WhereToFind/WhereToFind";
import CustomerComments from "./Components/CustomerComments/CustomerComments";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";

export function App() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  return (
    <div>
      {isMobile ? (
        <>
          <HomePage />
          <Projects />
          <Vlog />
          <WhereToFind />
          <CustomerComments />
          <AboutUs />
          <ContactUs />
        </>
      ) : (
        // Render the Fullpage component for screens wider than 1023px
        <Fullpage>
          <FullPageSections>
            <FullpageSection>
              <HomePage />
            </FullpageSection>
            <FullpageSection>
              <Projects />
            </FullpageSection>
            <FullpageSection>
              <Vlog />
            </FullpageSection>
            <FullpageSection>
              <WhereToFind />
            </FullpageSection>
            <FullpageSection>
              <CustomerComments />
            </FullpageSection>
            <FullpageSection>
              <AboutUs />
            </FullpageSection>
            <FullpageSection>
              <ContactUs />
            </FullpageSection>
          </FullPageSections>
        </Fullpage>
      )}
    </div>
  );
}
