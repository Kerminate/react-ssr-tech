import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { getHomeList } from '../../store/actions/home'
import styles from './style.less'
import withStyle from '../../withStyle'

class Home extends Component {

  componentDidMount () {
    if (!this.props.list.length) {
      this.props.getHomeList()
    }
  }

  getList () {
    const { list } = this.props
    return list.map((item) => <div className={styles.item} key={item.id}>{item.title}</div>)
  }

  render () {
    return (
      <Fragment>
        <Helmet>
          <title>this is kpl's ssr demo</title>
          <meta charset="utf-8" name='description' content='hello hahah' />
        </Helmet>
        <div className={styles.container}>
          {this.getList()}
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.home.newsList
})

const mapDispatchToProps = (dispatch) => ({
  getHomeList () {
    dispatch(getHomeList())
  }
})

const exportHome = connect(mapStateToProps, mapDispatchToProps)(withStyle(Home, styles))

exportHome.loadData = (store) => {
  // 服务端用来获取数据
  return store.dispatch(getHomeList())
}

export default exportHome