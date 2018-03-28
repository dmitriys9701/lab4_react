//pkg imp
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { TextInput } from 'belle'
import { Button } from 'belle'
//inner imp
//  styles
import image from './img.png'

//
import UserInput from './UserInput'


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

    this.isLoggedIn = this.props.isLoggedIn

    this.state={
      x: 0,
      y: 0,
      radius: 0
    }
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
                  X <TextInput onChange={(event) => this.setState({x: event.target.value})} style={{ maxWidth: 100 }} /><br/>
                  Y <TextInput onChange={(event) => this.setState({y: event.target.value})} style={{ maxWidth: 100 }} /><br/>

                  <span></span>
                  <input
                      type="range"
                      min="2"
                      max="5"
                      step="0.01"
                      onChange={(event) => this.setState({r: event.target.value})}
                  />{"radius= " + r}<br/>
                {/*СЮДА  AJAX () => onClickCreateAjax(x, y, r); пока тут алерт x*/}

                <CanvasComponent/>

                <Button>
                submit
                </Button>
              </div>
              {/**/}

              {
              }
              {/**/}

              <p>X Y INSIDE</p>
              {arrayOfPoints.map(point => (
                <p>{point.x + " " + point.y + " " + point.r + " " + point.inside}</p>
              ))}
          </div>) : (<h1>ACCESS DENIED</h1>)}
      </div>
    )
  }
}

class CanvasComponent extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    const unit = 250.0 / 6;
    ctx.fillRect(0,0, 100, 100);
    // const slider = $('#form\\:radius-slider');
    // const check_btn = $('#form\\:check');
    // const recheck_btn = $('#form\\:recheck');
    
    
    function x_to_canvas(normal) {
        return 250 + normal * unit;
    }

    function y_to_canvas(normal) {
        return 250 - normal * unit;
    }

    function x_to_normal(canvas) {
        return (canvas - 250) / unit;
    }

    function y_to_normal(canvas) {
        return (250 - canvas) / unit;
    }

    function render_basis() {
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, 500, 500);

        const radius = 5;
        ctx.fillStyle = '#00f';

        ctx.beginPath();
        ctx.moveTo(250, 250);
        ctx.lineTo(x_to_canvas(radius/2), 250);
        ctx.lineTo(250, y_to_canvas(-radius));
        ctx.lineTo(250, 250);
        ctx.lineTo(x_to_canvas(-radius), 250);
        ctx.lineTo(x_to_canvas(-radius), y_to_canvas(-radius));
        ctx.lineTo(250, y_to_canvas(-radius));
        ctx.lineTo(250, 250);
        ctx.arc(250, 250, radius * unit / 2, Math.PI, 1.5 *Math.PI, false);
        ctx.fill();

        ctx.strokeStyle = '#000';

        ctx.beginPath();
        ctx.moveTo(0, 250);
        ctx.lineTo(500, 250);
        ctx.stroke();

        var i;
        for(i = -5; 5 >= i; i++) {
            const cur_x = x_to_canvas(i);

            ctx.beginPath();
            ctx.moveTo(cur_x, 245);
            ctx.lineTo(cur_x, 255);
            ctx.stroke();
        }

        ctx.beginPath();
        ctx.moveTo(250, 0);
        ctx.lineTo(250, 500);
        ctx.stroke();

        for(i = -5; 5 >= i; i++) {
            const cur_y = y_to_canvas(i);

            ctx.beginPath();
            ctx.moveTo(245, cur_y);
            ctx.lineTo(255, cur_y);
            ctx.stroke();
        }
    }
    render_basis()
    
  }
  render() {
    return (
        <canvas ref="canvas" width={500} height={500}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
