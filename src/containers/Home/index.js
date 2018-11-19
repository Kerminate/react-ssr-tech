import React from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header'

const Home = (props) => {
  return (
    <div>
      <Header />
      <div>This is {props.name}</div>
      <button onClick={() => window.alert('click!')}>click</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  name: state.name
})

export default connect(mapStateToProps, null)(Home)