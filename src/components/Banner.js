import React, { Component } from 'react'
import { isMobile } from 'react-device-detect'
import { MVS_TOKEN_ADDRESS, BUY_NFT_URL } from '../config'
import VideoPC from '../assets/img/video.mp4'
import PosterPC from '../assets/img/poster.png'

class Banner extends Component {
  render() {
    return (
      <section className="banner_hero">
        {!isMobile ? (
          <div className="hero_video_wrapper">
            <div className="hero_video">
              <video poster={PosterPC} loop autoPlay muted playsInline>
                <source src={VideoPC} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ) : (
          <div className="hero_video_wrapper_m"></div>
        )}
        <div className="container" style={{ position: 'absolute' }}>
          <div className="row flex-column justify-content-center align-items-center text-center">
            <div className="col-md-12 col-lg-9">
              <h1>MULTIVERSE</h1>
              <p>A Decentralized Currency in Multiverse</p>
              <p>One Coin Traverses all Metaverses</p>
            </div>
            <div className="button_row padding-t-3">
              <a
                href={`https://pancakeswap.finance/swap?outputCurrency=${MVS_TOKEN_ADDRESS}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn_with_ico"
              >
                <span>Buy MVS</span>
                <i className="tio dollar_outlined"></i>
              </a>
              <a href={BUY_NFT_URL} target="_blank" rel="noopener noreferrer" className="btn nft_btn">
                <span>Buy NFT</span>
                <i className="tio block"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Banner
