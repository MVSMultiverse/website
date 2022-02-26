import React, { Component } from 'react'
import $ from 'jquery/src/jquery'

import BinanceChain from '../assets/img/binance-chain.png'
import BinanceNft from '../assets/img/binance-nft.png'
import Coingecko from '../assets/img/coingecko.png'
import Coinmarketcap from '../assets/img/coinmarketcap.png'
import Dexquru from '../assets/img/dex-quru.png'
import Pancakeswap from '../assets/img/pancakeswap.png'
import Tokenpocket from '../assets/img/token-pocket.png'
import Trustwallet from '../assets/img/trust-wallet.png'
import CertikLogo from '../assets/img/certik.png'
import Cryptoonliner from '../assets/img/crypto-onliner.png'
import BtokLogo from '../assets/img/btok.png'

class Partners extends Component {
  componentDidMount() {
    $(function () {
      $('.bxslider').bxSlider({
        minSlides: 1,
        maxSlides: 5,
        slideWidth: 300,
        slideMargin: 30,
        ticker: true,
        speed: 20000,
      })
    })
  }

  render() {
    return (
      <section className="partners_section padding-t-5 text-center">
        <h3>Trusted by partners across the world</h3>
        <div className="row justify-content-md-center" style={{ margin: 0 }}>
          <div className="col-md-12">
            <div className="wrapper_logos">
              <div className="items bxslider">
                <a className="item-client" href="/#" rel="noopener noreferrer">
                  <img src={BinanceChain} alt="" />
                </a>
                <a className="item-client" href="/#" rel="noopener noreferrer">
                  <img src={BinanceNft} alt="" />
                </a>
                <a className="item-client" href="/#" rel="noopener noreferrer">
                  <img src={CertikLogo} alt="" />
                </a>
                <a className="item-client" href="/#" rel="noopener noreferrer">
                  <img src={Coingecko} alt="" />
                </a>
                <a className="item-client" href="/#" rel="noopener noreferrer">
                  <img src={Coinmarketcap} alt="" />
                </a>
                <a className="item-client" href="/#" rel="noopener noreferrer">
                  <img src={Dexquru} alt="" />
                </a>
                <a className="item-client" href="/#" rel="noopener noreferrer">
                  <img src={Pancakeswap} alt="" />
                </a>
                <a className="item-client" href="/#" rel="noopener noreferrer">
                  <img src={Cryptoonliner} alt="" />
                </a>
                <a className="item-client" href="/#" rel="noopener noreferrer">
                  <img src={Tokenpocket} alt="" />
                </a>
                <a className="item-client" href="/#" rel="noopener noreferrer">
                  <img src={Trustwallet} alt="" />
                </a>
                <a className="item-client" href="/#" rel="noopener noreferrer">
                  <img src={BtokLogo} alt="" />
                </a>
              </div>
              <div className="logos_masks"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Partners
