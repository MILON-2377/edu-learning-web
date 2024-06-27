"use client";
import RegistationCompo from "@/components/UserRegisterForm/RegistationCompo";
import UserRegisterForm from "@/components/UserRegisterForm/UserRegisterForm";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Register() {
  const [isProfessionSelect, setIsProfessionSelect] = useState(null);
  const [userRegisterData, setUserRegisterData] = useState({});
  const [loadNextForm, setLoadNextForm] = useState(false);

  const handleSelector = (name) => {
    if (name) {
      setIsProfessionSelect(name);
      setUserRegisterData({ ...userRegisterData, name });
    }
  };

  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoadNextForm(true);
    const form = e.target;
  };

  return (
    <div
      className={
        loadNextForm
          ? " lg:h-screen flex items-center justify-center h-screen lg:px-8 bg-[url('https://i.ibb.co/qYM2fKz/Gemini-Generated-Image-sikc52sikc52sikc.jpg')] bg-cover bg-center bg-no-repeat "
          : "h-screen lg:flex-row lg:justify-between w-full px-2 sm:flex sm:items-center sm:px-7 sm:py-6 gap-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 sm:justify-center  bg-cover bg-center bg-no-repeat "
      }
    >
      <div className={loadNextForm ? "hidden" : "lg:w-[50%]"}>
        <RegistationCompo></RegistationCompo>
      </div>
      <div
        className={
          loadNextForm
            ? "lg:w-[70%] sm:w-[650px] lg:ml-7 px-2 sm:px-0   sm:mt-0 sm:mr-6 flex items-center bg-gradient-to-r from-sky-500 to-indigo-500 justify-center sm:rounded-3xl lg:rounded-full max-w-[95%] max-h-[85%] sm:h-[650px] sm:max-h-[80vh] lg:h-[580px] border border-white  "
            : "lg:w-[650px] sm:w-[650px]  mt-[30%] sm:mt-0 mr-6 bg-[url('https://i.ibb.co/qYM2fKz/Gemini-Generated-Image-sikc52sikc52sikc.jpg')] bg-cover bg-center lg:border bg-no-repeat lg:bg-none flex items-center justify-center sm:rounded-full w-full h-[60%] sm:h-[580px] lg:h-[400px] border-white  "
        }
      >
        {loadNextForm ? (
          <div className=" w-[70%] ">
            <UserRegisterForm
              userDataDi={userRegisterData}
              userData={setUserRegisterData}
              profession ={isProfessionSelect}
            ></UserRegisterForm>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div className="form-control flex flex-col gap-7 ">
              <p className="text-white text-2xl font-bold sm:text-3xl ">
                Select your profession
              </p>
              <div className="flex flex-col gap-4">
                <span className="text-white text-xl font-bold sm:text-2xl ">
                  I am a{" "}
                </span>
                <div>
                  <label
                    onClick={() => handleSelector("Student")}
                    className={
                      isProfessionSelect === "Teacher"
                        ? "hidden"
                        : "cursor-pointer border bg-black bg-opacity-70 lg:bg-opacity-0 border-white rounded-md lg:border-none mb-3 lg:mb-0 label"
                    }
                  >
                    <FaArrowRight className="text-yellow-500 text-4xl" />
                    <span className="label-text text-xl font-semibold  text-white">
                      Student
                    </span>
                    <input
                      type="checkbox"
                      defaultChecked={isProfessionSelect === "Student"}
                      className="checkbox checkbox-error"
                    />
                  </label>
                  <label
                    onClick={() => handleSelector(() => "Teacher")}
                    className={
                      isProfessionSelect === "Student"
                        ? " hidden"
                        : "cursor-pointer bg-black bg-opacity-70 lg:bg-opacity-0 border border-white rounded-md lg:border-none transition-all label"
                    }
                  >
                    <FaArrowRight className="text-yellow-500 text-4xl" />
                    <span className="label-text text-xl font-semibold text-white ">
                      Teacher
                    </span>
                    <input
                      type="checkbox"
                      defaultChecked={isProfessionSelect === "Teacher"}
                      className="checkbox checkbox-error"
                    />
                  </label>
                </div>
              </div>
            </div>
            <button
              disabled={!isProfessionSelect}
              className="px-3 transition-all text-xl font-semibold duration-500  hover:bg-fuchsia-500 mt-9 py-2  border border-white text-white rounded-3xl w-full "
            >
              Next
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
