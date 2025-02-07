// Book Details page.
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books.books);
  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white p-6 rounded shadow-md">
        <img
          src={book.cover}
          alt="Demo.img"
          className="w-[200px] h-[300px] m-auto"
        />
        <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
        <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
        <p className="text-gray-700 mb-4">{book.description}</p>
        <p className="text-sm text-gray-500 mb-2">Category: {book.category}</p>
        <p className="text-sm text-gray-500 mb-4">Rating: {book.rating}/5</p>
        <Link
          to="/browse"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Back to Browse
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;
