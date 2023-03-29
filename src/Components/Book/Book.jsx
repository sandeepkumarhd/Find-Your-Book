import axios from "axios";
import { useState } from "react";
import Card from "../Card/Card";
import style from "./Book.module.css";
import { useDispatch,useSelector  } from "react-redux";
import { bookActions } from "../ReduxStore/BookSlice";


const Book = (props) => {
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState("");
  // const [data, setData] = useState([]);
const books = useSelector((state) => state.addBook.books)
  const getInputValueHandler = (event) => {
    setSearchValue(event.target.value);
  };
  const feachBook = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=AIzaSyA41TISvHL4NhO-XuO1oCFZPKESqAaeQRk`
      )
      .then((res) => {
        console.log(res.data);
        // setData(res.data.items);
        dispatch(bookActions.addBookData(res.data.items))
      })
      .catch((err) => {
        console.log(err);
      });
  };
  props.books(books);
  return (
    <div>
      <div className={style.searchBox}>
        <h2>Find Your Books</h2>
        <div>
          <input
            type={"search"}
            onChange={getInputValueHandler}
            placeholder={"Enter book name"}
          />
          <button onClick={feachBook}>Search Here</button>
        </div>
      </div>
      <div className={style.pcontainer}>
        {books.map((book, index) => {
          return (
            <div className={style.output} key={index}>
              <Card
                imgUrl={book.volumeInfo.imageLinks?.smallThumbnail}
                author={book.volumeInfo.authors || book.volumeInfo.author}
                title={book.volumeInfo.title}
                nubOfPage={book.volumeInfo.pageCount}
                text={book.searchInfo?.textSnippet}
                id={book.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Book;
