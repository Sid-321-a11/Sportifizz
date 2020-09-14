import React, { Component } from 'react';
import './../index.css'
import FetchProducts from './FetchProducts.js'
class Body extends Component{

  render(){
    return(
      <div className='container'>
        <FetchProducts />
      </div>
    );
  }
}
export default Body;
