import React from "react";
import "./ReviewList.css";

const ReviewList = ({ reviews }) => {
  return (
    <section className="review-list">
      {reviews.map((review) => (
        <div className="review" key={review.id}>
          <div className="review-details">
            <div className="app-store">{review.appStoreName}</div>
            <div className="review-heading">{review.reviewHeading}</div>
            <div className="review-rating">{review.rating}</div>
            <div className="review-text">{review.reviewText}</div>
            <div className="review-user">{review.reviewUserName}</div>
            <div className="review-time">{review.reviewDate}</div>
            <div className="review-country">{review.countryName}</div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ReviewList;
