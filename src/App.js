import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopMenu from "./components/TopMenu";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles/App.css";

// Lazy load your views
const HomeView = lazy(() => import("./pages/Home"));
const SignInView = lazy(() => import("./views/account/SignIn"));
const SignUpView = lazy(() => import("./views/account/SignUp"));
const ForgotPasswordView = lazy(() => import("./views/account/ForgotPassword"));
const OrdersView = lazy(() => import("./views/account/Orders"));
const WishlistView = lazy(() => import("./views/account/Wishlist"));
const NotificationView = lazy(() => import("./views/account/Notification"));
const MyProfileView = lazy(() => import("./views/account/MyProfile"));
const ProductListView = lazy(() => import("./views/product/List"));
const ProductDetailView = lazy(() => import("./views/product/Detail"));
const StarZoneView = lazy(() => import("./views/product/StarZone"));
const CartView = lazy(() => import("./views/cart/Cart"));
const CheckoutView = lazy(() => import("./views/cart/Checkout"));
const InvoiceView = lazy(() => import("./views/cart/Invoice"));
const DocumentationView = lazy(() => import("./views/Documentation"));
const NotFoundView = lazy(() => import("./pages/404"));
const InternalServerErrorView = lazy(() => import("./pages/500"));
const ContactUsView = lazy(() => import("./pages/ContactUs"));
const SupportView = lazy(() => import("./pages/Support"));
const BlogView = lazy(() => import("./views/blog/Blog"));
const BlogDetailView = lazy(() => import("./views/blog/Detail"));
const CelesteFontaine = lazy(() => import("./components/CelesteFontaine"));
const MenView = lazy(() => import("./views/Men")); // Adjusted path
const WomenView = lazy(() => import("./views/Women")); // Adjusted path

// ErrorBoundary Component
class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        return this.state.hasError ? <h1>Something went wrong.</h1> : this.props.children;
    }
}

function App() {
    return (
        <BrowserRouter>
            <Header />
            <TopMenu />
            <Suspense fallback={<div className="text-white text-center mt-3">Loading...</div>}>
                <ErrorBoundary>
                    <Routes>
                        <Route path="/men" element={<MenView />} />
                        <Route path="/women" element={<WomenView />} />
                        <Route path="/" element={<CelesteFontaine />} /> {/* Landing page */}
                        <Route path="/home" element={<HomeView />} /> {/* Your home page */}
                        <Route path="/account/signin" element={<SignInView />} />
                        <Route path="/account/signup" element={<SignUpView />} />
                        <Route path="/account/forgotpassword" element={<ForgotPasswordView />} />
                        <Route path="/account/profile" element={<MyProfileView />} />
                        <Route path="/account/orders" element={<OrdersView />} />
                        <Route path="/account/wishlist" element={<WishlistView />} />
                        <Route path="/account/notification" element={<NotificationView />} />
                        <Route path="/category" element={<ProductListView />} />
                        <Route path="/product/detail" element={<ProductDetailView />} />
                        <Route path="/star/zone" element={<StarZoneView />} />
                        <Route path="/cart" element={<CartView />} />
                        <Route path="/checkout" element={<CheckoutView />} />
                        <Route path="/invoice" element={<InvoiceView />} />
                        <Route path="/documentation" element={<DocumentationView />} />
                        <Route path="/contact-us" element={<ContactUsView />} />
                        <Route path="/support" element={<SupportView />} />
                        <Route path="/blog" element={<BlogView />} />
                        <Route path="/blog/detail" element={<BlogDetailView />} />
                        <Route path="/500" element={<InternalServerErrorView />} />
                        <Route path="*" element={<NotFoundView />} />
                    </Routes>
                </ErrorBoundary>
            </Suspense>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
