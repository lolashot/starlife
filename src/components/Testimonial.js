import React,{ useEffect, useState } from "react";
import axios from 'axios';
import { testimonials } from "../data";




export default function Testimonial() {
	const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://613a097f1fcce10017e78d33.mockapi.io/testData`)
            .then((response) => {
                console.log('users', response);
                setAPIData(response.data);
            })
    }, [])

  return (
<section class="testimonial-section img-bg mt-130 pt-60 pb-60">
<div class="container">
<div class="row justify-content-center">
<div class="col-lg-7">
<div class="section-title mb-70 text-center">
<h1 class="text-white wow fadeInUp" data-wow-delay=".2s">What Our Users Says</h1>
</div>
</div>
</div>
<div class="testimonial-active-wrapper">
<div class="row testimonial-active">
 {APIData.map((data) => (
	<div class="col-lg-6">
<div class="single-testimonial">
  
<div class="content">
<p>{data.firstName}
</p>
<div class="info">
<h5>{data.lastName}</h5>
<p>{data.checkbox}</p>
</div>
</div>
</div>
</div>
	))}



</div>
</div>
</div>
</section>
);
}