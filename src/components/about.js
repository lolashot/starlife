import React from "react";
import { abouts } from "../data";


export default function About() {
  return (

<section id="about" class="about-section pt-150">
<div class="container">
<div class="row">
<div class="col-lg-6">
 <div class="about-img wow fadeInUp" data-wow-delay=".5s">
<img src="assets/img/about/about-img.svg" alt=""/>
</div>
</div>
{abouts.map((about) => (
<div class="col-lg-6">
<div class="about-content">
<div class="section-title">
<h1 class="wow fadeInUp" data-wow-delay=".2s">{about.title}</h1>
<p class="wow fadeInUp" data-wow-delay=".4s">{about.content}</p>
</div>
{about.roles.map((role) => (
<div class="counter-up wow fadeInUp" data-wow-delay=".8s">
<div class="single-counter">
<h3 id="secondo1" class="countup" cup-end="1" cup-append="M+">{role.downloads} </h3>
<h5>dDownloads</h5>
</div>
<div class="single-counter position-relative">
<h3 id="secondo2" class="countup" cup-end="234" cup-append="K+">{role.HappyUsers} </h3>
<h5>HappyUsers</h5>
</div>
<div class="single-counter">
<h3 id="secondo3" class="countup" cup-end="34" cup-append="K+">{role.PeerReviews}</h3>
<h5>PeerReviews</h5>
</div>
</div>
))}
</div>
</div>
))}

</div>
</div>
</section>
);
}