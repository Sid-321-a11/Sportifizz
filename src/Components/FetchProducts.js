import React, { Component } from 'react'


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
