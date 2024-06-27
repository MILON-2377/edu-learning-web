"use client";

import { useEffect, useState } from "react";
import useBannerImages from "../Hooks/BannerImages/useBannerImages";
import Navber from "../Navber/Navber";

export default function Banner() {
  const images = useBannerImages();
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prevIndex) => (prevIndex + 1) % images.length);
      // console.log(imgIndex);
    }, 3000);

   
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      style={{ backgroundImage: `url('${images[imgIndex]}')` }}
      className=" sm:h-[80vh] flex flex-col w-full bg-cover bg-center bg-no-repeat "
    >
      <Navber></Navber>
      <div className=" flex-1  flex flex-col gap-5 px-6 items-center justify-center ">
        <h1 className=" text-4xl font-bold text-white ">EduConnect: Empowering Learning, Everywhere</h1>
        <p className="text-xl font-semibold text-gray-100 ">Unlock Your Potential with EduConnect's Learning Management
System.
</p>
<ul className="text-xl text-gray-100 list-item ">
  <li className="list-item">A comprehensive platform for students, teachers, and
  administrators</li>
  <li className="list-item">Streamline your learning experience with powerful tools and
  features</li>
</ul>
      </div>
    </div>
  );
}
