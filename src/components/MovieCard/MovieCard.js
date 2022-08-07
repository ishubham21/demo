import style from "./MovieCard.module.css";

const MovieCard = ({ title, imgURL, categories, rating }) => {
  return (
    <>
      <div className={style.movie__card}>
        <div className={style.image}>
          <img src={imgURL} alt={title} />
        </div>
        <div className={style.cover}>
          <div className={style.content}>
            <p className={style.title}>{title}</p>
            <div className={style.categories}>
              {categories.map((category) => (
                <p key={category} className={style.categories}>
                  {category}
                </p>
              ))}
            </div>
            <p className={style.rating}>{rating}</p>
          </div>

          <div className={style.plus}>+</div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
