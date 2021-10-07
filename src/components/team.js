	import React,{ useEffect, useState } from "react";
	import axios from 'axios';

    import { teams } from "../data";


	export default function Team() {
		const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://613a097f1fcce10017e78d33.mockapi.io/teamData`)
            .then((response) => {
                console.log('users', response);
                setAPIData(response.data);
            })
    }, [])
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
			{APIData.map((data) => (
            <div class="col-lg-3 col-md-6 col-sm-10">
			<div class="single-team">
		
			<div class="content">
			<h4>{data.firstName}</h4>
			<p>{data.lastName}</p>
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