import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./redux/store"
import Navbar from "./components/Navbar"
import HeroPage from "./pages/HeroPage"
import HomePage from "./pages/HomePage"
import BrowseBooks from "./pages/BrowseBooks"
import AddBook from "./pages/AddBook"
import BookDetails from "./pages/BookDetails"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<HeroPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/browse" element={<BrowseBooks />} />
            <Route path="/browse/:category" element={<BrowseBooks />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  )
}

export default App

