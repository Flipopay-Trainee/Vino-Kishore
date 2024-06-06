import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [productData, setproductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/upload/");
        console.log(response.data);
        setproductData(response.data);
      } catch (error) {
        console.error("Error in fetching image:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Cart");
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    axios
      .post("http://localhost:3000/cart", product)
      .then((response) => {
        console.log("Item added to cart:", response.data);
        alert("Added to Cart");
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
      });
  };

  const sortData = () => {
    const sortedData = [...productData].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setproductData(sortedData);
    console.log(sortedData);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Container">
      <h1 className="nav-1">
        {" "}
        Welcome To <span className="nav">King Of Kingz</span> Shopping.......
      </h1>
      <div className="top-section">
        <input type="text" placeholder="Search for anything... " />
        <button onClick={handleSubmit}>Your Cart</button>
        <button onClick={sortData}>Sort</button>
      </div>
      {productData && (
        <div className="view-for">
          {productData.map((product, index) => (
            <div key={index}>
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Welcome;
