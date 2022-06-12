import './EditReview.css';
import { getReviews, writeReview } from '../../../store/review';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect, useHistory } from 'react-router-dom';

export default function AddReview({ sessionuid, prodcutid, closeModal }) {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const handleSubmitReview = async (e) => {
    e.preventDefault();

    const newReview = {
      userId: sessionuid,
      productId: prodcutid,
      rating: 4,
      content,
    };

    const review = await dispatch(writeReview(newReview));
    if (review) {
      closeModal();
      dispatch(getReviews(prodcutid));
      resetAdd();
    }
  };

  const resetAdd = () => {
    setContent('');
  };

  return (
    <div className="resource-edit-form-container">
      <div className="edit-song-card">
        <h2 className="edit-song-header">Add Review</h2>
        <form
          className={'resource-edit-form'}
          autoComplete="off"
          onSubmit={(e) => handleSubmitReview(e)}
        >
          <div className="edit-song-form-group">
            <label className="edit-song-label" htmlFor="songTitle">
              <div>Review Content</div>
            </label>
            <input
              id="songTitle"
              className="edit-song-input"
              type="text"
              name="songTitle"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>

          <div className="resource-edit-form-btn-div">
            <div className="resource-btn-container">
              <button
                className="resource-cancel-btn"
                type="button"
                onClick={closeModal}
              >
                Cancel
              </button>

              <div className="resource-btn-container">
                <button className="resource-delete-btn" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
