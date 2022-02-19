import Link from 'next/link'
import React, { useState } from "react";
import { Footer, Header, Navbar, Display } from '../components';
import Modal from 'react-modal';

const IndexPage = () => {
  return (

    <div className='relative min-h-screen'>

      <div>
        <Navbar />
        <Header />
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage

