import React from "react";

function Service({ items }) {
  return (
    <div className="my-4">
      <div className="relative group">
        <img
          src={items.image}
          alt="randomImage"
          className="h-[300px] w-[600px] object-fill rounded-sm brightness-110 group-hover:blur-sm group-hover:brightness-50"
        />
        <div className=" absolute top-0 left-0 transform translate-y-20 px-2  group-hover:translate-y-0  right-0  w-[370px] h-[300px] opacity-0  bg-transparent group-hover:opacity-100 transition-all duration-1000 ease-in-out">
          <h1 className="text-center text-white textShadow">{items.title}</h1>
          <p className="text-white textShadow">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit ea neque sed? Esse, iure doloremque, ab quibusdam
            recusandae tenetur eveniet dignissimos mollitia asperiores iusto,
            libero molestiae pariatur repudiandae illo provident rerum enim
            velit quod dicta. Pariatur ad dicta voluptas voluptate!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
