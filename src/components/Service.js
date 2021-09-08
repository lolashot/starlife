

import React from "react";
import { projects } from "../data";

export default function Service() {
  return (
<section id="features" class="service-section pt-150">
<div class="container">
<div class="row align-items-center">
<div class="col-xl-6 col-lg-9">
<div class="service-content">
<div class="section-title">
<h1 class="mb-30 wow fadeInUp" data-wow-delay=".2s">Our Recent Projects</h1>
<p class="mb-40 wow fadeInUp" data-wow-delay=".4s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam era.Lorem ipsum dolor sisert amet, consetetur sadipscing sed diam.</p>
<a href="david.html" class="main-btn btn-hover border-btn wow fadeInUp" data-wow-delay=".6s">Get Started</a>
</div>
</div>
</div>
{projects.map((project) => (
<div class="col-lg-12 col-xl-6">
<div class="row">
<div class="col-xl-6 col-md-6">
<div class="single-service">
<div class="icon">
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="rocket 1">
<g id="Group">
<path id="Vector" d="M62.7999 18.5L54.2999 9.99997L54 9.79997C53.5 9.29997 52.7 9.29997 51.9 9.29997L38.9 10.4C28.5 1.79997 15.4999 -1.90003 4.79995 0.999972C2.99995 1.29997 1.69995 2.79997 1.09995 4.69997C-1.80005 15.3 1.89995 28.4 10.3999 38.5L9.09995 51.8C9.09995 52.8 9.49995 53.8 10.1999 54.5L18.4 62.8C18.9 63.3 19.9999 63.9 20.7999 63.9C21.0999 63.9 21.3 63.9 21.9 63.6C22.9 62.9 23.9999 62.3 24.2999 60.7L25.6 50.1C26.9 50.6 28.3 51.3 29.6 51.7C30.3 51.9 30.7 52 31.2 52C32.5 52 33.9 51.5 34.9 50.4L50.2999 35C51.5999 33.7 52.1999 31.3 51.5999 29.4C51.0999 28.1 50.5 26.7 50 25.4L60.9 24.1C62.2 23.8 62.9999 23 63.5999 21.7C64.0999 20.7 63.8999 19.6 62.7999 18.5ZM19.7 56.3L14.5999 51.2L15.3999 43.5C17.2999 45.1 19.1 46.4 21 47.8L19.7 56.3ZM31.4 47C26.0999 45.1 20.8 41.7 16.5 37.4C7.49995 28.4 3.19995 15.9 5.89995 5.99997C16 3.39997 28.1999 7.39997 37.2999 16.7C41.5999 21 44.7 26 46.9 31.6L31.4 47ZM47.5999 20.7C46.2999 18.8 44.8999 17 43.2999 15.1L51 14.6L56.0999 19.7L47.5999 20.7Z" fill="#286ADE" />
<path id="Vector_2" d="M56.4 40.1C55.6 39.6 54.3 39.8 53.5 40.4C52.4 41.2 47.4 46.2 46.6 47C39.7 53.9 39.7 53.9 40.2 55.5C40.3 56 40.5 56.3 41 56.8C44.5 60.3 49.5 61.1 53.5 61.1C56.4 61.1 58.6 60.6 58.8 60.6C59.9 60.3 60.7 59.5 60.9 58.5C60.9 58 63.3 46.5 57.2 40.7C56.7 40.3 56.7 40.3 56.4 40.1ZM55.9 55.8C53.2 56.1 49.5 56.1 46.6 54.7C48.7 52.3 52.4 48.9 54.6 46.7C55.9 49.4 55.9 53.1 55.9 55.8Z" fill="#286ADE" />
<path id="Vector_3" d="M25.7999 16.7C20.6999 16.7 16.7999 20.7 16.7999 25.7C16.7999 30.7 20.7999 34.7 25.7999 34.7C30.7999 34.7 34.7999 30.7 34.7999 25.7C34.7999 20.7 30.8999 16.7 25.7999 16.7ZM25.7999 29.4C23.6999 29.4 22.0999 27.8 22.0999 25.7C22.0999 23.6 23.6999 22 25.7999 22C27.8999 22 29.4999 23.6 29.4999 25.7C29.5999 27.8 27.9999 29.4 25.7999 29.4Z" fill="#286ADE" />
</g>
</g>
</svg>
</div>
<div class="content">
<h3>{project.title}</h3>
<p>{project.description}</p>
</div>
</div>
</div>

</div>
</div>
))}
</div>
</div>
</section>
);
}