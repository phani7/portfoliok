import { Link, useLocation } from "react-router-dom";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hi,</p>
          <p>I am phanideep kallepalli</p>
          <p>Software developer</p>
        </h1>
        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>
      <div className="person">
        <img
          src="https://res.cloudinary.com/drxqukrrc/image/upload/v1655916451/samples/phani/IMG_20180326_162619_zqzgla.jpg"
          alt="person picture"
        />
      </div>
    </div>
  );
};

export default Home;
