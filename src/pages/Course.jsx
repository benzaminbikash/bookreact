import { Link } from "react-router-dom";
import { courses } from "../utils/courses";
import { useEffect } from "react";

const Course = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="dark:bg-black bg-white place-items-center mx-auto pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-20">
      {courses.map((item, index) => {
        return (
          <Link
            key={index}
            to={`/bookdetail/${item.id}`}
            state={item}
            className="hover:scale-105 transition-all duration-300 ease-linear self-center card w-3/4 h-[400px] mb-4 dark:bg-red-600  bg-black shadow-md text-white shadow-red-600 dark:shadow-white"
          >
            <img
              src={item.image}
              alt="Shoes"
              className="w-full  h-[150px] md:h-[200px] rounded-lg  bg-yellow-400 object-cover object-top"
            />

            <div className="card-body">
              <h2 className="card-title text-sm font-bold animate-pulse">
                {item.name}
              </h2>
              <p className="text-xs">
                {item.summary.length > 150
                  ? item.summary.substring(0, 150) + "..."
                  : item.summary}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Course;
