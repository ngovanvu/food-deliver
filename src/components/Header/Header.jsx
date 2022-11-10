import React, {useEffect, useRef} from 'react'
import { Container } from "reactstrap";
import logo from '../../assets/images/res-logo.png'
import { NavLink,Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { cartUIActions } from '../../Store/shopping-cart/cartUISlice1';

import '../../styles/header.css'
const nav__link  = [
  {
    display: 'Home',
    path: '/home'
  },
  {
    display: 'All-Food',
    path: '/foods'
  },
  {
    display: 'Cart',
    path: '/cart'
  },
  {
    display: 'Contact',
    path: '/contact'
  },
]
  
const Header = () => {
  const menuRef = useRef(null)
  const headerRef = useRef(null)
  const totalQuantity  = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

  const toggleCart = () => {
    dispatch(cartUIActions.toggle())
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll",null);
  }, []);
  
  return (
    
    <header className ='header' ref={headerRef}>
     {/* .current.classList.toggle('show__menu') thay doi trang thai xoa class cu~ va them show__menu */}
    {/*d-flex dùng để đưa các div thành 1 hàng
    align-items-center đưa ra giữa
    justify-content-between tách các div ra một khoảng cân bằng
    (Có thể dùng gap-5 để tạo khoảng cách cho mỗi div)  */}
    <Container>
       <div className='nav__wrapper d-flex align-items-center justify-content-between'>
        <div className='logo'>
            <img src={logo} alt = 'logo'/>
            <h5>Tasty Treat</h5>
        </div>
        {/*  =====Menu=====
         Sử dụng nav__link để lấy dữ liệu Gồm tên và path để nó có thể nhảy router dễ dàng 
         sở dĩ dùng d-flex align-items-center gap-5  ở className menu vì Navlink mỗi lần lấy ra 1 cái nên sẽ nhận class mỗi thành phần còn bỏ ở navigation thì 4 cái chỉ nhận 1 class không có hiện tượng xảy ra
         tạo navClass => navClass.isActive ? 'active__menu' : '' Hiện dạng active phù hợp với css class active__menu
      */}
        <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <div className='menu d-flex align-items-center gap-5 '>
            {
              nav__link.map((item,index)=> (
                <NavLink
                 to = {item.path} key = {index} 
                className = {navClass => navClass.isActive ? 'active__menu' : ''}
                >{item.display}</NavLink>
              ))
            }
            </div>
        </div>
        {/* ===== Nav right icons =====  */}
        <div className='nav__right d-flex align-items-center gap-4' >
           <span className='cart__icon' onClick={toggleCart}>
           <i class="ri-shopping-basket-line"></i>
           <span className='cart__badge'>{totalQuantity}</span>
           </span>
           <span className='user'>
              <Link to = '/login'><i class="ri-user-line"></i></Link>
           </span>
           <span className='mobile__menu' onClick={toggleMenu}>
           <i class="ri-menu-line"></i>
           </span>
        </div>
       </div>
    </Container>
    </header>
  )
}

export default Header
