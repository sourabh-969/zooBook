import { createSlice } from "@reduxjs/toolkit"
import { books as initialBooks } from "../utils/mockData"

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: initialBooks,
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload)
    },
  },
})

export const { addBook } = booksSlice.actions
export default booksSlice.reducer

