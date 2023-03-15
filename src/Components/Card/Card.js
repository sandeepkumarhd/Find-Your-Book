import style from "./Card.module.css";
import image from "./no image.png";

const Card = ({ imgUrl, author, title, nubOfPage }) => {
  return (
    <div className={style.card}>
      <main>
        {imgUrl ? <img src={imgUrl} alt="" /> : <img src={image} alt="" />}

        <p>Author : {author}</p>
        <p>Name of The book : {title}</p>
        <p>Number Of Pages : {nubOfPage}</p>
      </main>
    </div>
  );
};
export default Card;
