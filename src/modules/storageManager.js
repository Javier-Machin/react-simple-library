const storageManager = (() => {
  const localStorage = window.localStorage;
  let books = loadLocalStorage();
  const getBooks = () => books;

  function addBook(book) {
    const newBook = {[book.title]: book};
    books.push(newBook[`${book.title}`]);

    saveLocalStorage();
  }

  function saveLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
  }

  function loadLocalStorage() {
    if (localStorage.getItem("books")) {
      return JSON.parse(localStorage.getItem("books"));
    } else {
      const quijote = {title: "Quijote", author: "Cervantes", pages: 200, read: "no"};
      return [quijote]
    }
  }

  return { addBook, getBooks }

})();

export default storageManager