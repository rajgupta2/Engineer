import React from  'react';
import Navbar from './navbar'
import Footer from './footer'   

const HomeLayout = function ({ children }){
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}
export default HomeLayout;