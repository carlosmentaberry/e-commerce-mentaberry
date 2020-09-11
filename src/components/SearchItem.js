import React, { useState, useEffect } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function SearchItem() {

    return <>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2"  />
            <Button variant="outline-dark" href={ '/search/' }  >Search</Button>
        </Form>
    </>
}
export default SearchItem;