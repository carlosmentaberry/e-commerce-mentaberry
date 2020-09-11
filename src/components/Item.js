
import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import Counter from './Counter';
const cartContext = React.createContext();

function Item({ itemId, itemName, itemDescription, itemPrice, itemImage, itemCategory }) {

    const [value, setValues] = useState(0);

    function ShowItems(items) {
        console.log("Items added to cart: " + Number(items));
        setValues(items);
    }

    return <>
        <div className='divComponent'>

            <span className='border' style={{ padding: '5px' }}>
                <div className='divHeaderComponent'>
                    <span style={{ width: '100%' }}>
                        <Link to={`/ItemDetailContainer/${itemId}`}><label>{itemName}</label></Link>
                    </span>
                </div>
                <div className='divBodyComponent'>
                    <label>{itemDescription}</label>
                    <img src={itemImage} width='50px' height='50px' className="rounded-lg" alt='test' />
                    <label>Product ID: #{itemId}</label>
                    <label>{itemPrice}</label>
                    <label>{itemCategory}</label>
                </div>
                <div className='divFooterComponent'>
                    <label>Units:</label>
                    <Counter initial={1} min={1} max={10} onChange={ShowItems} />
                    <cartContext></cartContext>
                </div>
            </span>
        </div>


    </>
}

export default Item;