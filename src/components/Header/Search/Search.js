import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';





//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       searchText:""
    }
  }

  

  //console.log(searchText)

  render() {
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input
          placeholder="Search Your Feed"
          onChange={e=>{
            this.setState({searchText:e.target.value})
            console.log(e.target.value)
          }} 
          />

          <SearchIcon id="Search__icon" />
        </div>
        
      </section>
    )
  }
}


