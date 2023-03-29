import Book from "./Components/Book/Book";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import BookSummry from "./Components/Header/BookSummry";
import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);
  const booksList = (data) => {
    setData(data);
  };
  return (
    <div>
      <BrowserRouter>
        <Route path={"/"} exact>
          <Book books={booksList} />
        </Route>
        <Route path={"/book/:bookId"}>
          <BookSummry booksListData={data} />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
