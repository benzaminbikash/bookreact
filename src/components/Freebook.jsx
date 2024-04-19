import Slider from "react-slick";
import { data } from "../utils/data";
const Freebook = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
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
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
  return (
    <div className=" px-20 mt-5">
      <h1 className="text-2xl dark:text-white font-bold">Free Books</h1>
      <p className=" dark:text-white ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        nostrum in distinctio accusantium consectetur consequatur nisi aliquid
        est doloremque, quaerat voluptatibus rem vel tempora velit fugit
        dolorem, quidem a, quas totam tenetur magnam maxime ipsa voluptatum?
        Corporis voluptas, maiores eum mollitia rerum perspiciatis provident
        officiis quaerat itaque repudiandae adipisci ullam.
      </p>

      <Slider {...settings} className="mt-5">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="card w-3/4 h-[500px] dark:bg-red-600  bg-black shadow-md text-white shadow-red-600 dark:shadow-white"
            >
              <figure>
                <img
                  src={item.image}
                  alt="Shoes"
                  className="w-full h-72 object-cover object-top"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-sm font-bold">{item.name}</h2>
                <p>
                  {item.summary.length > 150
                    ? item.summary.substring(0, 150) + "..."
                    : item.summary}
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Freebook;