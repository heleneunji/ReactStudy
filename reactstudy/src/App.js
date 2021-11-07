import Props from './component/Props';
import React, {useState} from "react";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './img/logo.png'
import cssimg from './img/cssimg.png'
import part2img from './img/part2img.png'
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'

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
            <Nav>
              <Nav.Link>강의</Nav.Link>
              <Nav.Link>로드맵</Nav.Link>
              <Nav.Link>멘토링</Nav.Link>
              <Nav.Link>커뮤니티</Nav.Link>
              <Nav.Link>인프런</Nav.Link>
            </Nav>
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
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder = "이메일 또는 아이디 입력"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control placeholder = "비밀번호"/>
                    </Form.Group>
                    <Button variant="success" size="lg">로그인</Button>
                    <Navbar>
                      <Navbar.Text>
                        <a>비밀번호 찾기</a>
                        &nbsp;
                        <span/>|<span/>
                        &nbsp;
                        <a>회원가입</a>
                      </Navbar.Text>
                    </Navbar>
                  </Form>
                  </Container>
                </Modal.Body>
              </Modal>
              
              <Button variant="danger">회원가입</Button>
            </Nav>
          </Navbar>
          <Carousel>
            <Carousel.Item>
              <img src={img1} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={img2} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={img3} />
            </Carousel.Item>
          </Carousel>
        <Container fluid>
          <header>
            
          </header>
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