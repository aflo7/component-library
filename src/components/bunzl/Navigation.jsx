import './bunzl.scss';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <>
      <Link to="/">
        <div className="back-link">Go back</div>
      </Link>
      <div className="bunzl-wrapper">
        <footer className="footer">
          <p className="bunzl-copyright-text">Bunzl plc &copy; 2024</p>
          <div className="show-text">
            Show full footer
            <AiOutlineDown className="down-arrow" />
          </div>
        </footer>

        <div className="linkedin-wrapper">
          <div className="linked-in-text">
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
