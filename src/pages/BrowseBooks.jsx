// All book display page.
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books.books);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredBooks = books.filter((book) => {
    const matchesCategory = selectedCategory
      ? book.category === selectedCategory
      : true;
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const uniqueCategories = [...new Set(books.map((book) => book.category))];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">
        {category ? `Browse ${category} Books` : "Browse All Books"}
      </h1>
      <div className="flex mb-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded mr-4"
        >
          <option value="">All Categories</option>
          {uniqueCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search by title or author"
          className="w-full p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white p-6 rounded shadow-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
          >
            <img
              src={book.cover}
              alt="Demo.img"
              className="w-[200px] h-[300px] m-auto"
            />
            <h2 className="text-xl font-bold mb-2">{book.title}</h2>
            <p className="text-gray-600 mb-4">by {book.author}</p>
            <p className="text-sm text-gray-500 mb-5">
              Category: {book.category}
            </p>
            <Link
              to={`/book/${book.id}`}
              className=" text-white hover:underline bg-blue-400 p-2 rounded-md hover:bg-blue-600"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseBooks;
