import style from "./BookSummry.module.css";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
const BookSummry = (props) => {
    const param = useParams()
    const history = useHistory()
console.log(param.bookId);
    const filteredBook = props.booksListData.find((book) => book.id===param.bookId)
    const goBackHandler = () =>{
        history.goBack()
    }
  return (
    <div className={style.summry}>
      <p>{filteredBook?.searchInfo?.textSnippet}</p>
      <button onClick={goBackHandler}>Go Back</button>
    </div>
  );
};
export default BookSummry;
