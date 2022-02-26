import React, { Component } from 'react'
import MLogo from '../assets/img/m-logo.png'

class Footer extends Component {
  componentDidMount() {
    /*-----------------------------
      hover Button (letter Effect)
    -----------------------------*/
    document.querySelectorAll('.effect-letter').forEach((button) => {
      let div = document.createElement('div'),
        letters = button.textContent.trim().split('')

      function elements(letter, index, array) {
        let element = document.createElement('span'),
          part = index >= array.length / 2 ? -1 : 1,
          position = index >= array.length / 2 ? array.length / 2 - index + (array.length / 2 - 1) : index,
          move = position / (array.length / 2),
          rotate = 1 - move

        element.innerHTML = !letter.trim() ? '&nbsp;' : letter
        element.style.setProperty('--move', move)
        element.style.setProperty('--rotate', rotate)
        element.style.setProperty('--part', part)

        div.appendChild(element)
      }

      letters.forEach(elements)

      button.innerHTML = div.outerHTML

      button.addEventListener('mouseenter', (e) => {
        if (!button.classList.contains('out')) {
          button.classList.add('in')
        }
      })

      button.addEventListener('mouseleave', (e) => {
        if (button.classList.contains('in')) {
          button.classList.add('out')
          setTimeout(() => button.classList.remove('in', 'out'), 950)
        }
      })
    })
  }

  render() {
    return (
      <footer className="contact_footer margin-t-12 padding-b-8">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="email_logo">
                <div className="media">
                  <a href="/" className="brand_logo my-auto">
                    <img src={MLogo} alt="" />
                  </a>
                  <div className="media-body my-auto">
                    <div className="txt">
                      <span>Need help? Contact us at</span>
                      <a className="effect-letter" href="mailto:info@mvscoin.org">
                        {' '}
                        info@mvscoin.org{' '}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ml-auto text-lg-right mt-auto">
              <a
                href="https://twitter.com/MVSmultiverse"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social c-white color-twitter border-0 mb-0 mr-2"
              >
                <i className="tio twitter"></i>
              </a>
              <a
                href="https://medium.com/@MVSmultiverse"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social c-white color-medium border-0 mb-0 mr-2"
              >
                <i className="tio medium"></i>
              </a>
              <a
                href="https://t.me/MultiverseGlobal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social c-white color-telegram border-0 mb-0 mr-2"
              >
                <i className="tio telegram"></i>
              </a>
              <a
                href="https://github.com/MVSMultiverse"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social c-white color-github border-0 mb-0 mr-2"
              >
                <i className="tio github"></i>
              </a>
              <a
                href="https://docs.mvscoin.org"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social c-white color-gitbook border-0 mb-0 mr-2"
              >
                <i className="tio book_outlined"></i>
              </a>
            </div>
          </div>
          <div className="dividar"></div>
          <div className="row">
            <div className="col-md-5 col-lg-4">
              <div className="copyright">
                <p>
                  © 2021{' '}
                  <a href="/" target="_blank">
                    Multiverse.
                  </a>{' '}
                  All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <ul className="nav justify-content-md-end">
                <li className="nav-item">
                  <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://docs.mvscoin.org/support/contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://mvscoin.org/whitepaper.pdf">
                    White Paper
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://www.certik.com/projects/multiverse">
                    Audit Report
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://coinmarketcap.com/currencies/multiverse-token"
                  >
                    CoinMarketCap
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.coingecko.com/en/coins/mvs-multiverse"
                  >
                    CoinGecko
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
