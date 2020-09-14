import React, { Component } from 'react'


class FetchProducts extends Component{
  constructor(props) {
		super(props);
		this.state = {
      isLoaded:false,
			products: [],
		};
	}

	async componentDidMount() {
		await fetch("http://localhost:8000/api/products/")
			.then(response => response.json())
			.then(data => {
				this.setState({
          isLoaded:true,
          products: data,
        })
			});
	}
  render(){

    var { isLoaded, products } = this.state;
    if(!isLoaded){
      return <div>Loading...</div>
    }
    else{
      return(
        <div className='row'>{
            products.map(item => (
              <div className='col-md-4 center'>
                <img src={item.image} alt={item.image}></img>
              </div>
          ))
        }</div>
      );
    }
  }
}
export default FetchProducts;
