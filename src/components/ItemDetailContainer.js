import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../React.png';
import Spinner from 'react-bootstrap/Spinner';
import Counter from './Counter';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

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

function ItemDetailContainer() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFromRemote(id).then(res => {
            setLoading(false);
            setProducts(res.filter(x => x.itemId == id)[0]);
        });
    }, []);

    const [value, setValues] = useState(0);

    function ShowItems(items) {
        console.log("Items added to cart: " + Number(items));
        setValues(items);
    }
    return <>
        {loading ?
            <div>Loading... <Spinner animation="grow" /></div> : <div>
            <a href="/">back to home page</a>
            <CardDeck className="text-center p-3">                
                <Card className="text-center p-3">
                    Product Detail
                    <Card.Title>Product ID: #{products.itemId} - {products.itemName}</Card.Title>
                    <div><Card.Img src={products.itemImage} style={{ width: "150px", height: "150px" }}/></div>
                    <Card.Body>
                        <Card.Text>{products.itemDescription}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                            <small className="text-muted"><label>{products.itemPrice}</label>
                            <br />
                            <label>Item Category: {products.itemCategory}</label>
                            <br />
                            <label>Units:</label>
                            <Counter initial={1} min={1} max={10} onChange={ShowItems} /></small>
                    </Card.Footer>
                </Card>
            </CardDeck>
            </div>
        }
    </>

}
export default ItemDetailContainer;