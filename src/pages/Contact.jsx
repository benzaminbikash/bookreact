const Contact = () => {
  return (
    <div className=" bg-white dark:bg-black">
      <div className="pt-20  px-20 gap-2 max-w-screen-xl mx-auto flex justify-center">
        <form
          action=""
          className="flex gap-5 flex-col py-10 px-10 w-[500px] shadow-sm shadow-red-200 mt-20"
        >
          {/* <input
          type="text"
          placeholder="Username"
          className="w-full h-10 px-2 border rounded-lg bg-black"
        /> */}
          <input
            type="email"
            placeholder="Email"
            className="w-full h-10 px-2 border rounded-sm bg-white dark:bg-black"
          />
          <textarea
            // cols="100"
            rows="4"
            type="text"
            placeholder="your message"
            className="w-full  px-2 border rounded-sm  bg-white dark:bg-black"
          />

          <button className="bg-red-500 w-40 self-center text-white py-2 rounded-sm">
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
