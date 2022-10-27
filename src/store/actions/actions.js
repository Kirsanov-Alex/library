export const DELETE_BOOK = "DELETE_BOOK";
export const deleteBook = (payload) => {
  return {
    type: DELETE_BOOK,
    payload,
  };
};

export const CREATE_BOOK = "CREATE_BOOK";
export const createBook = (payload) => {
  return {
    type: CREATE_BOOK,
    payload,
  };
};

export const UPDATE_BOOK = "UPDATE_BOOK";
export const updateBook = (payload) => {
  return {
    type: UPDATE_BOOK,
    payload,
  };
};
