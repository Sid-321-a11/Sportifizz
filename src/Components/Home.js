import React from 'react'
import {Carousel} from "react-bootstrap";
import './Home.css'
<<<<<<< HEAD
import Product from './Product';
=======
import './../index.css'
import FetchProducts from './FetchProducts.js'
>>>>>>> 834ad820b7bc77f5a7dde65606733f97390f8822
function Home() {
    return (
      <div className="car">
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
<<<<<<< HEAD
            src="https://preview.redd.it/jq55u00zkqyy.jpg?width=960&crop=smart&auto=webp&s=7dcf542bcc3c6cb32ddf0839ff27d8ff693353b6"
=======
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1467&q=80"
>>>>>>> 834ad820b7bc77f5a7dde65606733f97390f8822
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/FCIvXPT8m5Y/maxresdefault.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets.thehansindia.com/hansindia-bucket/2019/01/rohit_3073.jpg?quality=60&w=100&dpr=1.0"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
<<<<<<< HEAD

    <p className="b">Bats</p>
    <div className="home-row">

    </div>
    <div className="home-row">
    <Product
    id="1"
    title="The lean startup:how innovation starts"
    price={4000}
    rating={5}
    image="https://nb.scene7.com/is/image/NB/0dcplebo_nb_03_i?$pdpflexf2$&wid=440&hei=440&qlt=35&fmt=webp"
    />
    
    <Product
    id="1"
    title="The lean startup:how innovation starts"
    price={4000}
    rating={5}
    image="https://nb.scene7.com/is/image/NB/0dcplebo_nb_03_i?$pdpflexf2$&wid=440&hei=440&qlt=35&fmt=webp"
    />
    <Product
    id="1"
    title="The lean startup:how innovation starts"
    price={4000}
    rating={5}
    image="https://nb.scene7.com/is/image/NB/0dcplebo_nb_03_i?$pdpflexf2$&wid=440&hei=440&qlt=35&fmt=webp"
    />
    
    
    
  
    </div>
 <div className="home-row">
 
 <Product
    id="1"
    title="The lean startup:how innovation starts"
    price={4000}
    rating={5}
    image="https://nb.scene7.com/is/image/NB/0dcplebo_nb_03_i?$pdpflexf2$&wid=440&hei=440&qlt=35&fmt=webp"
    />
    <Product
    id="1"
    title="The lean startup:how innovation starts"
    price={4000}
    rating={5}
    image="https://nb.scene7.com/is/image/NB/0dcplebo_nb_03_i?$pdpflexf2$&wid=440&hei=440&qlt=35&fmt=webp"
    />
    <Product
    id="1"
    title="The lean startup:how innovation starts"
    price={4000}
    rating={5}
    image="https://nb.scene7.com/is/image/NB/0dcplebo_nb_03_i?$pdpflexf2$&wid=440&hei=440&qlt=35&fmt=webp"
    />
    
 
 </div>



        </div>
=======
      <FetchProducts />
    </div>
>>>>>>> 834ad820b7bc77f5a7dde65606733f97390f8822
    )
}
export default Home
