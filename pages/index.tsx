import Link from 'next/link'
import Head from 'next/head';
import React, { useState } from "react";
import { Footer, Header, Navbar, Display, ContactForm, ProjectsPreview, Introduction, BlogDisplay, ContactInfo, ContactDisplay } from '../components';

/**
 * @returns jsx of the home page
 */

const IndexPage = () => {
  return (


    <div className='max-w-screen'>
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

        <div className='flex bg-sky-900 pb-20 pt-10 px-40 place-content-center gap-20'>
          <ContactDisplay />
        </div>

        <Footer />
      </div>


    </div>
  )
}

export default IndexPage

