import Navbar from "../Navbar/Navbar";
import CarouselInNavbar from "./Carousel";

export default function HomePage({ handleClick }) {
  return (
    <>
      <Navbar handleClick={handleClick} />
      <CarouselInNavbar />
    </>
  );
}
