import React from 'react';
import reviewProp from './review-prop';
import {MONTHS} from '../../const';
function PlaceReview(review) {
  const {
    comment,
    date,
    rating,
    user,
  } = review;
  return (
    <div className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user['avatar_url']}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
        <span className="property__user-status">
          {user['is_pro'] ? 'Pro' : ''}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rating*20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>
          {MONTHS[Number(date.substr(5,2))]}
          &nbsp;
          {date.substr(0,4)}
        </time>
      </div>
    </div>
  );
}

PlaceReview.propTypes = {
  ...reviewProp,
};

export default PlaceReview;
