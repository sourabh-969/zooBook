// Root page
import { useState } from "react";
import { Link } from "react-router-dom";
import backgroundGif from "../assets/background.gif";
import { categories } from "../utils/mockData";

const HeroPage = () => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundGif})` }}
    >
      <div className="min-h-screen absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center bg-black">
        <h1 className="text-5xl font-bold mb-4 text-white">
          Welcome to ZooBook
        </h1>
        <p className="text-xl mb-8 text-white">Your Online Library System</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => setShowCategories(!showCategories)}
        >
          Explore Categories
        </button>
        {showCategories && (
          <div className="mt-8 bg-gray-200 bg-opacity-50 p-6 rounded shadow-md  w-1/2">
            <h2 className="text-2xl font-bold mb-4">Book Categories</h2>
            <ul className="flex flex-col gap-4">
              {categories.map((category) => (
                <li
                  key={category}
                  className="w-full flex justify-center items-center  hover:bg-blue-100"
                >
                  <Link
                    to={`/browse/${category}`}
                    className="text-back-500 hover:underline"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroPage;
