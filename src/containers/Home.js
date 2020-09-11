import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from '../components/ItemList';
import logo from '../React.png';
import Spinner from 'react-bootstrap/Spinner';

function getFromRemote() {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        { itemId: "1", itemName: "PRODUCT 1", itemDescription: "Product Description 1", itemPrice: "$ 1234.00", itemImage: logo, itemCategory: 1 },
        { itemId: "2", itemName: "PRODUCT 2", itemDescription: "Product Description 2", itemPrice: "$ 1234.00", itemImage: logo, itemCategory: 1 },
        { itemId: "3", itemName: "PRODUCT 3", itemDescription: "Product Description 3", itemPrice: "$ 1234.00", itemImage: logo, itemCategory: 1 },
        { itemId: "4", itemName: "PRODUCT 4", itemDescription: "Product Description 4", itemPrice: "$ 1234.00", itemImage: logo, itemCategory: 1 },
        { itemId: "5", itemName: "PRODUCT 5", itemDescription: "Product Description 5", itemPrice: "$ 1234.00", itemImage: logo, itemCategory: 2 },
        { itemId: "6", itemName: "PRODUCT 6", itemDescription: "Product Description 6", itemPrice: "$ 1234.00", itemImage: logo, itemCategory: 2 },
        { itemId: "7", itemName: "PRODUCT 7", itemDescription: "Product Description 7", itemPrice: "$ 1234.00", itemImage: logo, itemCategory: 2 },
        { itemId: "8", itemName: "PRODUCT 8", itemDescription: "Product Description 8", itemPrice: "$ 1234.00", itemImage: logo, itemCategory: 2 },
        { itemId: "9", itemName: "PRODUCT 9", itemDescription: "Product Description 9", itemPrice: "$ 1234.00", itemImage: logo, itemCategory: 3 },
        { itemId: "10", itemName: "PRODUCT 10", itemDescription: "Product Description 10", itemPrice: "$ 1234.00", itemImage: logo, itemCategory: 3 },
        { itemId: "11", itemName: "PRODUCT 11", itemDescription: "Product Description 11", itemPrice: "$ 1234.00", itemImage: logo, itemCategory: 3 },
        { itemId: "12", itemName: "PRODUCT 12", itemDescription: "Product Description 12", itemPrice: "$ 1234.00", itemImage: logo, itemCategory: 3 },
        { itemId: "13", itemName: "PRODUCT 13", itemDescription: "Product Description 13", itemPrice: "$ 1234.00", itemImage: logo, itemCategory: 4 },
        { itemId: "14", itemName: "PRODUCT 14", itemDescription: "Product Description 14", itemPrice: "$ 1234.00", itemImage: logo, itemCategory: 4 },
        { itemId: "15", itemName: "PRODUCT 15", itemDescription: "Product Description 15", itemPrice: "$ 1234.00", itemImage: logo, itemCategory: 4 },
        { itemId: "16", itemName: "PRODUCT 16", itemDescription: "Product Description 16", itemPrice: "$ 1234.00", itemImage: logo, itemCategory: 4 }
      ]);
    }, 3000);
  });
}

function Home() {
  const [products, setProducts] = useState([]);

  
  const { categoryid } = useParams();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getFromRemote().then(res => {
      setLoading(false);
      console.log(res);
      categoryid && categoryid > 0 ? setProducts(res.filter(x => x.itemCategory == categoryid)) : setProducts(res);
    });
  }, []);

  return <>
    <div style={{ backgroundColor: "#f8f9fa" }}>
      {loading ? <div>Loading... <Spinner animation="grow" /></div> : <ItemList products={products} />}
    </div>
  </>
}

export default Home;