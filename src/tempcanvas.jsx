import React, { Component } from 'react'
import { connect } from 'react-redux'

class CanvasComponent extends Component {

    constructor(props) {
      super(props)
    }

    componentDidMount(props) {
        this.updateCanvas()
        this.pointArray = this.props.pointArray
        console.log('state canvas', this.pointArray)
    }

    componentWillReceiveProps(nextProps) {
        const x = nextProps.x
        const y = nextProps.y
        this.updateCanvas(x, y)
    }

    updateCanvas(x = 0, y = 0) {
        const ctx = this.refs.canvas.getContext('2d')
        ctx.fillStyle = "red"
        ctx.fillRect(x, y, 5, 5)
    }



    render() {
        return (
            <canvas ref="canvas" width={500} height={500}/>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    pointArray: state.pointArray
  }
}

const mapDispatchToProps = (dispatch) => {
    addPoint: ({x, y}) => {
      dispatch({
          type: "addPoint",
          xy: {x, y}
    })
}}

export default connect(mapStateToProps, mapDispatchToProps)(CanvasComponent)
