import Link from 'next/link'
import React from "react";
import { Footer, Header, Navbar, Display } from '../components';

const IndexPage = () => (
  <div className='relative bg-gradient-to-br from-rose-400 to-orange-300'>

    <div>
      <Navbar />
      <Header />
    </div>

    <Display />
    <Footer />
  </div>

)

export default IndexPage

