import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { writeReview } from '../../store/review';
import { getReviews, getOneReview } from '../../store/review';
import MainModal from '../MainModal';
import EditReview from './EditReview/index';
import DeleteReview from './DeleteReview';
import AddReview from './AddReview';
import './ReviewCard.css';

function ReviewCard({ Id, Reviews, CurrrentState, Product }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const CheckingWhat = useSelector((state) => state);
  // console.log('CheckingWhatREVIEWCARD', Reviews);
  // const [content, setContent] = useState('');
  // const [form, setForm] = useState(false);

  const [selectedReviewId, setSelectedReviewId] = useState(null);
  const [editcontent, setEditContent] = useState('');

  const prodcutid = Id.productId;

  useEffect(() => {
    dispatch(getReviews(prodcutid));
  }, [dispatch]);

  // const handleSubmitReview = async (e) => {
  //   e.preventDefault();

  //   const newReview = {
  //     userId: sessionUser.id,
  //     productId: prodcutid,
  //     rating: 4,
  //     content,
  //   };

  //   const review = await dispatch(writeReview(newReview));
  //   if (review) {
  //     setForm(false);
  //     dispatch(getReviews(prodcutid));
  //     resetAdd();
  //   }
  // };

  // const resetAdd = () => {
  //   setContent('');
  // };

  //EDIT REVIEW MODAL
  const [editReviewModal, seteditReviewModal] = useState(false);
  const openEditSongModal = () => {
    if (editReviewModal) return; // do nothing if modal already showing
    seteditReviewModal(true); // else open modal
    document.getElementById('root').classList.add('overflow');
  };
  const closeEditSongModal = () => {
    if (!editReviewModal) return; // do nothing if modal already closed
    seteditReviewModal(false); // else close modal
    // disable page scrolling:
    document.getElementById('root').classList.remove('overflow');
  };

  //ADD REVIEW MODAL
  const [addtReviewModal, setAddReviewModal] = useState(false);
  const openAddReviewModal = () => {
    if (addtReviewModal) return; // do nothing if modal already showing
    setAddReviewModal(true); // else open modal
    document.getElementById('root').classList.add('overflow');
  };
  const closeAddReviewModal = () => {
    if (!addtReviewModal) return; // do nothing if modal already closed
    setAddReviewModal(false); // else close modal
    // disable page scrolling:
    document.getElementById('root').classList.remove('overflow');
  };

  //DELETE REVIEW MODAL
  const [deleteReviewModal, setdeleteReviewModal] = useState(false);
  const openDeleteSongModal = () => {
    if (deleteReviewModal) return; // do nothing if modal already showing
    setdeleteReviewModal(true); // else open modal
    document.getElementById('root').classList.add('overflow');
  };
  const closeDeleteSongModal = () => {
    if (!deleteReviewModal) return; // do nothing if modal already closed
    setdeleteReviewModal(false); // else close modal
    // disable page scrolling:
    document.getElementById('root').classList.remove('overflow');
  };

  //ADD MODAL HELPER FUNCTION
  const passingAdd = (reId) => {
    openAddReviewModal(true);
    // setSelectedReviewId(reId);
  };

  const passingFun = (reId) => {
    openEditSongModal(true);
    setSelectedReviewId(reId);
  };

  const passingDelete = (reNewId) => {
    openDeleteSongModal(true);
    setSelectedReviewId(reNewId);
  };

  return (
    <>
      <MainModal showModal={editReviewModal} closeModal={closeEditSongModal}>
        <EditReview
          reviewId={selectedReviewId}
          prodcutid={prodcutid}
          sessionuid={sessionUser?.id}
          editcontent={editcontent}
        />
      </MainModal>

      <MainModal showModal={addtReviewModal} closeModal={closeAddReviewModal}>
        <AddReview prodcutid={prodcutid} sessionuid={sessionUser?.id} />
      </MainModal>

      <MainModal
        showModal={deleteReviewModal}
        closeModal={closeDeleteSongModal}
      >
        <DeleteReview
          reviewId={selectedReviewId}
          prodcutid={prodcutid}
          sessionuid={sessionUser?.id}
          editcontent={editcontent}
        />
      </MainModal>

      <div className="MainDivForReviewCard">
        <div className="REviewCardDivH1Tag">
          <h1>ReviewCard</h1>
        </div>
        {sessionUser ? (
          <div className="REviewCardDivH1Tag">
            <button
              className="AddReviewbtninsideDiv"
              onClick={() => passingAdd(true)}
            >
              Add review
            </button>
          </div>
        ) : (
          <></>
        )}
        {Reviews?.map((review) => (
          <div className="reviewContentDivwrap" key={review?.id}>
            {review?.content}
            {sessionUser && sessionUser?.id === review.userId ? (
              <>
                <div className="mainDivforTwoBtneditRdR">
                  <button
                    className="reviewEditButton"
                    onClick={() => {
                      passingFun(review?.id);
                      setEditContent(review?.content);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="reviewDeleteButton"
                    onClick={() => {
                      passingDelete(review?.id);
                      setEditContent(review?.content);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default ReviewCard;
