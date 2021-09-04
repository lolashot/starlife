import React from "react";

export default function about() {
  return (


<section id="contact" class="contact-section pt-130">
<div class="container">
<div class="row justify-content-center">
<div class="col-lg-6 col-xl-5">
<div class="section-title text-center mb-60">
<h1 class="mb-25 wow fadeInUp" data-wow-delay=".2s">Get In Touch</h1>
<p class="wow fadeInUp" data-wow-delay=".4s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
</div>
</div>
</div>
<div class="row">
<div class="col-lg-7">
<div class="contact-wrapper wow fadeInUp" data-wow-delay=".2s">
<form action="#" method="POST" id="contact-form" class="contact-form">
<div class="row">
<div class="col-md-6">
<div class="single-form">
<input type="text" name="name" id="name" class="form-input" placeholder="Your Name"/>
</div>
</div>
<div class="col-md-6">
<div class="single-form">
<input type="email" name="email" id="email" class="form-input" placeholder="Your E-mail"/>
</div>
</div>
<div class="col-md-6">
<div class="single-form">
<input type="text" name="subject" id="subject" class="form-input" placeholder="Subject"/>
</div>
</div>
<div class="col-md-6">
<div class="single-form">
<input type="text" name="number" id="number" class="form-input" placeholder="Number"/>
</div>
</div>
<div class="col-md-12">
<div class="single-form">
<textarea name="message" id="message" class="form-input" rows="7" placeholder="Message"></textarea>
</div>
</div>
<div class="col-md-12">
<div class="submit-btn">
<button class="main-btn btn-hover" type="submit">Submit Message</button>
</div>
</div>
</div>
</form>
</div>
</div>
<div class="col-lg-5">
<div class="contact-img wow fadeInUp" data-wow-delay=".5s">
<img src="assets/img/contact/contact-img.svg" alt=""/>
</div>
</div>
</div>
</div>
</section>
);
}