import React, { Component } from 'react'

import ToggleButton from './ToggleButton'

class Card extends Component {
  constructor (props) {
    super(props)

    this.state = {
      likes: props.likes,
      dislikes: props.dislikes
    }
  }

  clickHandler (value) {
    if (!value) {
      this.setState(prev=>{
        return {
          likes: prev.likes + 1,

        }
      })
    } else {
      this.setState(prev=>{
        return {
          likes: prev.likes - 1,
        }
      })
    }
  }

  render () {
    return (
      <div className="column">
        <div className="content">
          <div className="image" style={{width: '100%',height :'170px' }}></div>
          <h3>{this.props.title}</h3>
          <div>
            <div style={{float: 'left'}}>Like/Dislike : {this.state.likes}/{this.state.dislikes}</div>
            <ToggleButton click={this.clickHandler.bind(this)} />
            <div style={{float: 'left',width: "20px"}}>&nbsp;</div>
            <div style={{float: 'left', cursor : "pointer"}} onClick={this.props.onDelete.bind(this,this.props.id)} ><i className="fas fa-trash-alt"></i></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
