import React from 'react'

export default function Navbar() {
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
          <form className="d-flex ">
            <input
              className="form-contro col-10 ms-auto"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
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
  {/* HEADER END */}
</>

    </div>
  )
}
