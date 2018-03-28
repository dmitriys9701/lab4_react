//pkg imp
import React, { Component } from 'react'
import { TextInput } from 'belle'
import { Button } from 'belle'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
//inner imp

//

class LoginPage extends Component {

  constructor(props) {
      super(props)

      this.LoginAttempt = this.props.LoginAttempt

      this.state={
        username: '',
        password: '',
        isLoggedIn: this.props.isLoggedIn
      }
    }

  onChangeUsername(value) {
    this.setState({
      username: value
    })
  }

  onChangePassword(value) {
    this.setState({
      password: value
    })
  }

  render() {
    const username = this.state.username
    const password = this.state.password
    return (
      <div className="login_wrapper">
          <h1>ШЕСТАКОВ ДМИТРИЙ ВАЛЕНТИНОВИЧ</h1>
          <h2>P3218// ВАРИАНТ 98451</h2>
          <TextInput
              value={this.state.username}
              style={{ maxWidth: 300 }}
              placeholder="username"
              onChange={(event) => this.onChangeUsername(event.target.value)}
          />
          <TextInput
              value={this.state.password}
              style={{ maxWidth: 300 }}
              placeholder="password"
              onChange={(event) => this.onChangePassword(event.target.value)}
          />
        <Button
          onClick={() => this.LoginAttempt({username, password})}
          style={{
            marginRight: 10,
            color: '#222',
            border: '1px solid #222',
            borderBottom: '1px solid #222',
            borderRadius: 2,
            background: '#fff',
              }}
              hoverStyle={{
            border: '1px solid red',
            borderBottom: '1px solid red',
            color: '#red',
            background: '#fff',
              }}
              focusStyle={{
            border: '1px solid red',
            borderBottom: '1px solid red',
            color: '#red',
            background: '#fff',
            boxShadow: 'red 0px 0px 5px',
              }}
              activeStyle={{
            border: '1px solid red',
            borderTop: '1px solid red',
            color: '#000',
            background: '#fff',
          }}
        >
            LOG IN
        </Button>

        {(!this.props.isLoggedIn)? '' : (
          <Link to="/app">
              <Button>go to app</Button>
          </Link>
        )}
      </div>
    )
  }
}


const asyncApiCall = async () => {
    const response = await fetch('https://api.ipify.org?format=json')
    return response
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    LoginAttempt: ({username = 'a', password = 'a'}) => {
      fetch('https://api.ipify.org?format=json').then(data => dispatch({ type: 'loginAttempt', data: Boolean(data) }))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
