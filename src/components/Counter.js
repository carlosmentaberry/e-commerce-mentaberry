import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function BuyButton({ items }) {
  return <Button id="addtocart" variant="outline-dark"  >Buy {items}</Button>
}


function Counter({ initial, min, max, onChange }) {
  const [items, setItems] = useState(initial);
  function addItem() {
    if (items < max) {
      setItems(items + 1);
      console.log("Items added: " + items);
    }
  }
  function removeItem() {
    if (items > min) {
      setItems(items - 1);
      console.log("Items removed: " + items);
    }
  }
  return <>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Form >
        <Form.Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          <InputGroup className="mb-3" >
            <InputGroup.Prepend>
              <Button id="lessbutton" variant="outline-dark" onClick={removeItem} >-</Button>
            </InputGroup.Prepend>
            <label className="text-center" id="basic-addon1" >{items}</label>
            <InputGroup.Append>
              <Button id="addbutton" variant="outline-dark" onClick={addItem} >+</Button>
            </InputGroup.Append>
          </InputGroup>

        </Form.Row>
        <Form.Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <BuyButton onClick={() => onChange(items)} items={items}/>
        </Form.Row>
      </Form>
    </div>
  </>
};

export default Counter;