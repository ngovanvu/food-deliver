import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import ProductCard from "../components/UI/ProductCard/ProductCard";
import products from "../assets/fake-data/products.js";
import ReactPaginate from "react-paginate";

import "../styles/all-food.css";
import "../styles/allfoods-pagination.css"
const AllFood = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Cài đặt chuyển trang page 1 2 3
  const [pageNumber, setPageNumber] = useState(0)
   //  Tai sao lai cham value??
  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === "") return item;
    if (
      item.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
      return item;
  })
  // Hiển thị giá trị 12 id
  const productsPerPage = 12
  // visitedPage = 0 * 12
  const visitedPage = pageNumber * productsPerPage
  // Cắt giá trị từ (0 đến 12)
  const displayPage = searchedProduct.slice(visitedPage, visitedPage + productsPerPage)
  // làm tròn giá trị 13/12 = 1.125 = 2
  const pageCount = Math.ceil(searchedProduct.length / productsPerPage)

  const changePage = ({selected }) => {
    setPageNumber(selected)
  }

  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs ="12">
              <div className="search__widget d-flex align-items-center justify-content-between">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs= '12' className="mb-5">
              <div className="sorting__widget text-end ">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, A-Z</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>
            {displayPage .map((item) => (
                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                  <ProductCard item={item} />
                </Col>
              ))}
              <div>
                <ReactPaginate
                  pageCount={pageCount}
                  onPageChange ={changePage}
                  previousLabel = 'Prev'
                  nextLabel = 'Next'
                  containerClassName="paginationBttns"
                />
              </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFood;
