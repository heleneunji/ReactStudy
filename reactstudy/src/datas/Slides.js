import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Carousel, Modal, Navbar, Container, Row, Col, Button,Alert,Breadcrumb, BreadcrumbItem, Card, Form, Nav } from 'react-bootstrap';

const Slides = () => {
    const [slides, setSlides] = useState([]);
    useEffect(() => {
        axios.get("http://52.79.159.99:8080/api/slide")
            .then(response => {
                //console.log(response)
                setSlides(response.data);
            });
    }, []);

    useEffect(() => {
        console.log(slides)
    }, [slides])

    return(
        <Carousel>
            {slides.map(slide => {
                return ( <Carousel.Item key={slide.id}>
                    {slide.slide}
                </Carousel.Item>);              
            })}
        </Carousel>
    )
};

export default Slides;