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
      <h2 className="productlistnameclass">Product List</h2>
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
                      <h2 className="productNameh2">{name}</h2>
                    </div>
                    <div className="priceMainDiv">
                      <h3>${price}</h3>
                    </div>
                  </NavLink>
                  {/* <p className="descriptionptag">{description}</p> */}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
