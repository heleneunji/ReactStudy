import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Carousel, Modal, Navbar, Container, Row, Col, Button,Alert,Breadcrumb, BreadcrumbItem, Card, Form, Nav } from 'react-bootstrap';

const Headers = () => {
    const [headers, setHeaders] = useState([]);
    useEffect(() => {
        axios.get("http://52.79.159.99:8080/api/header")
            .then(response => {
                //console.log(response)
                setHeaders(response.data);
            });
    }, []);

    useEffect(() => {
        console.log(headers)
    }, [headers])

    return(
        <Nav>
            {headers.map(header => {
                return ( <Nav.Link key={header.id}>
                    {header.header}
                </Nav.Link>);
            })}
        </Nav>
    )
};

export default Headers;