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
import cashSVG from '../../images/cash2.svg';

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
  const productReviews = Reviews.filter((ele) => ele.productId == Id.productId);
  const CurrrentState = useSelector((state) => state);

  useEffect(() => {
    dispatch(getOneProduct(Id.productId));
    // console.log(getOneBusiness(businessId))
  }, [dispatch]);

  useEffect(() => {
    dispatch(getReviews(Id.productId));
  }, [dispatch]);

  let totalRating = null;
  productReviews.forEach((review) => {
    totalRating += review.rating;
  });
  // console.log(ratingArr, '******************************');
  // console.log(productReviews);
  // console.log(productReviews.length);
  // console.log(totalRating / Reviews.length, '---------------------');

  // console.log(Reviews?.reviews[0].content, '********REVIEWS*********');
  return (
    <div className="mainDivProDP">
      {loading ? (
        <div className="loadingScreenDemo">
          <ClipLoader color={'#344441'} loading={loading} size={150} />
        </div>
      ) : (
        <>
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
                          <div id="productNameH2DP">{Product?.name}</div>
                          <div className="RatingDivInsideDP">
                            <ReadStarRating
                              rating={totalRating / productReviews?.length}
                            />
                            {`(${productReviews?.length})`} Reviews
                          </div>
                          <div className="priceDivPDpage">
                            <div className="logoCashClass">
                              <img src={cashSVG}></img>
                            </div>
                            <p className="pricepTageCss">
                              Price :{' '}
                              <span className="priceSpancolor">
                                ${Product.price}
                              </span>
                            </p>
                          </div>
                          <div className="DescriptionTAGPDP">Description:</div>
                          <span className="descriptionptag">
                            <div className="DescriptionDIVTAGPDP">
                              {Product?.description}
                            </div>
                          </span>
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
        </>
      )}
    </div>
  );
}

export default Productsdetail;
