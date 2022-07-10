// Productsdetail
import { Redirect, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getOneProduct } from '../../store/product';
import { useDispatch, useSelector } from 'react-redux';
import './Productsdetail.css';
import { getReviews } from '../../store/review';
import ReviewCard from '../ReviewCard';
import CartBox from '../Cart/CartBox';
import ClipLoader from 'react-spinners/ClipLoader';
import ReadStarRating from '../ReviewCard/Rating/ReadStarRating';

function Productsdetail() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  const Id = useParams();
  // console.log(Id, '***********productId******');
  const Product = useSelector((state) => state.product);
  const Review = useSelector((state) => state.review);
  const Reviews = Object.values(Review);
  const CurrrentState = useSelector((state) => state);

  useEffect(() => {
    dispatch(getOneProduct(Id.productId));
    // console.log(getOneBusiness(businessId))
  }, [dispatch]);

  useEffect(() => {
    dispatch(getReviews(Id.productId));
  }, [dispatch]);

  let totalRating = null;
  Reviews.forEach((review) => {
    totalRating += review.rating;
  });
  // console.log(ratingArr, '******************************');
  console.log(Reviews.length);
  console.log(totalRating / Reviews.length, '---------------------');

  // console.log(Reviews?.reviews[0].content, '********REVIEWS*********');
  return (
    <div className="mainDivProDP">
      {loading ? (
        <div className="loadingScreenDemo">
          <ClipLoader color={'#344441'} loading={loading} size={150} />
        </div>
      ) : (
        <div className="ProductMainDiv">
          <div className="ProductsdetailDiv">
            {/* <h1>Productsdetail</h1> */}
            <div className="productListClassforProductdetailPage">
              <div key={Product?.id} className="productClassArr">
                <div className="contentdivForproductdetailpage">
                  <div className="grid-container-element">
                    <div className="grid-child-element classOneImage">
                      <img
                        className="productListimageonProductdetailpage"
                        src={Product?.imageUrl}
                        alt={Product?.imageUrl}
                      />
                    </div>
                    <div className="grid-child-element classTwoinfo">
                      <div className="innerDivForsecondGrid">
                        <div className="productNameh2">{Product?.name}</div>
                        <p className="pricepTageCss">Price :${Product.price}</p>
                        <p className="descriptionptag">
                          Description: {Product?.description}
                        </p>
                        <ReadStarRating
                          rating={totalRating / Reviews?.length}
                        />
                        {`(${Reviews?.length})`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="priceCartorderBoxDiv">
              <CartBox Product={Product} productId={Id.productId} />
              <div />
            </div>
          </div>

          <ReviewCard
            Id={Id}
            Reviews={Reviews}
            CurrrentState={CurrrentState}
            Product={Product}
          />
        </div>
      )}
    </div>
  );
}

export default Productsdetail;
