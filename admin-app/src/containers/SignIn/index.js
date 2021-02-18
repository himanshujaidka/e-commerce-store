import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Layout from "../../components/layouts";
import { Row, Col, Button, Form } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { login } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
/**
 * @author
 * @function SignIn
 **/

const SignIn = (props) => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');
  const auth = useSelector( state => state.auth );

  const dispatch = useDispatch();

  const userLogin = (e)=>{ //event

    e.preventDefault();

    const user = {
      email, password
    }
    dispatch(login(user));
  }
  if( auth.authenticate ){
    return <Redirect to= { '/' } />
  }

  return (
    <Layout>
      <Container>
        <Row style={{marginTop: '50px'}}>
          <Col md={{span:6, offset:3}}>
            <Form onSubmit= { userLogin }>
              <Input
                label = "Email address"
                placeholder = "Enter email"
                value = {email}
                type = "text"
                onChange = { (e) => setEmail(e.target.value) }
              />
              <Input
                label = "Password"
                placeholder = "Password"
                value = {password}
                type = "text"
                onChange = { (e) => setPassword(e.target.value) }
              />
          
      
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default SignIn;
