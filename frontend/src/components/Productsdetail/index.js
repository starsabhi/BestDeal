// Productsdetail
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getOneProduct } from '../../store/product';
import { useDispatch, useSelector } from 'react-redux';
import './Productsdetail.css';
import { getReviews } from '../../store/review';
import ReviewCard from '../ReviewCard';

function Productsdetail() {
  const dispatch = useDispatch();
  const Id = useParams();
  // console.log(Id, '***********productId******');
  const Product = useSelector((state) => state.product);
  const Review = useSelector((state) => state.review);
  const Reviews = Object.values(Review);
  console.log(
    Reviews,
    '********CurrrentStatePRODUCTDETAIL*********',
    Object.values(Reviews)
  );
  const CurrrentState = useSelector((state) => state);

  useEffect(() => {
    dispatch(getOneProduct(Id.productId));
    // console.log(getOneBusiness(businessId))
  }, [dispatch]);

  useEffect(() => {
    dispatch(getReviews(Id.productId));
  }, [dispatch]);

  // console.log(Reviews?.reviews[0].content, '********REVIEWS*********');
  return (
    <>
      <div className="ProductsdetailDiv">
        {/* <h1>Productsdetail</h1> */}
        <div className="productListClass">
          <div key={Product.id} className="productClassArr">
            <div className="contentdiv">
              <h2 className="productNameh2">{Product?.name}</h2>
              <p>${Product.price}</p>
              <img className="productListimage" src={Product?.imageUrl} />
              <p className="descriptionptag">{Product?.description}</p>
            </div>
          </div>
          <div className="productListClass priceCartorderBoxDiv">
            Hello
            <div />
            {/* <p>{Reviews?.reviews[0].content}</p> */}
          </div>
        </div>
        <ReviewCard
          Id={Id}
          Reviews={Reviews}
          CurrrentState={CurrrentState}
          Product={Product}
        />
      </div>
    </>
  );
}

export default Productsdetail;
