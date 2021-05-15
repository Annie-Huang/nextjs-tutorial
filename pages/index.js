import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque
        autem debitis dolor error eum fuga itaque minima sapiente vel.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque
        autem debitis dolor error eum fuga itaque minima sapiente vel.
      </p>
      <Link href='/ninjas'>
        <a>See Ninja Listing</a>
      </Link>
      <Footer />
    </div>
  );
}
