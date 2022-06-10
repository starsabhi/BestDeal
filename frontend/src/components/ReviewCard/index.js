import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { writeReview } from '../../store/review';
import { getReviews } from '../../store/review';
function ReviewCard({ Id, Reviews, CurrrentState, Product }) {
  const sessionUser = useSelector((state) => state.session.user);
  const reviews = Reviews.reviews;
  const [content, setContent] = useState('');
  const [form, setForm] = useState(false);
  const dispatch = useDispatch();
  const prodcutid = Id.productId;
  console.log(Id.productId);

  useEffect(() => {
    dispatch(getReviews(prodcutid));
  }, [dispatch]);

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
      // setFrom(false);
      dispatch(getReviews(prodcutid));
      // reset();
      // window.location.reload();
    }
  };

  return (
    <>
      <div className="PageNotFound">
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
              id="allInputforCreateBinDetailpage"
              type="text"
              onChange={(e) => setContent(e.target.value)}
              value={content}
              placeholder="answer"
              name="answer"
            ></input>
            <div>
              <button id="businessDPeditBtn">Submit</button>
              <button id="businessDPeditBtn">Cancel</button>
            </div>
          </form>
        ) : (
          <></>
        )}
        {reviews?.map((review) => (
          <div key={review.id}>{review.content}</div>
        ))}
      </div>
    </>
  );
}

export default ReviewCard;
