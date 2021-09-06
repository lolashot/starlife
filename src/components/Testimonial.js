import React from "react";

import { testimonials } from "../data";


export default function Testimonial() {
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
{testimonials.map((testimonial) => (
	<div class="col-lg-6">
<div class="single-testimonial">
<div class="image">
<img src={testimonial.image2} alt="testimonial image"/>
</div>
<div class="content">
<p>{testimonial.quote}
</p>
<div class="info">
<h5>{testimonial.name}</h5>
<p>{testimonial.company}</p>
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