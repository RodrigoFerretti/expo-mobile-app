import * as React from "react";
import Welcome from "./components/WelcomeScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuItems from "./components/MenuItems";

export default function App() {
    return (
        <>
            <Header></Header>
            <MenuItems></MenuItems>
            <Footer></Footer>
        </>
    );
}
