import React from "react";

export default function about() {
  return (
<section id="pricing" class="pricing-section pt-130">
<div class="container">
<div class="row align-items-end">
<div class="col-lg-7 col-xl-5">
<div class="section-title mb-60">
<h1 class="mb-35 wow fadeInUp" data-wow-delay=".2s">Choose Your Plan</h1>
<p class="wow fadeInUp" data-wow-delay=".4s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
</div>
</div>
<div class="col-lg-5 col-xl-7">
<ul class="nav nav-pills pricing-tab mb-60" id="pills-tab" role="tablist">
<li role="presentation">
<a class="pricing-tab-link active" id="pills-monthly-tab" data-toggle="pill" href="#pills-monthly" role="tab" aria-controls="pills-monthly" aria-selected="true">
Monthly
</a>
</li>
<li role="presentation">
<a class="pricing-tab-link" id="pills-yearly-tab" data-toggle="pill" href="#pills-yearly" role="tab" aria-controls="pills-yearly" aria-selected="false">
Yearly
</a>
</li>
</ul>
</div>
</div>
<div class="tab-content" id="pills-tabContent">
<div class="tab-pane fade show active" id="pills-monthly" role="tabpanel" aria-labelledby="pills-monthly-tab">
<div class="row">
<div class="col-lg-4 col-md-6">
<div class="single-pricing">
<div class="icon">
<img src="assets/img/pricing/pricing-1.svg" alt=""/>
</div>
<h3 class="package-name">Startup</h3>
<span class="price">$13.00</span>
<ul>
<li>Extra features</li>
<li>Lifetime free support</li>
<li>Upgrade options</li>
<li>Full access</li>
</ul>
<a href="javascript:void(0)" class="main-btn border-btn btn-hover">Get Started</a>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="single-pricing">
<div class="icon">
<img src="assets/img/pricing/pricing-2.svg" alt=""/>
</div>
<h3 class="package-name">Standard</h3>
<span class="price">$53.00</span>
<ul>
<li>Extra features</li>
<li>Lifetime free support</li>
<li>Upgrade options</li>
<li>Full access</li>
</ul>
<a href="javascript:void(0)" class="main-btn btn-hover">Get Started</a>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="single-pricing">
<div class="icon">
<img src="assets/img/pricing/pricing-3.svg" alt=""/>
</div>
<h3 class="package-name">Premium</h3>
<span class="price">$93.00</span>
<ul>
<li>Extra features</li>
<li>Lifetime free support</li>
<li>Upgrade options</li>
<li>Full access</li>
</ul>
<a href="javascript:void(0)" class="main-btn border-btn btn-hover">Get Started</a>
</div>
</div>
</div>
</div>
<div class="tab-pane fade" id="pills-yearly" role="tabpanel" aria-labelledby="pills-yearly-tab">
<div class="row">
<div class="col-lg-4 col-md-6">
<div class="single-pricing">
<div class="icon">
<img src="assets/img/pricing/pricing-1.svg" alt=""/>
</div>
<h3 class="package-name">Startup</h3>
<span class="price">$13.00</span>
<ul>
<li>Extra features</li>
<li>Lifetime free support</li>
<li>Upgrade options</li>
<li>Full access</li>
</ul>
<a href="javascript:void(0)" class="main-btn border-btn btn-hover">Get Started</a>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="single-pricing">
<div class="icon">
<img src="assets/img/pricing/pricing-2.svg" alt=""/>
</div>
<h3 class="package-name">Standard</h3>
<span class="price">$53.00</span>
<ul>
<li>Extra features</li>
<li>Lifetime free support</li>
<li>Upgrade options</li>
<li>Full access</li>
</ul>
<a href="javascript:void(0)" class="main-btn btn-hover">Get Started</a>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="single-pricing">
<div class="icon">
<img src="assets/img/pricing/pricing-3.svg" alt=""/>
</div>
<h3 class="package-name">Premium</h3>
<span class="price">$93.00</span>
<ul>
<li>Extra features</li>
<li>Lifetime free support</li>
<li>Upgrade options</li>
<li>Full access</li>
</ul>
<a href="javascript:void(0)" class="main-btn border-btn btn-hover">Get Started</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
);
}