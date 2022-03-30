import Link from 'next/link'
import Head from 'next/head';
import React, { useState } from "react";
import { Footer, Header, Navbar, Display } from '../components';

const IndexPage = () => {
  return (


    <div className='relative min-h-screen'>
      <Head>
        <title>Martin Marelius</title>
        <meta name="My personal website" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Header />

      <Footer />
    </div>
  )
}

export default IndexPage

