import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';


export default function Aboutupdate() {
    let history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [id, setID] = useState(null);

    useEffect(() => {
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'));
        setID(localStorage.getItem('ID'))

    }, []);

    const updateAPIData = () => {
    axios.put(`https://613a097f1fcce10017e78d33.mockapi.io/aboutData/${id}`, {
        firstName,
         lastName,
         checkbox
         }).then(() => {
            history.push('/aboutread')
        })
    }
    

    return (
        <div>
        <h2>Update Your Details</h2>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button onClick={updateAPIData} type='submit'>aboutupdate</Button>
            </Form>
        </div>
    )
}