import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import { Link } from "react-router-dom";
import logo from '../../assets/images/res-logo.png'
import  '../../styles/footer.css'
const Footer = () => {
  return (
    <footer className = "footer">
    <Container>
    <Row>
      <Col lg='3' md='4' sm = '6' >
      <div className=' footer__logo text-start'>
            <img src={logo} alt = 'logo'/>
            <h5>Tasty Treat</h5>
            <p>Lorem ipsum dolor sit amet consectetur
            adipsing elit. Netscilim parios acuss</p>
        </div>
      </Col>
      <Col lg='3' md='4' sm = '6' >
        <h5 className='footer__title'>Delivery Time</h5>
        {/*Tạo ListGroup rồi xóa bỏ border để xóa khung và xóa lề bằng ps-0 */}
        <ListGroup className='delivery__time-list'>
           <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span>Sunday - Thursday</span>
              <p>10:00am - 11:00pm</p>
           </ListGroupItem>

           <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span>Friday - Saturday</span>
              <p>Off Day</p>
           </ListGroupItem>
        </ListGroup>   
      </Col>
      <Col lg='3' md='4' sm = '6' >
      <h5 className='footer__title'>Contact</h5>
        {/*Tạo ListGroup rồi xóa bỏ border để xóa khung và xóa lề bằng ps-0 */}
        <ListGroup className='delivery__time-list'>
           <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <p>Location: ZindaBaZah, Zilent-300,Bazaha Luffy</p>
              
           </ListGroupItem>
           <ListGroupItem className='delivery__time-item border-0 ps-0'>
             <span>Phone: 123456789</span>
             
           </ListGroupItem>
           <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span>Email: example@gmail.com</span>
           </ListGroupItem>
        </ListGroup>   
      </Col>
      <Col lg='3' md='4' sm = '6' >
      <h5 className='footer__title'>NewSletter</h5>
      <p>Subcribe our NewSletter</p>
      <div className='newsletter'>
        <input type='text' placeholder='Enter Your Email'/>
        <span><i class="ri-send-plane-line"></i> </span>
      </div>
      </Col>
    </Row>

    <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2022, website made by Muhibur Rahman. All Rights
              Reserved.
            </p>
          </Col>
          {/*social__links dùng để sử dụng thẻ Link 
          M-0 di chuyển Chữ Follow */}
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                {" "}
                <Link to="https://www.facebook.com/nvv187">
                  <i class="ri-facebook-line"></i>
                </Link>{" "}
              </span>

              <span>
                <Link to="https://github.com/muhib160">
                  <i class="ri-github-line"></i>
                </Link>
              </span>

              <span>
                {" "}
                <Link to=" https://www.youtube.com/c/MuhibsTechDiary">
                  <i class="ri-youtube-line"></i>
                </Link>{" "}
              </span>

              <span>
                {" "}
                <Link to=" https://www.linkedin.com/in/muhib160/">
                  <i class="ri-linkedin-line"></i>
                </Link>{" "}
              </span>
            </div>
          </Col>
        </Row>
    </Container>
    </footer>
  )
}

export default Footer
