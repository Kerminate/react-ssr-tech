import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login, logout } from '../../store/actions/header'
import styles from './style.less'
import withStyle from '../../withStyle'

class Header extends Component {

  render () {
    const { login, handleLogin, handleLogout } = this.props
    return (
      <div className={styles.container}>
        <Link to='/' className={styles.item}>首页</Link>
        {
          login
          ? <Fragment>
            <Link to='/translation' className={styles.item}>翻译列表</Link>
            <div onClick={handleLogout} className={styles.item}>退出</div>
          </Fragment>
          : <div onClick={handleLogin} className={styles.item}>登录</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyle(Header, styles))