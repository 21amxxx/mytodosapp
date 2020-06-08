import React from 'react';
import './App.css';
import _ from "underscore";
import {arrayRemove, AffCons} from './biblio';


let listCat = ["Boulot", "Maison", "Ecole"];
let selectedCat = [];

class CatItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {clasename : this.props.class};
    };

    onclick = (e) => {
      e.preventDefault();
      if (_.contains(selectedCat, this.props.item)) {
        selectedCat = arrayRemove(selectedCat, this.props.item)
        AffCons(selectedCat)
      } else {
        selectedCat = [this.props.item, ...selectedCat]
        AffCons(selectedCat)
      }
      this.setState(function(state, props) {
          if (state.clasename === props.class)
          {
            return {clasename: 'selected'}
          }
          else
          {
            return {clasename: 'not-selected'}
          }
        })
    }
  
  render(){
      return (
      <p className={this.state.clasename} onClick = {this.onclick} >{this.props.item}</p>   )
     };
};

function AffCat(props){
  return listCat.map((item, ind) => {
    return <CatItem key={ind} class='not-selected' item ={item}></CatItem>
  });
};

export {selectedCat, AffCat};

