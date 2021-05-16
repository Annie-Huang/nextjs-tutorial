import React from 'react';

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

/*
   Next is going to run this function for every ninja details page that we need to generate
   and it bases that on this paths thing line 14. So if we return 10 objects with 10 different ids
   in this path property, it will run this function (getStaticPaths) essentially 10 times
   so we can make 10 different fetch requests for different items. Now we get access to the parameter we need each time around on a context object
   that we automatically accept as an argument in this function so the id of each item we need to get is going to be attached
   to this context object so const id is equal to context.param.id
 */
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <h1>{ninja.email}</h1>
      <h1>{ninja.website}</h1>
      <h1>{ninja.address.city}</h1>
    </div>
  );
};

export default Details;
