import Service from "../components/Service";
import { services } from "../utils/services";

function About() {
  return (
    <div className="w-full bg-white dark:bg-black text-black dark:text-white  pt-20 px-20">
      {/* for row */}
      <div className="flex justify-between items-center ">
        <div className="w-1/2">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            temporibus quia voluptatem iusto nulla cupiditate repudiandae earum,
            vel odio praesentium? Earum expedita repellat praesentium in! Nihil
            facere perspiciatis eligendi nemo odio suscipit, repellendus
            voluptates architecto deleniti asperiores fugit. Quis accusamus,
            doloribus corporis error facere, quisquam et vel dolore natus ipsa
            unde aperiam fugit voluptates mollitia a, earum nam similique rerum
            fugiat. Ipsum est porro asperiores aut aliquid consequuntur dicta
            mollitia eaque soluta fugit iste, repudiandae voluptatum! Dolorum
          </p>
        </div>
        <div className="w-1/2 flex justify-center">
          <img src="../../images/bk.png" alt="randomImage" />
        </div>
      </div>
      {/* for service */}
      <p className="text-2xl text-center font-bold">Our Services</p>
      <div className="grid grid-cols-3 gap-10 mt-3 relative">
        {services.map((item) => {
          return <Service items={item} />;
        })}
      </div>
    </div>
  );
}

export default About;
