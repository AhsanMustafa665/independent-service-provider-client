import { Carousel } from "react-bootstrap";
import { useState } from "react";
import banner1 from "../../../Assests/images/Banner/banner-1.png"
import banner2 from "../../../Assests/images/Banner/banner-2.png"
import banner3 from "../../../Assests/images/Banner/banner-3.png"

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Find Nearest Doctor.</h3>
          <p>We Care for Your Health & Medical Support</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Browse by specialist</h3>
          <p>Bring care to your home with one click</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Helping Doctors with the Business of Medicine.</h3>
          <p>
          Doctors Services helps physicians increase revenue.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Banner;