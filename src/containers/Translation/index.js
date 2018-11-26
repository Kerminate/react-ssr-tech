import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getTranslationList } from '../../store/actions/translation'
import styles from './style.less'
import withStyle from '../../withStyle'

class Translation extends Component {

  componentDidMount () {
    if (!this.props.list.length) {
      this.props.getTranslationList()
    }
  }

  getList () {
    const { list } = this.props
    return list.map((item) => <div key={item.id} className={styles.item}>{item.name}</div>)
  }

  render () {
    return this.props.login ?
      <Fragment>
        <Helmet>
          <title>this is kpl's translation page</title>
          <meta charset="utf-8" name='description' content='translation page weclome you' />
        </Helmet>
        <div className={styles.container}>
          { this.getList() }
        </div>
      </Fragment>
    : <Redirect to='/' />
  }
}

const mapStateToProps = (state) => ({
  list: state.translation.translationList,
  login: state.header.login
})

const mapDispatchToProps = (dispatch) => ({
  getTranslationList () {
    dispatch(getTranslationList())
  }
})

const exportTranslation = connect(mapStateToProps, mapDispatchToProps)(withStyle(Translation, styles))

exportTranslation.loadData = (store) => {
  return store.dispatch(getTranslationList())
}

export default exportTranslation