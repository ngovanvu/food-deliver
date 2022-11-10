import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import { Link } from "react-router-dom";
import Category from "../components/UI/Category/Category";

import "../styles/Home-hero-section.css";
import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/ProductCard/ProductCard"

import whyImg from '../assets/images/location.png'
import networkImg from '../assets/images/network.png'

import TestimonialSlider from "../components/UI/slider/TestimonialSlider";
const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem isum Just wait food at Just wait food at Just wait food at Just wait food at Just wait food at",
  },
  {
    title: "Supper Dine In",
    imgUrl: featureImg02,
    desc: "Lorem isum Just wait food at Just wait food at Just wait food at Just wait food at Just wait food at ",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem isum Just wait food at Just wait food at Just wait food at Just wait food at Just wait food at ",
  },
];
  //* bắt đầu setCategories dùng để truyền từ button bằng hàm onclick
  //* Categories nó sẽ gửi giá trị ALL,BURGER,PIZZA,BREAD vào hàm if để
  //*  lọc ra những giá trị có trong category ở dữ liệu products
  //* allProducts để đưa ra giá trị ở trong setAllProructs đã đc thiết lập 
const Home = () => {
  const [Categories, setCategories] = useState('All')
  const [allProducts,setAllProructs] = useState(products)

  const [hotPizaa,setHotPizza] = useState([])

  useEffect(()=>{
    const filteredPizza = products.filter(item => item.category === 'Pizza')
    const slicePizza = filteredPizza.slice(0,4)
    setHotPizza(slicePizza)
  },[])

  useEffect(() => {
     if(Categories === 'ALL') {
      setAllProructs(products)
     }
      if(Categories === 'BURGER') {
        const filteredProducts = products.filter(item => item.category === 'Burger')
        setAllProructs(filteredProducts)
      }
      if(Categories === 'PIZZA'){
        const filteredProducts = products.filter(item => item.category === 'Pizza')
        setAllProructs (filteredProducts)
      }
      if(Categories === 'BREAD'){
        const filteredProducts = products.filter(item => item.category === 'Bread')
        setAllProructs (filteredProducts)
      }
      
  }, [Categories])

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 classname="mb-3">Easy way to make an order </h5>
                <h1 className="mb-4 hero__title">
                  <span>Hungry?</span>Just wait <br /> food at{" "}
                  <span> your door</span>
                </h1>
                <p>
                  lorem isum Just wait food at Just wait food at Just wait food
                  at Just wait food at Just wait food at Just wait food at{" "}
                </p>
              </div>
              <div className="hero__btn d-flex align-items-center gap-5 mt-4">
                <button className="order_btn d-flex align-items-center justify-content-between">
                  Order Now <i class="ri-arrow-right-s-line"></i>
                </button>
                <button className="all__food-btn">
                  <Link to="/foods">See All Food</Link>
                </button>
              </div>
              {/* Xếp icons chữ thành 1 hàng - Ở ngoài xếp 2 thẻ p thành 1 hàng */}
              <div className="hero__service d-flex align-items-center gap-5 mt-4">
                <p className="d-flex align-items-center gap-2">
                  <span className="shipping_icon">
                    <i class="ri-car-line"></i>
                  </span>{" "}
                  No Shipping Charge
                </p>
                <p className="d-flex align-items-center gap-2">
                  <span className="shipping_icon">
                    <i class="ri-shield-check-line"></i>
                  </span>
                  100% Security Checkout
                </p>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>
      {/* mb-(0-5) margin-bottom khoảng cách dưới 4px cho mỗi bật
        mt -(0-5)  margin-top khoảng cách trên 4px cho mỗi bậc 
        pt-(0-5)-  padding-top tăng khoảng cách top 4px cho mỗi bậc
        ps-0(0-5) padding-left tăng khoảng cách trái 4px cho mỗi bậc */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4"> What we serve</h5>
              <h2 className="feature__title">Just sit back at Home</h2>
              <h2 className="feature__title">
                we will<span> take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                lorem isum Just wait food at Just wait food at Just wait food at
                Just wait food at Just wait food at Just wait food at{" "}
              </p>
              <p className=" feature__text">
                lorem isum Just wait food at Just wait food at Just wait food at
                Just wait food at Just wait food at Just wait food at{" "}
              </p>
            </Col>
          </Row>
          {/* //?   px-5 py-3 tăng padding  */}
          <Row>
            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm ="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3 ">
                  <img
                    src={item.imgUrl}
                    alt="feature__item"
                    className="w-25 mb-3"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button className={`all__btn ${Categories === 'ALL' ? 'foodBtnActive' :''}`}
                 onClick={() => setCategories('ALL')} >All</button>
                <button className ={`d-flex align-items-center gap-2 ${Categories === 'BURGER' ? 'foodBtnActive' :''}`}
                onClick={() => setCategories('BURGER')} > 
                  <img src={foodCategoryImg01} alt="burger" />
                  Burger
                </button>
                <button  className ={`d-flex align-items-center gap-2 ${Categories === 'PIZZA' ? 'foodBtnActive' :''}`}
                onClick={() => setCategories('PIZZA')} >
                  <img src={foodCategoryImg02} alt="Pizza" />
                  Pizza
                </button>
                <button  className ={`d-flex align-items-center gap-2 ${Categories === 'BREAD' ? 'foodBtnActive' :''}`}
                onClick={() => setCategories('BREAD')} >
                  <img src={foodCategoryImg03} alt="Bread" />
                  Bread
                </button>
              </div>
            </Col>

            {
              allProducts.map((item) =>(
              <Col lg ='3' md= '4' sm = '6' xs = '6' className ='mt-5'>
            <ProductCard item = {item} key={item.id}/>
              </Col>
              ))
            }
           
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
         <Container >
           <Row>
             <Col lg = '6' md = '6'>
               <img src ={whyImg} alt ='why-tastry-treat'  className="w-100"  />
             </Col>
             <Col lg = '6' md = '6'>
                 <div className="why__tasty-treat">
                   <h2 className="tasty__treat-title">Why <span>Tasty Treat?</span></h2>
                   <p className="tasty__treat-desc">lorem isum Just wait food at Just wait food at Just wait food
                  at Just wait food at Just wait food at Just wait food at
                  at Just wait food at Just wait food at Just wait food at
                  at Just wait food at Just wait food at Just wait food at</p>

                  <ListGroup className="mt-4">
                    <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2"><i class="ri-checkbox-circle-line"></i>Fresh and tasty foods</p>
                    <p className="choose__us-desc">Lorem isum Just wait food at Just wait food at Just wait food</p>
                    </ListGroupItem>

                    <ListGroupItem className="border-0 ps-0"> 
                   <p className="choose__us-title d-flex align-items-center gap-2"> <i class="ri-checkbox-circle-line"></i>Quality support</p>
                    <p className="choose__us-desc">Lorem isum Just wait food at Just wait food at Just wait food</p>
                    </ListGroupItem>
                    
                    <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2"><i class="ri-checkbox-circle-line"></i> Order from any location</p>
                    <p className="choose__us-desc">Lorem isum Just wait food at Just wait food at Just wait food</p>
                    </ListGroupItem>
                  </ListGroup>
                 </div>
             </Col>
           </Row>
         </Container>
      </section>
      

      <section className="pt-0">
         <Container>
           <Row>
             <Col lg ='12' className="text-center mb-5">
             <h2>Hot Pizza</h2>
             </Col>
              {
                hotPizaa.map((item)=>(
                  <Col lg='3' md ='4' key={item.id}>
                    <ProductCard item = {item}/>
                  </Col>
                ))
              }
           </Row>
         </Container>
      </section>

      <section>
        <Container>
           <Row>
              <Col lg='6' md ='6'>
                <div className="testimonial mb-5" >
                <h5 className="testimonial__subtitle mb-4" >Testimonial</h5>
                <h2 className="testimonial__title mb-4">What our <span>customers</span> are saying</h2>
                <p className="testimonial__desc">Lorem isum Just wait food at Just wait food at Just wait food Lorem isum Just wait food at 
                Just wait food at Just wait foodLorem isum Just wait food at
                 Just wait food at Just wait food</p>

                 <TestimonialSlider />
                </div>
              </Col>
              <Col lg ='6' md ='6'>
                <img src={networkImg} alt = 'testimonial-img' className="w-100"/>
              </Col>
           </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
