import Link from 'next/link'
import Head from 'next/head';
import React, { useState } from "react";
import { Footer, Header, Navbar, Display, ContactForm, ProjectsPreview, Introduction, BlogDisplay } from '../components';

/**
 * @returns jsx of the home page
 */

const IndexPage = () => {
  return (


    <>
      <Head>
        <title>Martin Marelius</title>
        <meta name="My personal website" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className='flex flex-col'> 
        <Navbar />
        <Header />
        <Introduction />
        <ProjectsPreview />
        <BlogDisplay />
        <ContactForm />
        <Footer />
      </div>


    </>
  )
}

export default IndexPage

