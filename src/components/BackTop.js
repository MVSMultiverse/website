import React, { Component } from 'react'
import $ from 'jquery/'
import jQuery from 'jquery'

class BackTop extends Component {
  componentDidMount() {
    $(function () {
      /*-----------------------------
      Back to top with progress indicator
    -----------------------------*/
      var progressPath = document.querySelector('.prgoress_indicator path')
      var pathLength = progressPath.getTotalLength()
      progressPath.style.transition = progressPath.style.WebkitTransition = 'none'
      progressPath.style.strokeDasharray = pathLength + ' ' + pathLength
      progressPath.style.strokeDashoffset = pathLength
      progressPath.getBoundingClientRect()
      progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear'
      var updateProgress = function () {
        var scroll = $(window).scrollTop()
        var height = $(document).height() - $(window).height()
        var progress = pathLength - (scroll * pathLength) / height
        progressPath.style.strokeDashoffset = progress
      }
      updateProgress()
      $(window).on('scroll', updateProgress)
      var offset = 250
      var duration = 550
      $(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
          jQuery('.prgoress_indicator').addClass('active-progress')
        } else {
          jQuery('.prgoress_indicator').removeClass('active-progress')
        }
      })
      jQuery('.prgoress_indicator').on('click', function (event) {
        event.preventDefault()
        jQuery('html, body').animate({ scrollTop: 0 }, duration)
        return false
      })
    })
  }

  render() {
    return (
      <div className="prgoress_indicator">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    )
  }
}

export default BackTop
