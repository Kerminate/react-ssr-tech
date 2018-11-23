import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login, logout } from '../store/actions/header'

class Header extends Component {
  render () {
    const { login, handleLogin, handleLogout } = this.props
    return (
      <div>
        <Link to='/'>首页</Link>
        <br />
        {
          login
          ? <Fragment>
            <Link to='/translation'>翻译列表</Link>
            <br />
            <div to='/login' onClick={handleLogout}>退出</div>
          </Fragment>
          : <div onClick={handleLogin}>登录</div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  login: state.header.login
})

const mapDispatchToProps = (dispatch) => ({
  handleLogin () {
    dispatch(login())
  },
  handleLogout () {
    dispatch(logout())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)