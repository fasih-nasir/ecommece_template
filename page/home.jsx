import { useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'; // Swiper main CSS
import 'swiper/css/navigation'; // Swiper navigation CSS
import 'swiper/css/pagination'; // Swiper pagination CSS

// ================ ANT DESIGN START ====================
import { Card, Button } from "antd";
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
    // ANTDESGIN CODE START
    const [hovered, setHovered] = useState(false);
    // ANTDESGIN CODE END
  return (
    <div>
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
          <div class="col-lg-6 col-12 d-flex flex-column justify-content-center p-4 position-absolute top-0 pt-5 h-100">
 <h6>Savings with 60% off on Sunglasses</h6>
  <h2 class="fw-bold mb-3 display-4">Stylish Sunglasses</h2>
  <p class="mb-4 fs-6 fw-normal">Get all the latest information on events, sales, and exclusive offers delivered straight to your inbox. 
    Be the first to know about our new arrivals, seasonal trends.</p>
  <a href="#" class="btn btn-dark col-lg-3 col-6">Subscribe Now</a>
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
<div className="swiper-wrapper container-fluid">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={4}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        
      >
     {/* CARD START */}
     <SwiperSlide>
          <div className="product-card col-lg-12">
            <Card
           
              cover={
                <img 
                  alt="product"
                  src={product_img_1}
                />
              }
            >
              <div className="product-actions d-flex flex-column">
            <h5 className='fw-light'>Gareett Light Magician </h5>
            <div className="d-flex flex-row justify-content-between align-items-center">
            <h5>$38.90 </h5>
            <button type="" className='bg fs-6 border-0 px-3 py-1 rounded-2 text-white' >
            <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </div>

               
         
              </div>
            </Card>
          </div>
        </SwiperSlide>
            {/* CARD END */}
    {/* CARD START */}
    <SwiperSlide>
          <div className="product-card col-lg-12">
            <Card
           
              cover={
                <img 
                  alt="product"
                  src={product_img_1}
                />
              }
            >
              <div className="product-actions d-flex flex-column">
            <h5 className='fw-light'>Gareett Light Magician </h5>
            <div className="d-flex flex-row justify-content-between align-items-center">
            <h5>$38.90 </h5>
            <button type="" className='bg fs-6 border-0 px-3 py-1 rounded-2 text-white' >
            <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </div>

               
         
              </div>
            </Card>
          </div>
        </SwiperSlide>
            {/* CARD END */}
       {/* CARD START */}
    <SwiperSlide>
          <div className="product-card col-lg-12">
            <Card
           
              cover={
                <img 
                  alt="product"
                  src={product_img_1}
                />
              }
            >
              <div className="product-actions d-flex flex-column">
            <h5 className='fw-light'>Gareett Light Magician </h5>
            <div className="d-flex flex-row justify-content-between align-items-center">
            <h5>$38.90 </h5>
            <button type="" className='bg fs-6 border-0 px-3 py-1 rounded-2 text-white' >
            <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </div>

               
         
              </div>
            </Card>
          </div>
        </SwiperSlide>
            {/* CARD END */}
            {/* CARD START */}
        {/* CARD START */}
    <SwiperSlide>
          <div className="product-card col-lg-12">
            <Card
           
              cover={
                <img 
                  alt="product"
                  src={product_img_1}
                />
              }
            >
              <div className="product-actions d-flex flex-column">
            <h5 className='fw-light'>Gareett Light Magician </h5>
            <div className="d-flex flex-row justify-content-between align-items-center">
            <h5>$38.90 </h5>
            <button type="" className='bg fs-6 border-0 px-3 py-1 rounded-2 text-white' >
            <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </div>

               
         
              </div>
            </Card>
          </div>
        </SwiperSlide>
            {/* CARD END */}
            {/* CARD START */}
       {/* CARD START */}
    <SwiperSlide>
          <div className="product-card col-lg-12">
            <Card
           
              cover={
                <img 
                  alt="product"
                  src={product_img_1}
                />
              }
            >
              <div className="product-actions d-flex flex-column">
            <h5 className='fw-light'>Gareett Light Magician </h5>
            <div className="d-flex flex-row justify-content-between align-items-center">
            <h5>$38.90 </h5>
            <button type="" className='bg fs-6 border-0 px-3 py-1 rounded-2 text-white' >
            <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </div>

               
         
              </div>
            </Card>
          </div>
        </SwiperSlide>
            {/* CARD END */}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="custom-prev"><i className="fa-solid fa-arrow-left"></i></div>
      <div className="custom-next"><i className="fa-solid fa-arrow-right"></i></div>
    </div>
</div>
</section>
<div className="my-5 py-5">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, repellendus quam veniam inventore, temporibus dicta harum est sint quia maxime aspernatur explicabo. Impedit, mollitia. Nesciunt, accusantium dignissimos dicta quibusdam sed fugit temporibus quisquam facilis accusamus possimus magni officiis odio placeat similique itaque deserunt iusto optio! Illo nobis libero dicta ut officiis animi, voluptas saepe nostrum accusantium odit similique quibusdam architecto iure, minus blanditiis, dolorem assumenda rerum. Commodi totam quidem libero earum ut sint qui officiis ipsum, adipisci cumque reprehenderit necessitatibus in molestias possimus, natus beatae id repudiandae asperiores exercitationem maiores doloremque assumenda. Ad at libero qui ratione expedita consequuntur recusandae? Magnam suscipit impedit sapiente rerum aperiam et natus accusantium deserunt vel incidunt, harum sint, quibusdam quas doloribus minima tenetur hic. Repellat nihil ab libero provident, iure fugit perferendis nisi delectus magnam aperiam quas et hic dolorum! Ipsa obcaecati natus culpa ab voluptatem, fugiat veniam fuga accusantium ut libero quae, tenetur, dignissimos maiores non officiis quidem doloribus? Quibusdam ad officiis veritatis rerum porro facere! At hic explicabo distinctio officia praesentium maiores possimus libero, exercitationem debitis doloremque est obcaecati reiciendis dolorem ipsa cupiditate sapiente consectetur, adipisci voluptate corporis saepe sunt a dolor rem porro? Quae aspernatur harum animi repellat minus, odio quia?
</div>
  {/* SECTION 4 END */}
  

</>

    </div>
  )
}

export default Home
