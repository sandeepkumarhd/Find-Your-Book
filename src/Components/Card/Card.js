import style from "./Card.module.css";
import image from "./no image.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import BookSummry from "../Header/BookSummry";
const Card = ({ imgUrl, author, title, nubOfPage,text ,id}) => {
  const param = useParams()
  const [isDetails,setIsDetails] = useState(false)
  if(param.bookId===id){
    setIsDetails(true)
  }
  return (
    <div>
    {!isDetails? <div className={style.card}>
    <main>
      {imgUrl ? <img src={imgUrl} alt="" /> : <img src={image} alt="" />}
      <p> <span>Author</span>: {author}</p>
      <p> <span>Name of The book</span>: {title}</p>
      <p> <span>Number Of Pages</span>: {nubOfPage}</p>
      <Link to={`/book/${id}`}>View Summry</Link>
    </main>
  </div>:<BookSummry/>}</div>
    
  );
};
export default Card;
