import style from "./Navbar.module.css";
import logo from "./../../assets/images/IMDB_Logo.png";
import gear from "../../assets/icons/gear.png";
import profile from "../../assets/images/profile.png";

const Navbar = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.logo}>
          <img src={logo} alt="IMDB Logo" />
        </div>
        <div className={style.sections}>
          <a
            className={`${style.nav__link} ${style.link__active}`}
            href="/"
          >
            Movies
          </a>
          <a className={style.nav__link} href="/">
            Celebs & Photos
          </a>
          <a className={style.nav__link} href="/">
            Community
          </a>
          <a className={style.nav__link} href="/">
            News
          </a>
        </div>
        <div className={style.user}>
          <img src={gear} alt="Settings" />
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
