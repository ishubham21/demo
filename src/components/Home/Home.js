import style from "./Home.module.css";
import Navbar from "../Navbar/Navbar";
import SeekDots from "../SeekDots/SeekDots";
import Movie from "../Movie/Movie";

const Home = () => {
  return (
    <>
      <div className={style.app__carousel}>
        <Navbar />
        <SeekDots />
        <div className={style.home__content}>
          <Movie />
        </div>
      </div>
    </>
  );
};

export default Home;
