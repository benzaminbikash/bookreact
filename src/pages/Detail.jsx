import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Detail() {
  const value = useLocation();
  const item = value.state;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className=" h-full bg-white pt-10 px-20 dark:bg-black">
      <div className="flex flex-col items-center mt-10">
        <img
          src={item.image}
          alt="randomimage"
          className="w-[350px] h-[400px] object-contain rounded-lg"
        />
        <h1 className="text-2xl font-bold my-5 text-red-500 ">{item.name}</h1>
        <p>{item.summary}</p>
      </div>
    </div>
  );
}

export default Detail;
