import "./App.css";
import "./fonts.css";

const Reviews = () => {
  return (
    <div className="reviews-container-main">
      <div className="reviews-container">
        <div className="reviews-title">
          <p>Reviews</p>
        </div>
        <div className="review-card-container">
          <div className="review-card">
            <p className="comment">
              I went all in so I can change my future. My wife's boyfriend is gonna love this!
            </p>
            <p className="customer-name">-Grady Chambers</p>
          </div>
          <div className="review-card">
            <p className="comment">
              I bought this with the hope of getting a Corvette. Stupid people can believe in anything, so I can believe in Blondie!
            </p>
            <p className="customer-name">-Chris Peacock</p>
          </div>
          <div className="review-card">
            <p className="comment">
              I was kicked out of shib discord and needed a new home. Discovered Blondie and I won’t be pissed on ever again!
            </p>
            <p className="customer-name">-Mike Hawk</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
