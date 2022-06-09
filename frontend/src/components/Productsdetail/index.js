// Productsdetail
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getOneProduct } from '../../store/product';
import { useDispatch, useSelector } from 'react-redux';
import './Productsdetail.css';

function Productsdetail() {
  const dispatch = useDispatch();
  const Id = useParams();
  // console.log(Id, '***********productId******');
  const Product = useSelector((state) => state.product);
  // console.log(Product, '********product*********');

  useEffect(() => {
    dispatch(getOneProduct(Id.productId));
    // console.log(getOneBusiness(businessId))
  }, [dispatch]);

  return (
    <>
      <div className="ProductsdetailDiv">
        <h1>Productsdetail</h1>
        <div className="productListClass">
          <div key={Product.id} className="productClassArr">
            <div className="contentdiv">
              <h2 className="productNameh2">{Product.name}</h2>
              <p>${Product.price}</p>
              <img className="productListimage" src={Product.imageUrl} />
              <p className="descriptionptag">{Product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productsdetail;
