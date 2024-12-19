import React from "react";
import MyNavbar from "./components/MyNavBar";
import MyDetailBar from "./components/MyDetailBar";
import Footer from "./components/Footer";
export default function Layout({ children, position, shouldHideOnScroll }) {

    return (
        <>
            {/* <MyDetailBar /> */}
            <MyNavbar position={position} shouldHideOnScroll={shouldHideOnScroll}/>

            {/* Contenido principal */}
            <div
                className="flex flex-col justify-center mx-auto"
            >
                {children}
            </div>

            <Footer />

        </>
    );
}
