import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../store/product';
import './Home.css';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  let productList = useSelector((state) => Object.values(state.product));
  // console.log(productList, '***************');
  let [newArr, setNewArr] = useState([]);
  // console.log(catogory);
  const [allProducts, setAllProducts] = useState(true);
  const newFunction = (catoString) => {
    setAllProducts(false);
    setNewArr(productList.filter((product) => product.category === catoString));
    // console.log(newArr);
  };

  return (
    <>
      <div className="homepageDiv">
        <h2 className="productlistnameclass">
          <span>Our Product List</span>
        </h2>
        <button onClick={() => setAllProducts(true)}>All</button>
        <button onClick={() => newFunction('Men')}>Men</button>
        <button onClick={() => newFunction('Kids')}>kids</button>
        <div className="HomepageMainDiv">
          <div className="productListClass">
            {allProducts
              ? productList?.map(
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
                          style={{
                            color: 'inherit',
                            textDecoration: 'inherit',
                          }}
                          to={`products/${id}`}
                        >
                          <div className="imageListDivevery">
                            <img className="productListimage" src={imageUrl} />
                          </div>
                          <div className="productnameDivforMain">
                            <div className="productNameh2">{name}</div>
                          </div>
                          <div className="priceMainDiv">
                            <div className="mainPriceDiv">${price}</div>
                          </div>
                        </NavLink>
                      </div>
                    </div>
                  )
                )
              : newArr?.map(
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
                          style={{
                            color: 'inherit',
                            textDecoration: 'inherit',
                          }}
                          to={`products/${id}`}
                        >
                          <div className="imageListDivevery">
                            <img className="productListimage" src={imageUrl} />
                          </div>
                          <div className="productnameDivforMain">
                            <div className="productNameh2">{name}</div>
                          </div>
                          <div className="priceMainDiv">
                            <div className="mainPriceDiv">${price}</div>
                          </div>
                        </NavLink>
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
