
import './subscribe.scss';
import { Link } from 'react-router-dom';

const Subscribe = () => {
  return (
    <>
      <Link to="/">
        <div className="back-link-wrapper">
          <div className="back-link">Go back</div>
        </div>
      </Link>

      <div className="subscribe-wrapper">
        <div className="subscribe">
          <p className="subscribe-to-premium-text">Subscribe to Premium</p>
          <p>
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue.
          </p>
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
