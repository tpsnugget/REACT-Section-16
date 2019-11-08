import React, { Component } from "react";
import "./Die.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDiceOne} from '@fortawesome/free-solid-svg-icons'
import {faDiceTwo} from '@fortawesome/free-solid-svg-icons'
import {faDiceThree} from '@fortawesome/free-solid-svg-icons'
import {faDiceFour} from '@fortawesome/free-solid-svg-icons'
import {faDiceFive} from '@fortawesome/free-solid-svg-icons'
import {faDiceSix} from '@fortawesome/free-solid-svg-icons'

class Die extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(idx){
    this.props.handleClick(this.props.idx)
  }

  render() {
    if(this.props.val === 1) {return (<button className={"Die"} style={{ backgroundColor: this.props.locked ? "grey" : "black" }} onClick={this.handleClick} > <FontAwesomeIcon icon={faDiceOne} /> </button> )}
    else if(this.props.val === 2) {return (<button className={"Die"} style={{ backgroundColor: this.props.locked ? "grey" : "black" }} onClick={this.handleClick} > <FontAwesomeIcon icon={faDiceTwo} /> </button> )}
    else if(this.props.val === 3) {return (<button className={"Die"} style={{ backgroundColor: this.props.locked ? "grey" : "black" }} onClick={this.handleClick} > <FontAwesomeIcon icon={faDiceThree} /> </button> )}
    else if(this.props.val === 4) {return (<button className={"Die"} style={{ backgroundColor: this.props.locked ? "grey" : "black" }} onClick={this.handleClick} > <FontAwesomeIcon icon={faDiceFour} /> </button> )}
    else if(this.props.val === 5) {return (<button className={"Die"} style={{ backgroundColor: this.props.locked ? "grey" : "black" }} onClick={this.handleClick} > <FontAwesomeIcon icon={faDiceFive} /> </button> )}
    else if(this.props.val === 6){return (<button className={"Die"} style={{ backgroundColor: this.props.locked ? "grey" : "black" }} onClick={this.handleClick} > <FontAwesomeIcon icon={faDiceSix} /> </button> )}
    else {return (<button className={"Die"} style={{ backgroundColor: this.props.locked ? "grey" : "black" }} onClick={this.handleClick} >  </button> )}
  }
}

export default Die;

      // if(this.props.face === 1){return <span className="Die-piece `${this.props.rolling} && 'shaking'`"><FontAwesomeIcon icon={faDiceOne} /></span>}
      // else if(this.props.face === 2){return <span className="Die-piece `${this.props.rolling} && 'shaking'`"><FontAwesomeIcon icon={faDiceTwo} /></span>}
      // else if(this.props.face === 3){return <span className="Die-piece `${this.props.rolling} && 'shaking'`"><FontAwesomeIcon icon={faDiceThree} /></span>}
      // else if(this.props.face === 4){return <span className="Die-piece `${this.props.rolling} && 'shaking'`"><FontAwesomeIcon icon={faDiceFour} /></span>}
      // else if(this.props.face === 5){return <span className="Die-piece `${this.props.rolling} && 'shaking'`"><FontAwesomeIcon icon={faDiceFive} /></span>}
      // else{return <span className="Die-piece `${this.props.rolling} && 'shaking'`"><FontAwesomeIcon icon={faDiceSix} /></span>}