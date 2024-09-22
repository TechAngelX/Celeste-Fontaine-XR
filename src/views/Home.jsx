// import React, { lazy, Component } from "react";
// import { Link } from "react-router-dom";
// import { data } from "../data";
// import '../styles/index.css';
//
// import { ReactComponent as IconLaptop } from "bootstrap-icons/icons/laptop.svg";
// import { ReactComponent as IconHeadset } from "bootstrap-icons/icons/headset.svg";
// import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
// import { ReactComponent as IconTv } from "bootstrap-icons/icons/tv.svg";
// import { ReactComponent as IconDisplay } from "bootstrap-icons/icons/display.svg";
// import { ReactComponent as IconHdd } from "bootstrap-icons/icons/hdd.svg";
// import { ReactComponent as IconUpcScan } from "bootstrap-icons/icons/upc-scan.svg";
// import { ReactComponent as IconTools } from "bootstrap-icons/icons/tools.svg";
//
// const Support = lazy(() => import("../components/Support"));
// const Banner = lazy(() => import("../components/carousel/Banner"));
// const Carousel = lazy(() => import("../components/carousel/Carousel"));
// const CardIcon = lazy(() => import("../components/card/CardIcon"));
// const CardLogin = lazy(() => import("../components/card/CardLogin"));
// const CardImage = lazy(() => import("../components/card/CardImage"));
// const CardDealsOfTheDay = lazy(() => import("../components/card/CardDealsOfTheDay"));
//
// class HomeView extends Component {
//   components = {
//     IconLaptop,
//     IconHeadset,
//     IconPhone,
//     IconTv,
//     IconDisplay,
//     IconHdd,
//     IconUpcScan,
//     IconTools,
//   };
//
//   renderCarouselContent() {
//     const iconProducts = data.iconProducts;
//     const rows = [...Array(Math.ceil(iconProducts.length / 4))];
//     const productRows = rows.map((_, idx) => iconProducts.slice(idx * 4, idx * 4 + 4));
//
//     return productRows.map((row, idx) => (
//         <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
//           <div className="row g-3">
//             {row.map((product, idx) => {
//               const ProductImage = this.components[product.img];
//               return (
//                   <div key={idx} className="col-md-3">
//                     <CardIcon
//                         title={product.title}
//                         text={product.text}
//                         tips={product.tips}
//                         to={product.to}
//                     >
//                       <ProductImage className={product.cssClass} width="80" height="80" />
//                     </CardIcon>
//                   </div>
//               );
//             })}
//           </div>
//         </div>
//     ));
//   }
//
//   render() {
//     return (
//         <>
//           <Banner className="mb-3" id="carouselHomeBanner" data={data.banner} interval={200} />
//           <div className="container-fluid bg-light mb-3">
//             <div className="row g-3">
//               <div className="col-md-9">
//                 <Carousel id="elect-product-category" className="mb-3" interval={500}>
//                   {this.renderCarouselContent()}
//                 </Carousel>
//                 <Support />
//               </div>
//               <div className="col-md-3">
//                 <CardLogin className="mb-3" />
//                 <CardImage src="../../images/banner/Watches.webp" to="promo" />
//               </div>
//             </div>
//           </div>
//           <div className="container-fluid bg-light mb-3">
//             <div className="row">
//               <div className="col-md-12">
//                 <CardDealsOfTheDay
//                     endDate={Date.now() + 1000 * 60 * 60 * 14}
//                     title="Deals of the Day"
//                     to="/"
//                 >
//                   <Carousel id="elect-product-category1">
//                     {this.renderCarouselContent()}
//                   </Carousel>
//                 </CardDealsOfTheDay>
//               </div>
//             </div>
//           </div>
//           <div className="bg-info ricki-apple-bg p-3 text-center mb-3">
//             <h4 className="m-0">Timeless Elegance, Modern Trends</h4>
//           </div>
//           <div className="container">
//             <div className="row">
//               <div className="col-md-3">
//                 <Link to="/" className="text-decoration-none">
//                   <img
//                       src="/images/category/men.webp"
//                       className="img-fluid rounded-circle"
//                       alt="men"
//                       style={{ width: 230, height: 230 }}
//                   />
//                   <div className="text-center h6">homme</div>
//                 </Link>
//               </div>
//               <div className="col-md-3">
//                 <Link to="/" className="text-decoration-none">
//                   <img
//                       src="/images/category/women.webp"
//                       className="img-fluid rounded-circle"
//                       alt="women"
//                       style={{ width: 230, height: 230 }}
//                   />
//                   <div className="text-center h6">femme</div>
//                 </Link>
//               </div>
//               <div className="col-md-3">
//                 <Link to="/" className="text-decoration-none">
//                   <img
//                       src="/images/category/accessories.webp"
//                       className="img-fluid rounded-circle"
//                       alt="accessories"
//                       style={{ width: 230, height: 230 }}
//                   />
//                   <div className="text-center h6">accessoires</div>
//                 </Link>
//               </div>
//               <div className="col-md-3">
//                 <Link to="/" className="text-decoration-none">
//                   <img
//                       src="/images/category/footwear.webp"
//                       className="img-fluid rounded-circle"
//                       alt="footwear"
//                       style={{ width: 230, height: 230 }}
//                   />
//                   <div className="text-center h6">chaussures</div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </>
//     );
//   }
// }
//
// export default HomeView;
