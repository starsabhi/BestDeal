import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { writeReview } from '../../store/review';
import { getReviews, getOneReview } from '../../store/review';
import MainModal from '../MainModal';
import EditReview from '../EditReview';

function ReviewCard({ Id, Reviews, CurrrentState, Product }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const reviews = Reviews.reviews;
  const [content, setContent] = useState('');
  const [form, setForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [selectedReviewId, setSelectedReviewId] = useState(null);

  const prodcutid = Id.productId;
  // console.log(Id.productId);

  useEffect(() => {
    dispatch(getReviews(prodcutid));
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getOneReview(selectedReviewId));
  // }, [dispatch]);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    // if(validationErrors.length>0) return alert("Please Sumbit Review")
    const newReview = {
      userId: sessionUser.id,
      productId: prodcutid,
      rating: 4,
      content,
    };

    const review = await dispatch(writeReview(newReview));
    if (review) {
      console.log('THIS WORKED AS WELL AS I THINK');
      setForm(false);
      dispatch(getReviews(prodcutid));
      resetAdd();
      // window.location.reload();
    }
  };
  const resetAdd = () => {
    setContent('');
  };

  const [showEditSongModal, setShowEditSongModal] = useState(false);
  const openEditSongModal = () => {
    if (showEditSongModal) return; // do nothing if modal already showing
    setShowEditSongModal(true); // else open modal
    document.getElementById('root').classList.add('overflow');
  };
  const closeEditSongModal = () => {
    if (!showEditSongModal) return; // do nothing if modal already closed
    setShowEditSongModal(false); // else close modal
    // disable page scrolling:
    document.getElementById('root').classList.remove('overflow');
  };

  const passingFun = (reId) => {
    openEditSongModal(true);
    setSelectedReviewId(reId);
  };

  return (
    <>
      <MainModal showModal={showEditSongModal} closeModal={closeEditSongModal}>
        <EditReview
          reviewId={selectedReviewId}
          prodcutid={prodcutid}
          sessionuid={sessionUser.id}
        />
      </MainModal>

      <div className="">
        <h1>ReviewCard</h1>
        {sessionUser ? (
          <button onClick={() => setForm(true)}>Add review</button>
        ) : (
          <></>
        )}
        <></>
        {form ? (
          <form onSubmit={handleSubmitReview}>
            <input
              className="inputForAddingreview"
              type="text"
              onChange={(e) => setContent(e.target.value)}
              value={content}
              placeholder="content"
              name="content"
              required
            ></input>
            <div>
              <button>Submit</button>
              <button onClick={() => setForm(false)}>Cancel</button>
            </div>
          </form>
        ) : (
          <></>
        )}
        {reviews?.map((review) => (
          <div
            key={review.id}
            // onClick={() => selectedReviewId(review.id)}
          >
            {review.content}
            {sessionUser.id === review.userId ? (
              <>
                <button onClick={() => passingFun(review.id)}>Edit</button>
                <button>Delete</button>
              </>
            ) : (
              <></>
            )}
            {/* {setEditForm ? (
              <form onSubmit={handleSubmitReview}>
                <input
                  className="inputForAddingreview"
                  type="text"
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                  placeholder="content"
                  name="content"
                  required
                ></input>
                <div>
                  <button>Submit</button>
                  <button onClick={() => setEditForm(false)}>Cancel</button>
                </div>
              </form>
            ) : (
              <></>
            )} */}
          </div>
        ))}
      </div>
    </>
  );
}

export default ReviewCard;
