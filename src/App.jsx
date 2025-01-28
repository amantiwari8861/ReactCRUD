import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import LearnUseEffect from "./components/LearnUseEffect";
import PropDrilling from "./components/propdrilling/PropDrilling";
import ContextApi from "./components/contextApi/ContextApi";
import { Counter } from "./components/Counter";
import CartComponent from "./components/CartComponent";
import AdminDashboard from "./pages/AdminDashboard";
import RegisterUser from "./components/RegisterUser";

const App = () => (

    <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<RegisterUser/>} />
            <Route path="/learn" element={<LearnUseEffect/>} />
            <Route path="/propdrilling" element={<PropDrilling/>} />
            <Route path="/contextapi" element={<ContextApi/>} />
            <Route path="/counter" element={<Counter/>} />
            <Route path="/cart" element={<CartComponent/>} />
            <Route path="/admin" element={<AdminDashboard/>} />
            <Route path="*" element={<NotFound/>} />
        </Route>
    </Routes>

);

export default App;