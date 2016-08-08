import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import classNames from 'classnames'
import styles from '../resources/bootstrap/css/bootstrap.min.css'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
      <div className={classNames(styles['panel'],styles['panel-default'])}>
        <p>
        {'This is my App!'}
        </p>
      </div>
    )
  }
}

App.propTypes = {
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(App)
