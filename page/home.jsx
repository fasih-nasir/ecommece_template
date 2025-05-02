import { useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'; // Swiper main CSS
import 'swiper/css/navigation'; // Swiper navigation CSS
import 'swiper/css/pagination'; // Swiper pagination CSS
// import * as bootstrap from 'bootstrap';
// ================ ANT DESIGN START ====================
import { Card, Button } from "antd";
import {  message, Space,Popover } from 'antd';

import 'antd/dist/reset.css';
  
const { Meta } = Card;

// ================ ANT DESGIN END =====================
// =============== CAROUSEL IMAGE START =================
import car_img_1 from '../src/assets/sample-3.jpg'
import car_img_2 from '../src/assets/sample-2.jpg'
import car_img_3 from '../src/assets/sample-1.jpg'
// =============== CAROUSEL IMAGE END =================

// ===============  PRODUCT IMAGE START ===================
import product_img_1 from '../src/assets/produc_1.jpg'
import product_img_2 from '../src/assets/produc_2.jpg'
import product_img_3 from '../src/assets/produc_3.jpg'
import product_img_4 from '../src/assets/produc_4.jpg'
import product_img_5 from '../src/assets/produc_5.jpg'


// ===============  PRODUCT IMAGE END ===================



// IMPORT IMAGE END

function Home() {
  // ================ SIBGLE CARD START ===================
  var [single_card,setsingle_card]=useState([]||"")

  // ================ SIBGLE CARD  END ===================

  var [feature_pro,setfeature_pro]=useState([]||"")
  var [addtocard,setaddtocard]=useState("")
  const [messageApi, contextHolder] = message.useMessage();
// ANT DESIGN CODE START
const content = (
  <div>
    <p>Add To Card</p>
   
  </div>
);
const success = () => {
  messageApi.open({
    type: 'success',
    content: 'Product Is Added Into Card',
  });
};

const warning = () => {
  messageApi.open({
    type: 'warning',
    content: 'This product is already in the cart!',
  });
};

// ANT DESIGN CODE END
  // FEATURE PRODUCT START
useEffect(()=>{
  try {
    fetch("https://opensheet.elk.sh/11wt9H6eLMfw8tQi82k8MVfZ3vgzhqU6sNF1dTvR_U_s/Sheet1")
    .then((e)=> e.json())
    .then(e =>{
  setfeature_pro(e)
    })
   } catch (error) {
    
   }
},[])
  // FEATURE PRODCUT END 
  return (
    <div>
      {contextHolder}
      <>
  {/* HERO SECTION START  */}
  <main className="m-0 p-0">
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade m-0 p-0"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner " >
        <div className="carousel-item active position-relative">
          <img
            src={car_img_1}
            className="d-block w-100"
            alt="..."
          />
          <div className="col-lg-6 col-12 d-flex flex-column justify-content-center p-4 position-absolute top-0 pt-5 h-100">
 <h6>Savings with 60% off on Sunglasses</h6>
  <h2 className="fw-bold mb-3 display-4">Stylish Sunglasses</h2>
  <p className="mb-4 fs-6 fw-normal">Get all the latest information on events, sales, and exclusive offers delivered straight to your inbox. 
    Be the first to know about our new arrivals, seasonal trends.</p>
  <a href="#" className="btn btn-dark col-lg-3 col-6">Subscribe Now</a>
</div>

        </div>
        <div className="carousel-item position-relative">
          <img
          src={car_img_2}
            className="d-block w-100"
            alt="..."
          />
          <div className="col-lg-6 col-12 d-flex flex-column justify-content-center p-4 position-absolute top-0 pt-5 h-100">
  <h6>Buy 1 Get 1 Free on Footwear</h6>
  <h2 className="fw-bold mb-3 display-4">Trendy Glasses</h2>
  <p className="mb-4 fs-6 fw-normal">
  Discover the latest styles in fashion and prescription glasses. 
Stay ahead with trendy frames that match every look and lifestyle. 


  </p>
  <a href="#" className="btn btn-dark col-lg-3 col-6">
    Shop Now
  </a>
</div>

        </div>
        <div className="carousel-item position-relative">
          <img
          src={car_img_3}
            className="d-block w-100"
            alt="..."
          />
          <>
  {/* Block 3 */}
  <div className="col-lg-6 col-12 d-flex flex-column justify-content-center p-4 position-absolute top-0 pt-5 h-100">
    <h6>Hot Deals on Summer Collection</h6>
    <h2 className="fw-bold mb-3 display-4">Cool Summer Wear</h2>
    <p className="mb-4 fs-6 fw-normal">
      Stay cool and stylish with our breathable, lightweight summer collection.
      From tees to linen sets, enjoy fresh looks and unbeatable comfort. Explore
      our hot deals now!
    </p>
    <a href="#" className="btn btn-dark col-lg-3 col-6">
      Explore Now
    </a>
  </div>
</>

        </div>
      </div>
      <div className="carousel-indicators">
  <button
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide-to={0}
    className="active"
    aria-current="true"
    aria-label="Slide 1"
  />
  <button
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide-to={1}
    aria-label="Slide 2"
  />
  <button
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide-to={2}
    aria-label="Slide 3"
  />
</div>

    </div>
  </main>
  {/* HERO SECTION END */}

  {/* SECTION 2 START */}
  <section className='container-fluid'>
  <div className="container-fluid d-flex flex-lg-row flex-column my-5">
  <div className="service-cms-banner-list service-1 col-lg-3 col-12">
  <div className="service_block_inner d-flex  justify-content-lg-start align-items-center col-12">
    <div className="service_image">
      <i className="fas fa-truck-fast fa-2x text-primary" />
    </div>
    <div className="service_content ps-2 d-flex flex-column justify-content-lg-start  ">
      <h6 className=" fw-bold">Easy Free Delivery</h6>
      <span className=" fs-6">Online shopping </span>
    </div>
  </div>
</div>

<div className="service-cms-banner-list service-2 col-lg-3 col-12">
  <div className="service_block_inner d-flex flex-row justify-content-lg-start align-items-center col-12">
    <div className="service_image">
      <i className="fas fa-shield-alt fa-2x text-success" />
    </div>
    <div className="service_content ps-2 d-flex flex-column">
      <h6 className=" fw-bold">Premium Warranty</h6>
      <span className="">Up to 2 years</span>
    </div>
  </div>
</div>

<div className="service-cms-banner-list service-3 col-lg-3 col-12">
  <div className="service_block_inner d-flex flex-row justify-content-lg-start align-items-center col-12">
    <div className="service_image">
      <i className="fas fa-rotate-left fa-2x text-warning" />
    </div>
    <div className="service_content ps-2 d-flex flex-column">
      <h6 className=" fw-bold">Easy Free Return</h6>
      <span className="">return and refund policy</span>
    </div>
  </div>
</div>

<div className="service-cms-banner-list service-4 col-lg-3 col-12">
  <div className="service_block_inner d-flex flex-row justify-content-lg-start align-items-center col-12">
    <div className="service_image">
      <i className="fas fa-headset fa-2x text-danger" />
    </div>
    <div className="service_content ps-2 d-flex flex-column">
      <h6 className=" fw-bold">24×7 Online Support</h6>
      <span className="">Customers  support</span>
    </div>
  </div>
</div>

  </div>
</section>

  {/* SECTION 2 END */}

  {/* SECTION 3 START */}
 <section className='container-fluid'>
 <div className="container-fluid">
  <div className="row d-flex flex-row justify-content-between">
    <div className="col-lg-4 col-md-6 col-12 mb-4">
      <div className="cms_content col-12 overflow-hidden d-flex flex-row justify-content-center align-items-center">
        <a href="#">
          <img
            className="img-fluid transition"
            src="https://prestashop.coderplace.com/PRS03/PRS03057/demo/modules/cp_cmsbanner1/views/img/cms-banner1.jpg"
            alt="Men Sunglasses"
          />
        </a>
        <div className="cms-block mx-auto  d-flex flex-row justify-content-center align-items-center">
          <div className="offer-text2 fw-bold mt-2 ">Men Sunglasses</div>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 col-12 mb-4">
      <div className="cms_content col-12 d-flex flex-row justify-content-center align-items-center overflow-hidden">
        <a href="#">
          <img
            className="img-fluid transition"
            src="https://prestashop.coderplace.com/PRS03/PRS03057/demo/modules/cp_cmsbanner1/views/img/cms-banner2.jpg"
            alt="Women Sunglasses"
          />
        </a>
        <div className="cms-block mx-auto  d-flex flex-row justify-content-center align-items-cente">
          <div className="offer-text2 fw-bold mt-2">Women Sunglasses</div>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 col-12 mb-4">
      <div className="cms_content col-12  overflow-hidden d-flex flex-row justify-content-center align-items-center">
        <a href="#">
          <img
            className="img-fluid transition"
            src="https://prestashop.coderplace.com/PRS03/PRS03057/demo/modules/cp_cmsbanner1/views/img/cms-banner3.jpg"
            alt="Kids Sunglasses"
          />
        </a>
        <div className="cms-block mx-auto  d-flex flex-row justify-content-center align-items-cente">
          <div className="offer-text2 fw-bold mt-2">Kids Sunglasses</div>
        </div>
      </div>
    </div>
  </div>
</div>

 </section>
  {/* SECTION 3 END */}

  {/* SECTION 4 START */}
<section className="container-fluid">
    {/*  */}
    <div className="container text-center">
        <h2>Featured Products</h2>
<p>Check out our collection of the top Featured Products that encourage conversion.</p>
    </div>
    {/*  */}
<div className="container-fluid">
  
    {/* ===================================== */}
<div className="swiper-wrapper ">
      <Swiper
     className="container-fluid"
     modules={[Navigation]}
     spaceBetween={40}
     slidesPerView={1} // default (e.g., mobile)
     navigation={{
       nextEl: ".custom-next",
       prevEl: ".custom-prev",
     }}
     breakpoints={{
       // when window width is >= 576px
       576: {
         slidesPerView: 2,
       },
       // when window width is >= 768px (md)
       768: {
         slidesPerView: 3,
       },
       // when window width is >= 992px (lg)
       992: {
         slidesPerView: 4,
       },
     }}
        
      >
   
   
 
      {feature_pro
       .filter((element) => element.cat === "feature" && element.instock === "yes")
      .map((element, index) => (

   <SwiperSlide key={index} className='col-lg-3 col-12'>
  <div className="product-card col-12 ">

     <Card
    
       cover={
         <img 
           alt="product"
           src={element.img}
         />
       }
     >
       <div className="product-actions d-flex flex-column justify-content-between">
     <h5 className='fw-light'>{element.name} </h5>
     <div className="d-flex flex-column justify-content-between align-items-center">
<div className='col-12 d-flex flex-row justify-content-between'>
<h6>Rs:{element.price} </h6>
<h6>Rating:{element.Rating} </h6>

</div>
     {/* ======================= ADD TO CARD ========================= */}

<div className='col-12 d-flex flex-row justify-content-between mt-2'>
<button
  type="button"
  className="btn btn-primary" // Optional: Add styling
  data-bs-toggle="modal"
  data-bs-target="#buyNowModal"  // Make sure this ID matches the modal's ID
  onClick={() => setsingle_card(element)}
>
  Buy Now
</button>



<Popover content={content} >
     <button
     className='bg text-white px-2 fs-5 rounded-1 py-1 spo'
  onClick={() => {
    const prev = JSON.parse(localStorage.getItem("cards") || "[]");

    const index = prev.findIndex(item => item.id === element.id);

    if (index === -1) {
      prev.push(element);
      localStorage.setItem("cards", JSON.stringify(prev));
      success();
      success();

    } else {
      warning();
      warning();

    }
  }}
>
<i className="fa-solid fa-bag-shopping "></i>
</button>
</Popover>
</div>

     {/* ======================= ADD TO CARD ========================= */}

     </div>

        
  
       </div>
     </Card>
   </div>
 </SwiperSlide>


))}
     </Swiper>
      {/* Custom Navigation Arrows */}
      <div className="custom-prev"><i className="fa-solid fa-arrow-left"></i></div>
      <div className="custom-next"><i className="fa-solid fa-arrow-right"></i></div>
    </div>
    {/* ====================================== */}
    {/* ======================= MODEAL START ============== */}


{/* ======================= MODEAL END ================== */}
</div>

</section>
<div className="my-5 py-5">
  <div
    className="modal fade modal-xxl"
    id="buyNowModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabIndex={-1}
    aria-labelledby="buyNowModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="buyNowModalLabel">
            {single_card.name}
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>

        <div className="modal-body container-fluid d-flex flex-lg-row flex-column shadow-none border-0">
          {/* Left: Image */}
          <div className="col-lg-4 col-12 p-2">
            <Card
              cover={
                <img
                  alt="product"
                  src={single_card.img}
                  className="mx-auto img-fluid col-12 h-100 shadow-none border-0"
                />
              }
            />
          </div>

          {/* Right: Form */}
          <div className="col-lg-8 col-12 p-2">
            <form
              className="p-4 border-0 rounded shadow-none"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;

                const name = form.name.value.trim();
                const email = form.email.value.trim();
                const qty = form.quantity.value.trim();
                const location = form.location.value.trim();

                if (!name || !email || !qty || !location) {
                  alert("Please fill in all fields.");
                  return;
                }

                const product = single_card.title;
                const price = single_card.price;
                const messageText = `Buy Now Request:%0AName: ${name}%0AEmail: ${email}%0AQuantity: ${qty}%0ALocation: ${location}%0AProduct: ${single_card.name}%0APrice: $${price}%0AImage: ${single_card.img}`;
                const whatsappUrl = `https://wa.me/923146903187?text=${messageText}`;

                // ✅ Show AntD success message
                message.success("Message successfully sent. Redirecting to WhatsApp...");

                // ✅ Reset form
                form.reset();

                // ✅ Close modal
                const modalEl = document.getElementById("buyNowModal");
                // const modalInstance = bootstrap.Modal.getInstance(modalEl);
                // if (modalInstance) modalInstance.hide();

                // ✅ Open WhatsApp after delay
                setTimeout(() => {
                  window.open(whatsappUrl, "_blank");
                }, 100); // 10 seconds
              }}
            >
              <h4 className="mb-3">Fill This Form</h4>
              <div className="mb-3">
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  name="quantity"
                  type="number"
                  className="form-control"
                  placeholder="Quantity"
                  min={1}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  name="location"
                  type="text"
                  className="form-control"
                  placeholder="Location"
                  required
                />
              </div>
              <div className="d-flex justify-content-end">
                <button
                  type="submit"
                  className="bg text-white border-0 py-2 px-5 rounded-2"
                >
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* End modal-body */}
      </div>
    </div>
  </div>
</div>

  {/* SECTION 4 END */}
  

</>

    </div>
  )
}

export default Home
