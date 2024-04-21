import styles from './nav.module.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <Link to="/">
        <div className="back-link-wrapper">
          <div className="back-link">Go back</div>
        </div>
      </Link>

      <div className={styles.navWrapper}>
        <nav className={styles.facebookNav}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/2560px-Facebook_Logo_%282019%29.svg.png"
            className={styles.facebookLogo}
          />
          <button className={styles.loginBtn}>Log In</button>
        </nav>
      </div>
    </>
  );
};

export default Nav;
