import React, { Component } from 'react'
import { Toaster } from 'react-hot-toast'
import { isMobile } from 'react-device-detect'

import Header from '../components/Header'
import Banner from '../components/Banner'
import Partners from '../components/Partners'
import Multiverse from '../components/Multiverse'
import Coin from '../components/Coin'
import Roadmap from '../components/Roadmap'
import MVSCoin from '../components/MVSCoin'
import Footer from '../components/Footer'
import BackTop from '../components/BackTop'

import AOS from 'aos/dist/aos.js'

class Home extends Component {
  componentDidMount() {
    /*-----------------------------
        animation on Scroll AOS.js
      -----------------------------*/
    AOS.init({
      easing: 'ease-in-out', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      duration: isMobile ? 0 : 0, // values from 0 to 3000, with step 50ms
      disable: 'mobile',
    })
  }

  render() {
    return (
      <div id="wrapper">
        <div id="content">
          {/* <!-- header --> */}
          <Header />
          {/* <!-- main --> */}
          <main id="Home" data-spy="scroll" data-target="#Home" data-offset="0">
            {/* <!-- Banner --> */}
            <Banner />
            {/* <!-- Partners --> */}
            <Partners />
            {/* <!-- Multiverse --> */}
            <Multiverse />
            {/* <!-- Coin --> */}
            <Coin />
            {/* <!-- Roadmap --> */}
            <Roadmap />
            {/* <!-- MVSCoin --> */}
            <MVSCoin />
          </main>
          {/* <!-- footer --> */}
          <Footer />
          {/* <!-- Back to top with progress indicator--> */}
          <BackTop />
          {/* <!-- Toaster --> */}
          <Toaster position="bottom-center" reverseOrder={false} />
        </div>
      </div>
    )
  }
}
export default Home
