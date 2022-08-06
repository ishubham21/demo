import style from "./Content.module.css";

const Content = () => {
  return (
    <>
      <div className={style.app__content}>
        <div className={style.container}>
          <div className={style.movie_categories}>
            <div className={style.shubham}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
