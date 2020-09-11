import React from 'react';
import Item from './Item';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemList({products})
{
    return <> 
    <div className="divComponentContainer" margin='10px'>
    { 
        products && products.length == 0
        ? <Item itemId={products.itemId} itemName={products.itemName} itemDescription={products.itemDescription} itemPrice={products.price} itemImage={products.itemImage} itemCategory={products.itemCategory} />
        : products.map(p => <Item itemId={p.itemId} itemName={p.itemName} itemDescription={p.itemDescription} itemPrice={p.price} itemImage={p.itemImage} itemCategory={p.itemCategory} /> )
    }
    </div>
    </>
}

export default ItemList; 