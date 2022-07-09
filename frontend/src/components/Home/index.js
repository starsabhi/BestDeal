import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../store/product';
import ClipLoader from 'react-spinners/ClipLoader';

import './Home.css';

function Home() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

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

  //-----------------SEARCH BAR ----------------------------------------
  const [search, setSearch] = useState('');
  const reset = () => {
    setSearch('');
  };
  // const searchSubmit = () => {
  //   setAllProducts(false);
  //   console.log(search);
  //   setNewArr(
  //     newArr.filter((val) => {
  //       if (search == '') {
  //         return val;
  //       } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
  //         console.log(val.name.toLowerCase());
  //         return val;
  //       }
  //     })
  //   );
  //   console.log(newArr);
  // };

  return (
    <>
      {/* <div className="ParentHomePageDiv"> */}
      {loading ? (
        <div className="loadingScreenDemo">
          <ClipLoader color={'#344441'} loading={loading} size={150} />
        </div>
      ) : (
        <div className="homepageDiv">
          <h2 className="productlistnameclass">
            <span>Our Product List</span>
          </h2>
          <div className="sideBarDiv">
            {/* <div className="InnerDivBtnSelect"> */}
            {/*  <div>
                 <input
                  type="text"
                  placeholder="search"
                  value={search}
                  onChange={(e) => {
                    setAllProducts(true);
                    setSearch(e.target.value);
                  }}
                ></input>
                <button onClick={() => reset()}>Reset</button>
              </div> */}
            <div className="buttonDivCatogory">
              <span className="catogoryClass">Category</span>
              <button
                className="catogoryBtn logOutBtneleHome"
                onClick={() => setAllProducts(true)}
              >
                All
              </button>
            </div>
            <div className="buttonDivCatogory">
              <button
                className="catogoryBtn logOutBtneleHome"
                onClick={() => newFunction('Men')}
              >
                Men
              </button>
            </div>
            <div className="buttonDivCatogory">
              <button
                className="catogoryBtn logOutBtneleHome"
                onClick={() => newFunction('Kids')}
              >
                kids
              </button>
            </div>
            {/* </div> */}
          </div>
          <div className="HomepageMainDiv">
            <div className="productListClass">
              {allProducts
                ? productList
                    ?.filter((val) => {
                      if (search === '') {
                        return val;
                      } else if (
                        val.name.toLowerCase().includes(search.toLowerCase())
                      )
                        return val;
                    })
                    .map(
                      ({
                        id,
                        name,
                        price,
                        imageUrl,
                        description,
                        productInfo,
                        category,
                      }) => (
                        <>
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
                                  <img
                                    className="productListimage"
                                    src={imageUrl}
                                    alt={imageUrl}
                                  />
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
                        </>
                      )
                    )
                : newArr
                    ?.filter((val) => {
                      if (search === '') {
                        return val;
                      } else if (
                        val.name.toLowerCase().includes(search.toLowerCase())
                      )
                        return val;
                    })
                    .map(
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
                                <img
                                  className="productListimage"
                                  src={imageUrl}
                                  alt={imageUrl}
                                />
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
      )}
    </>
  );
}

export default Home;
