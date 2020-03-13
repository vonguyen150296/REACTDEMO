import React,{ Component } from "react";

class ToggleButton extends Component{

  constructor(props)
  {
    super(props);

    this.state = {
      liked: false
    }

    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(){
   
    this.setState((prev)=>{
      this.props.click(this.state.liked)
      return {
        liked: !prev.liked
      }
    })

  }

  render(){
    if(!this.state.liked)  return <div onClick={this.clickHandler} style={{float: 'left', marginLeft: '10px', color: 'blueviolet', cursor: 'pointer'}}><i className="fas fa-thumbs-up" /></div>
    else  return <div onClick={this.clickHandler} style={{float: 'left', marginLeft: '10px', color: 'blueviolet', cursor: 'pointer'}}><i className="fas fa-thumbs-down" /></div>
  }

}

export default ToggleButton;