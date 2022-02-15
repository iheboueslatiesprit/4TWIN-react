import logo from "./logo.svg";
import "./App.css";
import Product from "./components/Product";
import styled from "styled-components";
import axios from "axios";
import ps from "./products.json";
import { useState, useEffect } from "react";

function App() {

  const [data, setData] = useState([]);

  const getData = () => {
    fetch(ps, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AppFrame>
      {ps &&
        ps.length > 0 &&
        ps.map((item) => (
          <div>
            {" "}
            <Product product={item} />
            {" "}
          </div>
        ))}
    </AppFrame>
  );
}

const AppFrame = styled.div`
  text-align: center;
  display: flex;
`;
export default App;
