import React, { Component } from 'react'
import { isMobile } from 'react-device-detect'

import M4 from '../assets/img/4.png'
import M5 from '../assets/img/5.png'
import M6 from '../assets/img/6.png'

class Roadmap extends Component {
  render() {
    return (
      <section id="Roadmap" className="multiverse_section three_column padding-t-12">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="sections_title">
                <h2>Multiverse Roadmap</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-lg-3 item">
              <div className="items_serv sevice_block" data-aos="fade-up" data-aos-delay="0">
                <div className="icon--top">
                  <img className="floating-simple" src={M4} alt="" />
                </div>
                <div className="txt">
                  <h3>Multiverse Coin and NFT</h3>
                  <div className="content_txt stars_row">
                    <div>
                      <i className="tio star"></i>
                      <p>Launch of the coin and NFT</p>
                    </div>
                    <div>
                      <i className="tio star"></i>
                      <p>Development of the mining and market</p>
                    </div>
                    <div>
                      <i className="tio star"></i>
                      <p>DApp entrance and websites</p>
                    </div>
                    <div>
                      <i className="tio star"></i>
                      <p>Marketing push to spread multiverse ideology</p>
                    </div>
                    <div>
                      <i className="tio star"></i>
                      <p>Multiverse DAO and community</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 item mx-auto">
              <div className="items_serv sevice_block" data-aos="fade-up" data-aos-delay={isMobile ? '50' : '100'}>
                <div className="icon--top">
                  <img className="floating-simple" src={M5} alt="" />
                </div>
                <div className="txt">
                  <h3>Multiverse Bridge/Swap</h3>
                  <div className="content_txt stars_row_wait">
                    <div>
                      <i className="tio star" style={{ color: '#ffc329' }}></i>
                      <p>Third-party audit</p>
                    </div>
                    <div>
                      <i className="tio checkmark_circle_outlined"></i>
                      <p>Launch of the MultiverseSwap</p>
                    </div>
                    <div>
                      <i className="tio checkmark_circle_outlined"></i>
                      <p>Development of the Multiverse Bridge: Exchange, liquidity, farm, pool, vault, and bridge</p>
                    </div>
                    <div>
                      <i className="tio star" style={{ color: '#ffc329' }}></i>
                      <p>Multiverse NFT museum</p>
                    </div>
                    <div>
                      <i className="tio checkmark_circle_outlined"></i>
                      <p>Influencers marketing push</p>
                    </div>
                    <div>
                      <i className="tio checkmark_circle_outlined"></i>
                      <p>Listing on major exchanges</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 item">
              <div className="items_serv sevice_block" data-aos="fade-up" data-aos-delay={isMobile ? '100' : '200'}>
                <div className="icon--top">
                  <img className="floating-simple" src={M6} alt="" />
                </div>
                <div className="txt">
                  <h3>Multiverse Ecosystem</h3>
                  <div className="content_txt stars_row_wait">
                    <div>
                      <i className="tio w checkmark_circle_outlined"></i>
                      <p>Launch of the Multiverse Investment Fund</p>
                    </div>
                    <div>
                      <i className="tio checkmark_circle_outlined"></i>
                      <p>Investment and development on more metaverses</p>
                    </div>
                    <div>
                      <i className="tio checkmark_circle_outlined"></i>
                      <p>Expansion of multiverse to art, finance, entertainment, and technology</p>
                    </div>
                    <div>
                      <i className="tio checkmark_circle_outlined"></i>
                      <p>1T market cap</p>
                    </div>
                    <div>
                      <i className="tio checkmark_circle_outlined"></i>
                      <p>Proof of NFT Stake</p>
                    </div>
                    <div>
                      <i className="tio checkmark_circle_outlined"></i>
                      <p>Multiverse ETF and trust</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Roadmap
