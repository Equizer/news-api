import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Badge extends Component {
  render() {
    let {badgeText} = this.props
    return (
      <button type="button" className={`btn btn-primary position-relative mx-3 badge-btn`}>
      {badgeText}
      <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
        <span className="visually-hidden">New Alerts</span>
      </span>
    </button>
    )
  }
}
