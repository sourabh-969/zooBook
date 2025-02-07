// Filter Book base on Rating 

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {
  const books = useSelector((state) => state.books.books);
  const highRatedBooks = books.filter((book) => book.rating > 4.5).slice(0, 6);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Popular Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highRatedBooks.map((book) => (
          <div key={book.id} className="bg-white p-6 rounded shadow-md">
            <img
              src={book.cover}
              alt="Demo.img"
              className="w-[300px] h-[300px] m-auto"
            />
            <h2 className="text-xl font-bold mb-2">{book.title}</h2>
            <p className="text-gray-600 mb-4">by {book.author}</p>
            <Link
              to={`/book/${book.id}`}
              className="text-white hover:underline bg-blue-400 p-2 rounded-md hover:bg-blue-600"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
      <Link
        to="/browse"
        className="block mt-8 text-center text-blue-500 hover:underline"
      >
        View All Books
      </Link>
    </div>
  );
};

export default HomePage;
