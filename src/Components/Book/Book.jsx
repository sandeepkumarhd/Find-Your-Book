import axios from "axios";
import { useState } from "react";
import Card from "../Card/Card";
import style from "./Book.module.css";

const Book = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
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
        setData(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className={style.searchBox}>
        <h2>Find Your Books</h2>
        <input type={"search"} onChange={getInputValueHandler} />
        <button onClick={feachBook}>Search Here</button>
      </div>
      <div className={style.pcontainer}>
        {data.map((book, index) => {
          return (
            <div className={style.output} key = {index}>
              <Card
                imgUrl={
                  book.volumeInfo.imageLinks?.smallThumbnail
                }
                author={book.volumeInfo.authors || book.volumeInfo.author}
                title={book.volumeInfo.title}
                nubOfPage={book.volumeInfo.pageCount}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Book;
