import './EditReview.css';
import { updateReview, getOneReview, getReviews } from '../../store/review';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect, useHistory } from 'react-router-dom';

export default function EditReview({
  reviewId,
  sessionuid,
  prodcutid,
  closeModal,
}) {
  const dispatch = useDispatch();

  const currentReview = useSelector((state) => state.review);
  console.log(currentReview.content, 'MODALSTATE');
  const [content, setContent] = useState(`${currentReview.content}`);
  // const [updateContent, setUpdateContent] = use;
  // useEffect(() => {
  //   dispatch(getReviews(prodcutid));
  // }, [dispatch]);
  useEffect(() => {
    dispatch(getOneReview(reviewId, prodcutid));
    // console.log(getOneBusiness(businessId))
  }, [dispatch]);

  const handleEditReview = async (e) => {
    e.preventDefault();
    // if(validationErrors.length>0) return alert("Please Sumbit Review")
    const newReview = {
      userId: sessionuid,
      productId: prodcutid,
      rating: 4,
      content,
    };

    const review = await dispatch(updateReview(newReview));
    if (review) {
      console.log('THIS WORKED AS WELL AS I THINK');
      // setForm(false);
      // dispatch(getReviews(prodcutid));
      // resetAdd();
      // window.location.reload();
    }
  };

  return (
    <div className="resource-edit-form-container">
      <div className="edit-song-card">
        <h2 className="edit-song-header">Edit Review</h2>
        <form
          className={'resource-edit-form'}
          autoComplete="off"
          onSubmit={handleEditReview}
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
