import React, { Component } from "react";
import styled from "styled-components";
export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.product.name,
      price: props.product.price,
      img: props.product.img,
      likes: props.product.likes,
    };
  }

  componentWillMount() {
    console.log("Will mount ");
  }
  componentDidMount() {
    console.log("Did mount");
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Will update");
  }

  render() {
    return (
      <div>
        <ProductFrame>
          <ProductImageWrapper>
            <ProductImage src={this.state.img}></ProductImage>
          </ProductImageWrapper>
          <ProductInfoWrapper>{this.state.name}</ProductInfoWrapper>
          <ProductInfoWrapper>Price : {this.state.price}</ProductInfoWrapper>
          <ProductInfoWrapper>Likes : {this.state.likes}</ProductInfoWrapper>
          <ProductInfoWrapper>
            <button
              onClick={() => {
                this.setState({ likes : this.state.likes +1  });
                console.log(this.state.likes);
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
}

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
