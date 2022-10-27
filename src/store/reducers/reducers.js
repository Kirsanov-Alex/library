import { DELETE_BOOK, CREATE_BOOK, UPDATE_BOOK } from "../actions/actions";

const BOOKS_ID = "books";
const newBooks = JSON.parse(localStorage.getItem(BOOKS_ID));
const initialState = {
  books: newBooks || [],
};

export default function bookReducer(state = initialState, { type, payload }) {
  let newBooks;
  switch (type) {
    case CREATE_BOOK:
      newBooks = [...state.books, createEmptyBook()];
      localStorage.setItem(BOOKS_ID, JSON.stringify(newBooks));
      return { ...state, books: newBooks };
    case UPDATE_BOOK:
      newBooks = state.books.map((book) =>
        book.id !== payload.id ? book : payload
      );
      localStorage.setItem(BOOKS_ID, JSON.stringify(newBooks));
      return { ...state, books: newBooks };
    case DELETE_BOOK:
      newBooks = state.books.filter((book) => book.id !== payload);
      localStorage.setItem(BOOKS_ID, JSON.stringify(newBooks));
      return { ...state, books: newBooks };
    default:
      return state;
  }
}

export function createEmptyBook() {
  return {
    bookName: "",
    authorName: "",
    discription: "",
    genre: [],
    cost: "",
    language: "",
    availability: "",
    file: "",
    id: Date.now(),
  };
}
