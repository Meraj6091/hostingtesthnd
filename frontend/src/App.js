import MessengerCustomerChat from "react-messenger-customer-chat";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import AllProductsScreen from "./screens/AllProductsScreen";
import ElectronicsScreen from "./screens/ElectronicsScreen";
import ComputersScreen from "./screens/ComputersScreen";
import SmartPhonesScreen from "./screens/SmartPhonesScreen";
import AnalyticsScreen from "./screens/AnalyticsScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import ComputerListScreen from "./screens/ComputerListScreen";
import SmartPhoneListScreen from "./screens/SmartPhoneListScreen";
import ElectronicsListScreen from "./screens/ElectronicsListScreen";
import PaidOrderListScreen from "./screens/PaidOrderListScreen";
import NotPaidOrderListScreen from "./screens/NotPaidOrderListScreen";

const App = () => {
  return (
    <switch>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/" component={HomeScreen} exact />
            <Route path="/admin/userlist" component={UserListScreen} />
            <Route path="/admin/user/:id/edit" component={UserEditScreen} />
            <Route
              path="/admin/productlist"
              component={ProductListScreen}
              exact
            />
            <Route
              path="/admin/productlist/:pageNumber"
              component={ProductListScreen}
              exact
            />
            <Route
              path="/admin/product/:id/edit"
              component={ProductEditScreen}
            />
            <Route path="/admin/orderlist" component={OrderListScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/allproducts" component={AllProductsScreen} exact />
            <Route path="/search/:keyword" component={HomeScreen} />
            <Route path="/page/:pageNumber" component={HomeScreen} exact />
            <Route path="/electronics" component={ElectronicsScreen} exact />
            <Route path="/computers" component={ComputersScreen} exact />
            <Route path="/smartphones" component={SmartPhonesScreen} exact />
            <Route path="/about" component={AboutUsScreen} exact />
            <Route
              path="/admin/computerlist"
              component={ComputerListScreen}
              exact
            />
            <Route
              path="/admin/smartphonelist"
              component={SmartPhoneListScreen}
              exact
            />
            <Route
              path="/admin/electroniclist"
              component={ElectronicsListScreen}
              exact
            />
            <Route path="/admin/paid" component={PaidOrderListScreen} exact />
            <Route
              path="/admin/notpaid"
              component={NotPaidOrderListScreen}
              exact
            />
          </Container>
        </main>
        <Footer />
      </Router>
    </switch>
  );
};

export default App;
