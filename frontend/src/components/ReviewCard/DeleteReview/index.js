import { deleteReview } from '../../../store/review';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { NavLink, Redirect, useHistory } from 'react-router-dom';
export default function DeleteReview({
  reviewId,
  sessionuid,
  prodcutid,
  editcontent,
  closeModal,
}) {
  const dispatch = useDispatch();

  const handleReviewDelete = (e) => {
    e.preventDefault();
    const deleteCompleted = dispatch(deleteReview(reviewId));
    if (deleteCompleted) {
      closeModal();
      // console.log('Review DELETE working ');
    }
  };

  return (
    <div className="resource-edit-form-container">
      <div className="edit-song-card">
        <h2 className="edit-song-header">Delete Review</h2>
        <form className={'resource-edit-form'} autoComplete="off">
          <div className="edit-song-form-group"></div>

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
                <button
                  className="resource-delete-btn"
                  type="submit"
                  onClick={(e) => handleReviewDelete(e)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
