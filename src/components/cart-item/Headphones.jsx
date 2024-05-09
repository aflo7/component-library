import styles from './headphones.module.scss';
import headphoneImg from './headphones.jpg';
import { Link } from 'react-router-dom';

const Headphones = () => {
  return (
    <>
      <Link to="/">
        <div className="back-link-wrapper">
          <div className="back-link">Go back</div>
        </div>
      </Link>
      <div className={styles.headphoneComponentWrapper}>
        <div className={styles.headphoneWrapper}>
          <img src={headphoneImg} className={styles.headphonesImg} />
          <div className={styles.rightChild}>
            <button className={styles.freeShippingBtn}>Free shipping</button>
            <h2>Apple Airpods Max in Pink</h2>
            <div className={styles.regularPrice}>$499.99</div>
            <div className={styles.salePrice}>$399.99</div>
            <p>The offer is valid until April 3 or as long as stock lasts!</p>
            <button className={styles.addToCartBtn}>Add to cart</button>
            <div className={styles.stockWrapper}>
              <div className={styles.greenCircle}></div>
              <p>10+ pcs. in stock.</p>
            </div>
            <div className={styles.bottomButtonWrapper}>
              <button>Add to cart</button>
              <button>Add to wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headphones;
