import React, {Component} from 'react';
import { Carousel, Modal, Navbar, Container, Row, Col, Button,Alert,Breadcrumb, BreadcrumbItem, Card, Form, Nav } from 'react-bootstrap';
import axios from 'axios';

class PostForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post("http://52.79.159.99:8080/api/login", this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { username, password } = this.state
        return (
            <Form onSubmit={this.submitHandler}>
                <Form.Group className="mb-3">
                    <Form.Control 
                        placeholder = "이메일 또는 아이디 입력" 
                        name="username" 
                        value={username}
                        onChange={this.changeHandler}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        placeholder = "비밀번호" 
                        name="password" 
                        value={password}
                        onChange={this.changeHandler}/>
                </Form.Group>
                <Button variant="success" size="lg" type="submit">로그인</Button>
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
        )
    }
}

export default PostForm