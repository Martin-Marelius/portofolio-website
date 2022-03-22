import Link from 'next/link'
import Head from 'next/head';
import React, { useState } from "react";
import { Footer, Header, Navbar, Display } from '../components';

const IndexPage = () => {
  return (
    

    <div className='relative min-h-screen'>
      <Head>
        <title>Portofolio</title>
        <meta name="" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar />
        <Header />
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage

