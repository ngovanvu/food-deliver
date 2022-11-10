import React, {useRef} from 'react'
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef= useRef();

  const submitHandle = (e) => {
    e.preventDefault();
  }
  return (
    <Helmet title="Login">
      <CommonSection title="Login" />

      <section>
        <Container>
          <Row>
            <Col lg ='6' md = '6' sm='12' className='m-auto text-center'>
            {/* form trong css product-detail background sau */}
            <form action='' className='form' onSubmit ={submitHandle}>
            <div className='form__group'>
              <input type="email" placeholder='Email' required ref={loginNameRef}/>
            </div>

            <div className='form__group'>
              <input type="password" placeholder='Password' required ref={loginPasswordRef}/>
            </div>
            <button type='submit' className="addToCart__btn">Login</button>
            </form>
            <Link to="/register">
            Don't an account? Create an account</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login
