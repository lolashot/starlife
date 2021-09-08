	import React from "react";
    import { teams } from "../data";


	export default function Team() {
		return (

			<section id="team" class="team-section pt-130">
			<div class="container">
			<div class="row justify-content-center">
			<div class="col-xl-6 col-lg-7">
			<div class="section-title text-center mb-60">
			<h1 class="mb-35 wow fadeInUp" data-wow-delay=".2s">Meet The Team</h1>
			<p class="wow fadeInUp" data-wow-delay=".4s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
			</div>
			</div>
			</div>
			<div class="row justify-content-center team-wrapper">
			{teams.map((team) => (
            <div class="col-lg-3 col-md-6 col-sm-10">
			<div class="single-team">
			<div class="image">
			<img src={team.image} alt="teams image"/></div>
			<div class="content">
			<h4>{team.name}</h4>
			<p>{team.role}</p>
			<ul class="socials">
			<li>
			<a href="david.html">
			<i class="fa fa-facebook-official" aria-hidden="true"></i>
            <i class="lni lni-facebook-filled"></i> </a>
			</li>
			<li>
			<a href="david.html"> <i class="lni lni-twitter-filled"></i> </a>
			</li>
			<li>
			<a href="david.html"> <i class="lni lni-instagram-filled"></i> </a>
			</li>
			<li>
			<a href="david.html"> <i class="lni lni-linkedin-original"></i> </a>
			</li>
			</ul>
			</div>
			</div>
			</div>
			))}
			
			</div>
			</div>
			</section>
			);
	}