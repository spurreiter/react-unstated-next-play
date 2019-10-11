import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError (error) {
    return {
      hasError: true,
      error
    }
  }

  componentDidCatch (error, errorInfo) {
    console.log(error, errorInfo)
  }

  render () {
    if (this.state.hasError) {
      return (
        <>
          <h2> Something went wrong. </h2>
          <p><strong>Error:</strong> {this.state.error.message}</p>
        </>
      )
    }

    return this.props.children
  }
}
