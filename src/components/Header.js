import React, { Component } from 'react'
import LogoBrandImage from '../assets/img/logo-brand.png'
import $ from 'jquery/'
import toast from 'react-hot-toast'
import { BUY_NFT_URL, NFT_POOL_URL, DAPP_URL, MARKET_URL } from '../config'

class Header extends Component {
  componentDidMount() {
    $(function () {
      /*-----------------------------
       Close the menu when clicking on any link
     -----------------------------*/
      $('.header-nav-center .nav-link').on('click', function (e) {
        $('.header-nav-center .navbar-collapse').collapse('hide')
        $('.header-nav-center .menu.ripplemenu').removeClass('active')
      })

      /*-----------------------------
      Fixed Navigation
    -----------------------------*/
      if ($('header').offset().top > 50) {
        $('body').addClass('fixed-header')
      } else {
        $('body').removeClass('fixed-header')
      }

      /* Scroll Function */
      $(window).on('scroll', function () {
        /* Fixed Navigation */
        if ($('header').offset().top > 50) {
          $('body').addClass('fixed-header')
        } else {
          $('body').removeClass('fixed-header')
        }
      })

      /*-----------------------------
      Effect on Menu for Mobile
    -----------------------------*/
      document.querySelectorAll('.menu').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          btn.classList.toggle('active')
        })
      })

      /*-----------------------------
      Smooth Scrollspy to (For Navbar)
    -----------------------------*/

      // Add scrollspy to <body>
      $('body').scrollspy({ target: '.navbar', offset: 50 })

      // Add smooth scrolling on all links inside the navbar
      $('#myNavbar a').on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== '') {
          // Prevent default anchor click behavior
          event.preventDefault()

          // Store hash
          var hash = this.hash

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate(
            {
              scrollTop: $(hash).offset().top,
            },
            800,
            function () {
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash
            },
          )
        } // End if
      })

      /*-----------------------------
     Navbar hacks
   -----------------------------*/
      $('.navbar-toggler').on('click', function () {
        var header_nav = $('.header-nav-center')
        if (header_nav.hasClass('no_blur')) {
          header_nav.removeClass('no_blur')
        } else header_nav.addClass('no_blur')
      })
    })
  }

  toastTips = () => {
    var header_nav = $('.header-nav-center')
    if (header_nav.hasClass('no_blur')) {
      header_nav.removeClass('no_blur')
    } else header_nav.addClass('no_blur')
    toast('The Multiverse Global Sale starts at 00:00, Dec 24, 2021 PST (UTC-8) Christmas Eve.', {
      icon: '🎄',
    })
  }

  render() {
    return (
      <header id="myNavbar" className="header-nav-center no_blur header-black active-blue">
        <div className="container">
          {/* <!-- Start Navbar --> */}
          <nav className="navbar navbar-expand-lg navbar-light px-sm-0">
            <a className="navbar-brand" href="/">
              <img className="logo" src={LogoBrandImage} alt="logo" />
            </a>

            <button
              className="navbar-toggler menu ripplemenu"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg viewBox="0 0 64 48">
                <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
                <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
                <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
              </svg>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto nav-pills">
                <li className="nav-item">
                  <a className="nav-link" href="#Home">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Multiverse">
                    MULTIVERSE
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Coin">
                    COIN
                  </a>
                </li>
                <li className="nav-item">
                  <a href={BUY_NFT_URL} target="_blank" rel="noopener noreferrer" className="nav-link">
                    NFT
                  </a>
                </li>
                <li className="nav-item">
                  <a href={NFT_POOL_URL} target="_blank" rel="noopener noreferrer" className="nav-link">
                    MINE
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Roadmap">
                    ROADMAP
                  </a>
                </li>
                <li className="nav-item">
                  <a href={MARKET_URL} target="_blank" rel="noopener noreferrer" className="nav-link">
                    MARKET
                  </a>
                </li>
              </ul>
              <div className="nav_account">
                <a
                  href={DAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn_sm_primary filter-blur c-white border-0 rounded-8"
                >
                  ENTER APP
                </a>
              </div>
            </div>
          </nav>
          {/* <!-- End Navbar --> */}
        </div>
      </header>
    )
  }
}

export default Header
