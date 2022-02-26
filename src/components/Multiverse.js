import React, { Component } from 'react'
import { isMobile } from 'react-device-detect'

import M1 from '../assets/img/1.png'
import M2 from '../assets/img/2.png'
import M3 from '../assets/img/3.png'

class Multiverse extends Component {
  render() {
    return (
      <section id="Multiverse" className="multiverse_section three_column padding-t-12">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8">
              <div className="sections_title">
                <h2>Multiverse Ecosystem</h2>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4 col-lg-3 item">
              <div className="items_serv sevice_block" data-aos="fade-up" data-aos-delay="0">
                <div className="icon--top">
                  <img className="floating-simple2" src={M1} alt="" />
                </div>
                <div className="txt">
                  <h3>Multiverse Coin</h3>
                  <p>A coin connecting all metaverses provides a decentralized way to store, account, and exchange values.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 item mx-auto">
              <div className="items_serv sevice_block" data-aos="fade-up" data-aos-delay={isMobile ? '50' : '100'}>
                <div className="icon--top">
                  <img className="floating-simple2" src={M2} alt="" />
                </div>
                <div className="txt">
                  <h3>Multiverse NFT</h3>
                  <p>Multiverse NFT is the fundamental resource in the multiverse and the resource to mine the multiverse coin.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 item">
              <div className="items_serv sevice_block" data-aos="fade-up" data-aos-delay={isMobile ? '100' : '200'}>
                <div className="icon--top">
                  <img className="floating-simple2" src={M3} alt="" />
                </div>
                <div className="txt">
                  <h3>Traverses all Metaverses</h3>
                  <p>
                    Users can exchange the MVS for tokens when they participate in specific metaverses and change their tokens back to the
                    coins instantly to lock the profit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Multiverse
