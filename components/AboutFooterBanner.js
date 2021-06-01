import React from 'react';

const AboutFooterBanner = (props) => {
  const localStyle = (backgroundColor) =>  <style jsx>{`
        div {
          height: 20px;
          background: ${backgroundColor};
          color: #999;
          display: inline-block;
          font-size: 1em;
        }
        //.about-footer-banner {
        //  height: 20px;
        //  background: red;
        //  color: #999;
        //  display: inline-block;
        //  font-size: 1em;
        //}
     `}</style>

  return (
    // <AboutFooterBannerWrapper backgroundColor={props.backgroundColor}>
    <div className='about-footer-banner'>
      annieannie
      {/*{localStyle(props.backgroundColor)}*/}

      <style jsx>{`
        div {
          height: 20px;
          background: ${props.backgroundColor};
          color: #999;
          display: inline-block;
          display: grid;
          font-size: 1em;
          //&:hover {
          //  background: purple;
          //}
        }
        div:hover {
         background: purple;
        }
     `}</style>
    </div>
  );
};

/*const AboutFooterBannerWrapper = styled.div(props)`
  height: 20px;
  background: ${props => props.backgroundColor};
  color: #999;
  display: inline-block;
  font-size: 1em;
`*/

export default AboutFooterBanner;