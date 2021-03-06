import React from 'react'
import { Section } from '../../layouts/section'
import { gradient } from '../../../design'

import { Discord } from '../../atoms/icons/discord'
import { Twitter } from '../../atoms/icons/twitter'
import { Medium } from '../../atoms/icons/medium'

import './countdownSection.css'

export const CountdownSection = React.forwardRef((props, ref) => {
  return (
    <Section ref={ref} background={gradient.greyBlack}>
      <div className="countdown-container">
        <div className="background-circle bg-circle--md"></div>
        <div className="background-circle bg-circle--md-outer"></div>
        <div className="background-circle bg-circle--lg"></div>
        <div className="background-circle bg-circle--lg-outer"></div>

        <div className="icons">
          <button className="icons__button btn-round">
            <Discord />
          </button>
          <button className="icons__button btn-square">
            <Twitter />
          </button>
          <button className="icons__button btn-transparent">
            <Medium />
          </button>
        </div>

        <div className="countdown-circle"></div>

        <div className="header">
          <h3 className="header__top">Defi 3.0</h3>
          <h3 className="header__bottom">begins here</h3>
        </div>

        <div className="countdown-timer">
          <h2 className="countdown-timer__heading">Countdown Timer</h2>

          <div className="countdown-timer__clock">
            <div className="clock__row">
              <div className="clock__row--square">3</div>
              <div className="clock__row--square">3</div>
            </div>
            <div className="clock__row">
              <div className="clock__row--square">1</div>
              <div className="clock__row--square">1</div>
            </div>
            <div className="clock__row">
              <div className="clock__row--square">4</div>
              <div className="clock__row--square">4</div>
            </div>
          </div>
        </div>


      </div>
    </Section>
  )
})