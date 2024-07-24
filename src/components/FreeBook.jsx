import React from "react";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
function FreeBook() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const filterData = list.filter((data) => data.category === "Free");
  console.log(filterData);
  return (
<>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-bold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Dive into the world of coding with our extensive collection of books
            tailored for developers and tech enthusiasts. Whether you're a
            seasoned programmer or just starting your coding journey, we have
            the resources you need to enhance your skills.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id}/>
            ))}
          </Slider>
        </div>
      </div>
  </>
  );
}

export default FreeBook;
