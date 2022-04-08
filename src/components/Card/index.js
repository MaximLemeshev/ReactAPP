import React from "react";
import styles from "./Card.module.scss";

export default function Card({
  onFavorite,
  title,
  imgUrl,
  price,
  onPlus,
  favorited = false,
  id,
}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickFavorite = () => {
    //
    onFavorite({ id, title, imgUrl, price });
    setIsFavorite((prevState) => !prevState);
  };

  const onClickPlus = () => {
    //
    onPlus({ title, imgUrl, price });
    setIsAdded((prevState) => !prevState);
  };

  return (
    <div className={styles.card}>
      <div onClick={onFavorite} className={styles.favorite}>
        {/* <img src="/img/heart-unlike.svg " alt="Like" /> */}
        <img
          onClick={onClickFavorite}
          src={isFavorite ? "/img/heart-like.svg" : "/img/heart-unlike.svg"}
          alt="Like"
        />
      </div>
      <img width={133} height={112} src={imgUrl} alt="Sneakers" />
      {/*  */}
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>

        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}
