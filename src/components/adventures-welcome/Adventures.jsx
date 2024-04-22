import styles from './adventures.module.css';
import { FaCircle, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GrMenu } from 'react-icons/gr';

const Adventures = () => {
  return (
    <>
      <div className="back-link-wrapper">
        <Link to="/">
          <div className="back-link">Go back</div>
        </Link>
      </div>

      <div className={styles.adventuresWrapper}>
        <div className={styles.navWrapper}>
          <nav className={styles.nav}>
            <Link className="unstyled-link">
              <div className={styles.logoWrapper}>
                <FaCircle className={styles.faCircleTop} />
                <FaCircle className={styles.faCircleBottom} />
              </div>
            </Link>

            <div className={styles.burgerWrapper}>
              <Link>
                <GrMenu className={styles.burger} />
              </Link>
              <div className={styles.dropdown}>
                <Link className="unstyled-link">
                  <p>Destinations</p>
                </Link>
                <Link className="unstyled-link">
                  <p>Sustainability</p>
                </Link>
                <Link className="unstyled-link">
                  <p>Register/Login</p>
                </Link>
              </div>
            </div>
            <div className={styles.rightNav}>
              <Link className="unstyled-link">
                <p>Destinations</p>
              </Link>
              <Link className="unstyled-link">
                <p>Sustainability</p>
              </Link>
              <Link className="unstyled-link">
                <p>Register / Login</p>
              </Link>
            </div>
          </nav>
        </div>
        <div className={styles.adventuresWelcomeWrapper}>
          <p className={styles.adventurersWelcomeHeader}>Adventurers welcome</p>

          <Link style={{width: 'fit-content'}} className="unstyled-link">
            <p className={styles.escapeText}>
              2023 escapes <FaChevronRight className={styles.chevronRight} />
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Adventures;
