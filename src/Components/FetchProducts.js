import React, { Component } from 'react'

// This is just an api fetch test

class FetchProducts extends Component{
  state = {
    loading: true,
    person: null
  };
  async componentDidMount(){
    const url = "/core/"
    const response = await fetch(url)
    const data = await response.json()
    this.setState({person:data, loading:false});
  }
  render(){
    return(
      <div>
        {
          this.state.loading ? <div>Loading...</div>:
          <div>{this.state.person}</div>
        }
      </div>
    );
  }
}
export default FetchProducts;
