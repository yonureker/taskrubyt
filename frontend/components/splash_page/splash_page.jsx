import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import SplashHero from './splash_hero';
import Footer from '../footer/footer';

class SplashPage extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className="splash-page">
        <NavBarContainer />
        <SplashHero />
        <Footer />
      </div>
    )
  }
}

export default SplashPage;

