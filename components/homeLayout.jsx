import React from  'react';
import Navbar from './navbar'
import Footer from './footer'   
import Head from 'next/head'

const HomeLayout = function ({ children }){
    return (
        <>
            <Navbar />
             <Head>
                <meta name="google-site-verification" content="-iz1XDJXPge2QUU9uoGTTTVJdCB0zytj6W6d5v2J-Gw" />
                <title>Engineer | Organize & Share Study Materials</title>
                <meta name="description" content="Engineer is a project designed for organizing and sharing study materials, notes, and tutorials. Built with Next.js for a clean, responsive experience." />
                <meta name="keywords" content="study materials, engineering notes, tutorials, Next.js, GitHub Pages" />
                <meta name="author" content="Raj Gupta" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <main>{children}</main>
            <Footer />
        </>
    )
}
export default HomeLayout;
