//pkg imp
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { TextInput } from 'belle'
import { Button } from 'belle'
//inner imp
import image from './img.png'
import Canvas from './tempcanvas'

let arrayOfPoints = [
  {
    id: 1,
    x: 1,
    y: 1,
    r: 1,
    inside: true
  },
  {
    id: 2,
    x: 2,
    y: 2,
    r: 2,
    inside: false
  },
  {
    id: 3,
    x: 3,
    y: 3,
    r: 3,
    inside: true
  },
  {
    id: 4,
    x: 4,
    y: 4,
    r: 4,
    inside: false
  }
]

class App extends Component {

  constructor(props) {
    super(props)
    this.addPoint = this.props.addPoint
    this.isLoggedIn = this.props.isLoggedIn

    this.state={
      x: 0,
      y: 0,
      radius: 0,
      canI: false
    }
  }

  ComponentWillMount() {
    this.pointArray = this.props.pointArray
  }

  onClickCreateAjax(id, x, y, r) {
    // данные для ajax нужно брать из this.state
    // как ajax прошел - добавить в arrayOfPoints
  }


  render() {
    const isLoggedIn = this.isLoggedIn
    //это для коллбека на кнопку submit
    const x = this.state.x
    const y = this.state.y
    const r = this.state.r
    const canI = this.state.canI

    const _this = this // привязка контекста

    return (
      <div>
          {(isLoggedIn)? (
            <div className="main-block">
              <Link to="/">
                  <button>На начальную страницу</button>
              </Link>
              <h1>PIP LAB3 VAR. 8224</h1>

              {/*ЗДЕСЬ ВВОДИМ ДАННЫЕ*/}
              <div>
                  X <TextInput onChange={(event) => _this.setState({x: Number(event.target.value)}, canI: false)} style={{ maxWidth: 100 }} /><br/>
                Y <TextInput onChange={(event) => _this.setState({y: Number(event.target.value)}, canI: false)} style={{ maxWidth: 100 }} /><br/>

                  <span></span>
                  <input
                      type="range"
                      min="2"
                      max="5"
                      step="0.01"
                      onChange={(event) => this.setState({r: event.target.value})}
                  />{"radius= " + r}<br/>
                {/*СЮДА  AJAX () => onClickCreateAjax(x, y, r); пока тут алерт x*/}

                <button onClick={() => _this.setState({canI: true})}>
                  submit
                </button>
              </div>
              <div className="dashed-border">
                  <Canvas
                      x = {(canI)? _this.state.x : 0}
                      y = {(canI)? _this.state.y : 0}
                  />
              </div>
          </div>) : (<h1>ACCESS DENIED</h1>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('newstate', state.isLoggedIn)
  return {
    isLoggedIn: state.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPoint: ({x, y, radius}) => {
      dispatch({
          type: "addPoint",
          x,
          y,
          radius
    })}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
