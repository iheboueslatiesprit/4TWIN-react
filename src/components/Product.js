import React, { Component, useState } from "react";
import styled from "styled-components";

export default function Product(props) {


const [state, setState] = useState({
 // const  state = {  
     name: props.product.name,
    price: props.product.price,
    img: props.product.img,
    likes: props.product.likes,
  } )  ;

  const ProductFrame = styled.div`
    border-radius: 25px;
    min-height: 150px;
    min-width: 150px;
    background-color: rgb(110, 110, 110, 0.7);
    margin: 10px;
    display: flex;
    flex-direction: column;
  `;
  const ProductImageWrapper = styled.div`
    margin: 5px;
    max-width: 150px;
  `;
  const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 25px;
  `;
  const ProductInfoWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center`;

  return (
    <div>
      <ProductFrame>
        <ProductImageWrapper>
          <ProductImage src={state.img}></ProductImage>
        </ProductImageWrapper>
        <ProductInfoWrapper>{state.name}</ProductInfoWrapper>
        <ProductInfoWrapper>Price : {state.price}</ProductInfoWrapper>
        <ProductInfoWrapper>Likes : {state.likes}</ProductInfoWrapper>
        <ProductInfoWrapper>
          <button
            onClick={() => {
              setState ({ ...state , likes : state.likes+1 })
              console.log(state.likes);
            }}
          >
            {" "}
            Like{" "}
          </button>
        </ProductInfoWrapper>
      </ProductFrame>
    </div>
  );
}
