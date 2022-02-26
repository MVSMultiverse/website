import React, { Component } from 'react'
import { isMobile } from 'react-device-detect'

import M3D from '../assets/img/m-3d.png'

class MVSCoin extends Component {
  render() {
    return (
      <section className="mvscoin_section padding-t-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="sections_title">
                <h2>Explore Now!</h2>
              </div>
              <div className="coin_wrapper" data-aos="fade-up" data-aos-delay={isMobile ? '50' : '100'}>
                <img className="floating-simple2" src={M3D} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default MVSCoin
