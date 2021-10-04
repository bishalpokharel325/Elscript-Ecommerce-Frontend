import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { categoryContext } from '../App'
import Carousel from '../components/Carousel'
import Categoryitem from '../components/Categoryitem'
import ProductCard from '../components/ProductCard'
import './Landing.css'

const Landing = () => {
    const [primary, setPrimary] = useState([])
    const {category, setCategory} = useContext(categoryContext)
    const [cat_id, setCatId] = useState(null)
    useEffect(() => {
        axios.get("http://localhost:8000/api/get-categories")
        .then((data)=>{
            setPrimary(data.data)
        })
    },[])
    return (
        <div className="landing">
            <div className="landing__body">
                <div className="landing__top">
                    <div className="landing__top__left">
                        <div className="landing__categories">
                            <h4>Top Categories<hr/></h4>
                            
                            {primary.map((item)=>{
                                let catid=item.id
                                return (
                                    <span>
                                        <Link to="/products"><Categoryitem key={item.id} title={item.title}/></Link>
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                            {/* Hover Space */}
                    <div className="landing__top__middle">
                            {/* <CategoryHoverLists/> */}
                            <Carousel/>
                    </div>
                    <div className="landing__top__right">
                        <div className="ad__container">
                            {cat_id}
                        </div>
                    </div>
                </div>
                <div className="landing__fresh__sales">
                    <div className="fresh__sales__top">
                            Fresh Sales
                    </div>
                    <hr/>
                    <div className="fresh__sales__middle">
                            <ProductCard title="product title" price="300.00" rating={5} src="./product1.jpeg"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product2.jpg"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product3.png"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product4.jpg"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product3.png"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product3.png"/>

                    </div>
                </div>



                 <div className="landing__fresh__sales">
                    <div className="fresh__sales__top">
                            Trending Products
                    </div>
                    <hr/>
                    <div className="fresh__sales__middle">
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product1.jpeg"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product2.jpg"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product3.png"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product4.jpg"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product3.png"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product3.png"/>

                    </div>
                </div>

                <div className="landing__fresh__sales">
                    <div className="fresh__sales__top">
                            Recommendations for you
                    </div>
                    <hr/>
                    <div className="fresh__sales__middle">
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product1.jpeg"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product2.jpg"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product3.png"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product4.jpg"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product3.png"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product3.png"/>

                    </div>
                </div>


                <div className="landing__fresh__sales">
                    <div className="fresh__sales__top">
                            Newest Products
                    </div>
                    <hr/>
                    <div className="fresh__sales__middle">
                            <ProductCard title="product title" price="300.00" rating={5} src="./product1.jpeg"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product2.jpg"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product3.png"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product4.jpg"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product3.png"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product3.png"/>

                    </div>
                </div>



            </div>
        </div>
    )
}

export default Landing
