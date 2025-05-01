import React from 'react'
import { Avatar, Badge } from 'antd';
import { Button, Drawer } from 'antd';
import { useState } from 'react';
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  var [data,setdata]=useState(JSON.parse(localStorage.getItem("cards" || "")))
  
  return (
    
    <div>
      <>
  {/* HEADER START */}
  <header>
    {/* NAVBAR START LARGE SCREEN */}
    <nav className="navbar navbar-expand-lg  navbar-light bg-dark  py-3 lg_navbar ">
      <div className="container-fluid">
        <a className="navbar-brand text-white  col-2" href="#">
          Navbar
        </a>
        {/* OFFCANVAS BTN START */}
        <button
          className="navbar-toggler offcanvas_btn text-white"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <i className="fa-solid fa-bars" />
        </button>
        {/* OFFCANVAS BTN END */}
        <div className="collapse navbar-collapse  " id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto ">
            {/* NAV-LINK START */}
            <li className="nav-item px-1">
              <a
                className="nav-link text-white active "
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            {/* NAV-LINK END */}
            {/* NAV-LINK START */}
            <li className="nav-item px-1">
              <a className="nav-link text-white" href="#">
             
              </a>
            </li>

            {/* NAV-LINK END */}
                     {/* NAV-LINK START */}
                     <li className="nav-item px-1 dropdown">
              <a
                className="nav-link text-white dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              Eyeglasses
              </a>
              {/* DROPDOWN START */}
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Shopify Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Web-App Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Graphic Design
                  </a>
                </li>
              </ul>
              {/* DROPDOWN END */}
            </li>
            {/* NAV-LINK END */}
            {/* NAV-LINK START */}
            <li className="nav-item px-1 dropdown">
              <a
                className="nav-link text-white dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Service
              </a>
              {/* DROPDOWN START */}
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Shopify Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Web-App Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Graphic Design
                  </a>
                </li>
              </ul>
              {/* DROPDOWN END */}
            </li>
            {/* NAV-LINK END */}
            {/* NAV-LINK START */}
            <li className="nav-item px-1">
              <a className="nav-link text-white" href="#">
                Contact
              </a>
            </li>
            {/* NAV-LINK END */}
          </ul>
          <form className="d-lg-flex d-none text-white col-2">
          <Button className='ms-auto'  onClick={showLoading}>
  <Badge count={data.length} offset={[10, 10]}>
    <i className="fas fa-shopping-cart"></i>
  </Badge>
</Button>

          </form>
        </div>
        <form className="d-lg-none d-flex text-white col-2">
          <Button className='ms-auto'  onClick={showLoading}>
  <Badge count={data.length} offset={[10, 10]}>
    <i className="fas fa-shopping-cart"></i>
  </Badge>
</Button>

          </form>
      </div>
    </nav>
    {/* NAVBAR END LARGE SCREEN */}
    {/* NAVBAR START MOBILE SCREEN */}
    <nav className="navbar m-0 p-0">
      <div
        className=" offcanvas offcanvas-end "
        data-bs-scroll="true"
        tabIndex={-1}
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Navbar
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body d-flex flex-row justify-content-start align-items-center">
          <ul className="navbar-nav  ">
            {/* NAV-LINK START */}
            <li className="nav-item px-1">
              <a className="nav-link  active " aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* NAV-LINK END */}
            {/* NAV-LINK START */}
            <li className="nav-item px-1">
              <a className="nav-link " href="#">
                About
              </a>
            </li>
            {/* NAV-LINK END */}
            {/* NAV-LINK START */}
            <li className="nav-item px-1 dropdown">
              <a
                className="nav-link  dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Service
              </a>
              {/* DROPDOWN START */}
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Shopify Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Web-App Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Graphic Design
                  </a>
                </li>
              </ul>
              {/* DROPDOWN END */}
            </li>
            {/* NAV-LINK END */}
            {/* NAV-LINK START */}
            <li className="nav-item px-1">
              <a className="nav-link " href="#">
                Contact
              </a>
            </li>
            {/* NAV-LINK END */}
          </ul>{" "}
        </div>
      </div>
    </nav>
    {/* NAVBAR END MOBILE SCREEN */}
    {/* SCROL TO TOP BTN START */}
    <a href="#" className="scroll_top_btn">
      <button className="top_btn_1">
        <i className="fa fa-arrow-up" />
      </button>
    </a>
    {/* SCROL TO TOP BTN END */}
  </header>
{/* ================== DRWAER START ==================== */}
<Drawer
  closable={false}
  open={open}
  loading={loading}
  onClose={() => setOpen(false)}
>
  <div className="col-12 m-0 p-0">
    <h4>Shopping Cart</h4>
    {/* Cart List */}
    {data.map((element, index) => (
      <div key={index} className="d-flex flex-row justify-content-between align-items-center col-12 my-2 shadow-sm py-2 ">
        <img src={element.img} alt={`Product ${index}`} className='col-2 rounded-2' />
        <p className='col-6 ps-1'>{element.name} <br />{element.price}</p>
        <i className="fa fa-trash col-2 text-end pe-2" aria-hidden="true"></i>
      </div>
    ))}
    {/* Cart List */}
<div className="col-12 d-flex flex-row justify-content-center mb-2 position-absolute bottom-0 mx-auto">
  <button className='bg text-white mx-auto col-4 p-2 border-0 pb-2'>
  <a className='text-decoration-none text-white' href={`https://wa.me/03146903187?text=${encodeURIComponent(`${JSON.stringify(localStorage.getItem("cards" || ""))}`)}data`} target="_blank" rel="noopener noreferrer">Checkout</a>

  </button>
</div>
  </div>
</Drawer>

{/* =================== DRWAER END ==================== */}
  {/* HEADER END */}
</>

    </div>
  )
}
