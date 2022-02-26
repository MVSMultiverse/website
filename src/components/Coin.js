import React, { Component } from 'react'
import { WHITE_PAPER_URL, CERTIK_URL } from '../config'
import CertikAuditedLogo from '../assets/img/certik-audited.png'
class Multiverse extends Component {
  render() {
    return (
      <section id="Coin" className="multiverse_section section_tokennomics padding-t-12">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-8">
              <div className="sections_title margin-b-6">
                <h2>Multiverse Philosophy</h2>
              </div>
              <div className="certik-audited">
                <a href={CERTIK_URL} target="_blank" rel="noopener noreferrer">
                  <img src={CertikAuditedLogo} alt="" />
                </a>
              </div>
              <div className="whiter-paper-btn">
                <a href={WHITE_PAPER_URL} target="_blank" rel="noopener noreferrer" className="btn btn_more">
                  <div className="media">
                    <div className="txt">
                      <span>More on the</span>
                      <p>White Paper</p>
                    </div>
                    <div className="media-body my-auto">
                      <div className="icoon">
                        <i className="tio document_text_outlined"></i>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-7 mt-5 mt-lg-0">
              <div className="row">
                <div className="col-md-12 col-lg-12 item__desc">
                  <div className="items_serv sevice_block" data-aos="fade-up" data-aos-delay="0">
                    <div className="txt">
                      <h3>Tokenomics 25% Liquidity / 75% Mining</h3>
                      <p>
                        The max supply of the multiverse coin is 20 billion. Five billion coins are locked in liquidity pools as the initial
                        circulation. Initial liquidity is added 100 percent; there is no presale, private unlocks, or dev holdings. The
                        remaining 15 billion coins are locked in the mining pool as rewards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-12 item__desc">
                  <div className="items_serv sevice_block" data-aos="fade-up" data-aos-delay="0">
                    <div className="txt">
                      <h3>Mining</h3>
                      <p>
                        By staking multiverse NFTs, multiverse coins are mined as a reward. Initially, each block releases 120 coins as a
                        reward, then the reward is reduced by half every 42,048,000 blocks (approximately 4 years).
                      </p>
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

export default Multiverse
