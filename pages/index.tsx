import Link from 'next/link'
import React from "react";
import { Footer, Header, Navbar, Display } from '../components';

const IndexPage = () => (
  <div className='bg-gradient-to-r from-sky-400 to-indigo-900 min-h-screen'>

    <div>
      <Navbar />
      <Header />
    </div>

    <Display />
    <Footer />
  </div>

)

export default IndexPage

