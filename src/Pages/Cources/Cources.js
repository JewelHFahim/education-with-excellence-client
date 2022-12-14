import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleCource from "./SingleCource/SingleCource";
import "./Cources.css";
import { useLoaderData } from "react-router-dom";

const Cources = () => {
  const cources = useLoaderData();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://education-with-excellence-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="bg-base-100 min-h-screen">
      <div className="  lg:flex  w-11/12 mx-auto pt-5">
        <div className="border border-slate-3 bg-slate-100  mx-5 mt-12 mb-3 min-w-fit max-h-screen p-2 rounded-lg">
          <h1 className="text-center text-xl py-2 border border-b-orange-600 font-medium">All Categories</h1>
          {categories.map((category) => (
            <p key={category.id} className="text-blue-600 hover:underline py-1 font-medium">
              <Link to={`/category/${category.id}`}>{category.name}</Link>
            </p>
          ))}
        </div>

        <div className="">
        <p className="text-center text-2xl font-bold mb-2">OUR <span className="text-orange-600">COURSES</span> </p>          <div className="min-h-screen bg-base-100 grid grid-cols-1 lg:grid-cols-3 mb-10 gap-5">
            {cources.map((cource) => (
              <SingleCource key={cource.id} cource={cource}></SingleCource>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cources;
