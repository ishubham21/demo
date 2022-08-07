import style from "./Content.module.css";
import star from "../../assets/icons/star.png";
import MovieCard from "../MovieCard/MovieCard";

const Content = () => {
  return (
    <>
      <div className={style.app__content}>
        <div className={style.container}>
          <div className={style.categories__navbar}>
            <div className={style.categories}>
              <a
                className={`${style.nav__link} ${style.link__active}`}
                href="/"
              >
                In Theaters
              </a>
              <a className={style.nav__link} href="/">
                Coming Soon
              </a>
              <a className={style.nav__link} href="/">
                Charts
              </a>
              <a className={style.nav__link} href="/">
                TV Series
              </a>
              <a className={style.nav__link} href="/">
                Trailers
              </a>
              <a className={style.nav__link} href="/">
                More
              </a>
            </div>
            <div className={style.star}>
              <img src={star} alt="Star" />
              179
            </div>
          </div>
        </div>
        <div className={style.movie__container}>
          <div className={style.movie__sub}>
            <MovieCard
              title="Mockingjay"
              imgURL="https://m.media-amazon.com/images/I/713YZHp1hcL._AC_SY741_.jpg"
              categories={["Adventure", "Sci-Fi", "Thriller"]}
              rating="8.3"
            />
            <MovieCard
              title="Mockingjay"
              imgURL="https://m.media-amazon.com/images/I/713YZHp1hcL._AC_SY741_.jpg"
              categories={["Adventure", "Sci-Fi", "Thriller"]}
              rating="8.3"
            />
            <MovieCard
              title="Mockingjay"
              imgURL="https://m.media-amazon.com/images/I/713YZHp1hcL._AC_SY741_.jpg"
              categories={["Adventure", "Sci-Fi", "Thriller"]}
              rating="8.3"
            />
            <MovieCard
              title="Mockingjay"
              imgURL="https://m.media-amazon.com/images/I/713YZHp1hcL._AC_SY741_.jpg"
              categories={["Adventure", "Sci-Fi", "Thriller"]}
              rating="8.3"
            />
            <MovieCard
              title="Mockingjay"
              imgURL="https://m.media-amazon.com/images/I/713YZHp1hcL._AC_SY741_.jpg"
              categories={["Adventure", "Sci-Fi", "Thriller"]}
              rating="8.3"
            />
            <MovieCard
              title="Mockingjay"
              imgURL="https://m.media-amazon.com/images/I/713YZHp1hcL._AC_SY741_.jpg"
              categories={["Adventure", "Sci-Fi", "Thriller"]}
              rating="8.3"
            />
          </div>
          <div className={style.more}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className={style.footer}>
        
      </div>
    </>
  );
};

export default Content;
