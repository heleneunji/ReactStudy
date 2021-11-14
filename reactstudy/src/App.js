import Props from './component/Props';
import React, {useState, Component, useEffect} from "react";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './img/logo.png'
import cssimg from './img/cssimg.png'
import part2img from './img/part2img.png'
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import axios from 'axios'
import Headers from './datas/Headers';
import Slides from './datas/Slides';
import PostForm from './component/PostForm';

import { Carousel, Modal, Navbar, Container, Row, Col, Button,Alert,Breadcrumb, BreadcrumbItem, Card, Form, Nav } from 'react-bootstrap';

function App(){

  const [show, setShow] = React.useState(false);

  const handleModalClose = () => {
    setShow(false);
  };

  const handelModalOpen = () => {
    setShow(true);
  };  

    return (
      <BrowserRouter>
        <div>
          <Navbar sticky="top">
            <Navbar.Brand>
              <img src={logo} height= '40px'/>
            </Navbar.Brand>
            <Headers />
            <Nav className="ml-auto">
              <Nav.Link>지식공유참여</Nav.Link>
              <Button variant="default" onClick={handelModalOpen}>로그인</Button>
              
              <Modal show={show} onHide = {handleModalClose}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    <img src = {logo}  height= '40px'/>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Container>
                    <PostForm />
                  </Container>
                </Modal.Body>
              </Modal>
              
              <Button variant="danger">회원가입</Button>
            </Nav>
          </Navbar>
          <Slides/>
        <Container fluid>
          
          <Button variant="default">나의 최근 학습 강의 </Button>
          <Row>
          <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                css 기본부터 활용까지
              </Card.Title>
              <Card.Img src = {cssimg} />
              <Card.Text>
                CSS는 HTML을 아름답게 꾸며주는 디자이너의 언어입니다. CSS는 디지털 컨텐츠를 생산하는 사람들에게는 붓 질과 같은 것이 아닐까 싶습니다. 이 수업에서는 디지털 붓질을 하는 법을 알려드립니다.
              </Card.Text>
              <Button variant="success">바로 학습 ▶</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                정보처리기사 실기 (2020 개정) 제대로 배우기 Part.2
              </Card.Title>
              <Card.Img src = {part2img} />
              <Card.Text>
                정보처리기사 실기 과목 자격증 대비 강의로, 정보시스템 등의 개발 요구사항을 이해하기 위한 기초 지식을 익힐 수 있습니다. (두 번째 파트)
              </Card.Text>
              <Button variant="success">바로 학습 ▶</Button>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        </Container>
        </div>
      </BrowserRouter>
    );
}

export default App;