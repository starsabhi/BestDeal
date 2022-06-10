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
                <div className="contentdiv">
                  <h2 className="productNameh2">{name}</h2>
                  <NavLink to={`products/${id}`}>
                    <p>${price}</p>
                    <img className="productListimage" src={imageUrl} />
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
