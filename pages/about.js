import React from 'react';
import Head from 'next/head';
import AboutFooterBanner from '../components/AboutFooterBanner';

const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque
          autem debitis dolor error eum fuga itaque minima sapiente vel.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque
          autem debitis dolor error eum fuga itaque minima sapiente vel.
        </p>
        <AboutFooterBanner backgroundColor="yellow"/>
      </div>
    </>
  );
};

export default About;
