import React, {useState, useRef} from 'react';
import ReviewRating from '../review/review-rating';
import PropTypes from 'prop-types';
import { createComment } from '../../store/api-actions';
import { connect } from 'react-redux';

const RatingTitle = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
};

function ReviewForm({ onSubmit, id }) {

  const commentRef = useRef();
  const ratingRef = useRef();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({
      id,
      comment: commentRef.current.value,
      rating: 5,
    });
  };

  const [form, setForm] = useState({id:id, ratingValue:null, comment:''});
  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" ref={ratingRef}>
        {
          Object.keys(RatingTitle).sort((a,b) => b - a).map((value) => (
            <ReviewRating
              key={value}
              id={value}
              value={value}
              title={RatingTitle[value]}
              onClick={(target) => setForm({
                ...form,
                ratingValue: target.value,
              })}
            />
          ))
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        value={form.comment}
        onChange={(target) =>
          setForm({
            ...form,
            comment: target.value,
          })}
        ref={commentRef}
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );

}
ReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit({ id, comment, rating }) {
    dispatch(createComment(
      {
        id,
        comment,
        rating,
      }));
  },
});

export {ReviewForm};
export default connect(null, mapDispatchToProps)(ReviewForm);
