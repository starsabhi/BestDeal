import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../store/product';
import Productsdetail from '../Productsdetail';
import './Home.css';

function Home() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => Object.values(state.product));
  // console.log(productList, '***************');
  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <>
      <div className="homepageDiv">
        <h2 className="productlistnameclass">
          <span>Our Product List</span>
        </h2>
        <div className="HomepageMainDiv">
          <div className="productListClass">
            {productList?.map(
              ({
                id,
                name,
                price,
                imageUrl,
                description,
                productInfo,
                category,
              }) => (
                <div key={id} className="productClassArr">
                  <div className="contentdivforHome">
                    <NavLink
                      style={{ color: 'inherit', textDecoration: 'inherit' }}
                      to={`products/${id}`}
                    >
                      <div className="imageListDivevery">
                        <img className="productListimage" src={imageUrl} />
                      </div>
                      <div className="productnameDivforMain">
                        <div className="productNameh2">{name}</div>
                      </div>
                      <div className="priceMainDiv">
                        <div>${price}</div>
                      </div>
                    </NavLink>
                    {/* <p className="descriptionptag">{description}</p> */}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
