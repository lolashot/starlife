import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaTrash } from "react-icons/fa"


export default function Aboutread() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://613a097f1fcce10017e78d33.mockapi.io/aboutData`)
            .then((response) => {
                console.log('users', response);
                setAPIData(response.data);
            })
    }, [])

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    }

    const onDelete = (id) => {
        axios.delete(`https://613a097f1fcce10017e78d33.mockapi.io/aboutData/${id}`)
     .then((res) => {
        setAPIData(res.data);
    })
}


    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>aboutupdate</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                      </Table.Row>
                </Table.Header>

                <Table.Body>
  {APIData.map((data) => {
    // console.log('users in table', data);
     return (
       <Table.Row>
          <Table.Cell>{data.firstName}</Table.Cell>
           <Table.Cell>{data.lastName}</Table.Cell>
           <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
            <Link to='/aboutupdate'>
            <Table.Cell>
             <Button onClick={() => setData(data)}>teamupdate</Button>
            </Table.Cell>
            </Link>
            <Table.Cell>
            <Button onClick={() => onDelete(data.id)}><FaTrash style={{ color: "orangered", fontSize: "16px" }} /></Button>
            </Table.Cell>
            </Table.Row>
   )})}
</Table.Body>
            </Table>
        </div>
    )
}
