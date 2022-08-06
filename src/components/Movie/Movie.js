import style from "./Movie.module.css";
import playIcon from "./../../assets/icons/play.png";

const Movie = () => {
  return (
    <>
      <div className={style.movie}>
        <div className={style.movie__title}>
          <h1>The Martian</h1>
          <div className={style.category}>
            <p>Adventure</p>
            <p>Sci-fi</p>
            <p>Thriller</p>
          </div>
        </div>

        <div className={style.watch__btn}>
          <p>Watch Trailer</p>
          <img src={playIcon} alt="Play" />
        </div>

        <div className={style.in__theatres}>
          <p>In Theathers</p>
          <p className={style.date}>15 Oct, 2015 (USA)</p>
        </div>
      </div>
    </>
  );
};

export default Movie;
