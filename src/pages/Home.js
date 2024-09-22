import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { data } from "../data";
import LoadingSpinner from "../components/LoadingSpinner"; // Create this component for loading
import { ReactComponent as IconLaptop } from "bootstrap-icons/icons/laptop.svg";
import { ReactComponent as IconHeadset } from "bootstrap-icons/icons/headset.svg";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconTv } from "bootstrap-icons/icons/tv.svg";
import { ReactComponent as IconDisplay } from "bootstrap-icons/icons/display.svg";
import { ReactComponent as IconHdd } from "bootstrap-icons/icons/hdd.svg";
import { ReactComponent as IconUpcScan } from "bootstrap-icons/icons/upc-scan.svg";
import { ReactComponent as IconTools } from "bootstrap-icons/icons/tools.svg";

// Lazy-loaded components
const Support = lazy(() => import("../components/Support"));
const Banner = lazy(() => import("../components/carousel/Banner"));
const Carousel = lazy(() => import("../components/carousel/Carousel"));
const CardIcon = lazy(() => import("../components/card/CardIcon"));
const CardLogin = lazy(() => import("../components/card/CardLogin"));
const CardImage = lazy(() => import("../components/card/CardImage"));
const CardDealsOfTheDay = lazy(() => import("../components/card/CardDealsOfTheDay"));

// ErrorBoundary Component
class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught in ErrorBoundary:", error, errorInfo);
    }

    render() {
        return this.state.hasError ? <h1>Something went wrong.</h1> : this.props.children;
    }
}

const HomeView = () => {
    const icons = {
        IconLaptop,
        IconHeadset,
        IconPhone,
        IconTv,
        IconDisplay,
        IconHdd,
        IconUpcScan,
        IconTools,
    };

    const iconProducts = data.iconProducts;
    const productRows = Array.from({ length: Math.ceil(iconProducts.length / 4) }, (_, idx) =>
        iconProducts.slice(idx * 4, idx * 4 + 4)
    );

    const carouselContent = productRows.map((row, idx) => (
        <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
            <div className="row g-3">
                {row.map((product, index) => {
                    const ProductImage = icons[product.img];
                    return (
                        <div key={index} className="col-md-3">
                            <CardIcon title={product.title} text={product.text} tips={product.tips} to={product.to}>
                                <ProductImage className={product.cssClass} width="80" height="80" />
                            </CardIcon>
                        </div>
                    );
                })}
            </div>
        </div>
    ));

    return (
        <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
                <React.Fragment>
                    <Banner className="mb-3 ricki-apple-style" id="carouselHomeBanner" data={data.banner} />
                    <div className="container-fluid bg-light mb-3 ricki-apple-style">
                        <div className="row g-3">
                            <div className="col-md-9">
                                <Carousel id="elect-product-category" className="mb-3">
                                    {carouselContent}
                                </Carousel>
                                <Support />
                            </div>
                            <div className="col-md-3">
                                <CardLogin className="mb-3" />
                                <CardImage src="../../images/banner/Watches.webp" to="promo" />
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid bg-light mb-3 ricki-apple-style">
                        <div className="row">
                            <div className="col-md-12">
                                <CardDealsOfTheDay endDate={Date.now() + 1000 * 60 * 60 * 14} title="Deals of the Day" to="/">
                                    <Carousel id="elect-product-category1">{carouselContent}</Carousel>
                                </CardDealsOfTheDay>
                            </div>
                        </div>
                    </div>
                    <div className="bg-info bg-gradient p-3 text-center mb-3">
                        <h4 className="m-0">Timeless Elegance, Modern Trends</h4>
                    </div>
                    <div className="container">
                        <div className="row">
                            {['men', 'women', 'accessories', 'footwear'].map((category, index) => (
                                <div className="col-md-3" key={index}>
                                    <Link to="/" className="text-decoration-none">
                                        <img
                                            src={`/images/category/${category}.webp`}
                                            className="img-fluid rounded-circle"
                                            alt={category}
                                            style={{ width: 230, height: 230 }}
                                        />
                                        <div className="text-center h6"><br />{category}</div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </React.Fragment>
            </Suspense>
        </ErrorBoundary>
    );
};

export default HomeView;
