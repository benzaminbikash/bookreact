import React, { useState } from "react";

function Login() {
  const [select, setSelect] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full h-screen bg-white dark:bg-black  flex  justify-center items-center ">
      <div className=" shadow-sm dark:shadow-white w-1/3 h-[300px] shadow-black">
        {/* for check sign up or in */}
        <div className="p-4 flex gap-4">
          <button
            onClick={() => {
              setSelect(0);
            }}
            className={`w-1/2 ${
              select == 0 && "bg-red-400"
            } p-2 rounded-full dark:text-white text-black  shadow-sm shadow-red-500`}
          >
            Sign In
          </button>
          <button
            onClick={() => {
              setSelect(1);
            }}
            className={`w-1/2 ${
              select == 1 && "bg-red-400"
            } p-2 rounded-full dark:text-white text-black shadow-sm shadow-red-500`}
          >
            Sign Up
          </button>
        </div>
        {select == 0 ? (
          <>
            <form className="flex flex-col gap-4 px-4" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                className="dark:bg-black bg-white px-2 py-1 rounded-md text-sm border dark:border-white border-black"
              />
              <input
                type="password"
                placeholder="Password"
                className="dark:bg-black bg-white px-2 py-1 rounded-md text-sm border  dark:border-white border-black"
              />
              <button className="dark:bg-white bg-black p-1 w-36 self-center  rounded-md">
                Login
              </button>
            </form>
            <div className="flex justify-center items-center gap-2  my-2">
              <div className="w-[2px] h-8 bg-red-400"></div>
              <p className="text-center ">or</p>
              <div className="w-[2px]  h-8 bg-red-400"></div>
            </div>
            <div className="flex justify-center mt-2">
              <button className=" border-sky-500 border py-1 px-10 shadow-sm shadow-blue-500 w-32 text-red-600 font-bold  rounded-2xl   ">
                Google
              </button>
            </div>
          </>
        ) : (
          <form className="flex flex-col gap-4 px-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              className="dark:bg-black bg-white px-2 py-1 rounded-md text-sm border dark:border-white border-black"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="dark:bg-black bg-white px-2 py-1 rounded-md text-sm border dark:border-white border-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="dark:bg-black bg-white px-2 py-1 rounded-md text-sm border dark:border-white border-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="dark:bg-black bg-white px-2 py-1 rounded-md text-sm border dark:border-white border-black"
            />
            <button className="dark:bg-white bg-black p-1 w-36 self-center rounded-md">
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
