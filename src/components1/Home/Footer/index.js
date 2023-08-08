import React from 'react'
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
//npm install @fortawesome/fontawesome-free
export default function Footer(props) {
	const {DevName} = props;
  return (
	<footer className="footer">
	<div className="container2">
		<div className="row">
			<div className="footer-col">
				<h4>company</h4>
				<ul>
					<li><a href="/">about us</a></li>
				</ul>
			</div>
			<div className="footer-col">
				<h4>get help</h4>
				<ul>
					<li><a href="/">FAQ</a></li>
				</ul>
			</div>
			<div className="footer-col">
				<h4>follow us</h4>
				<div className="social-links">
					<a href="/"><i className="fab fa-facebook-f"></i></a>
					<a href="/"><i className="fab fa-twitter"></i></a>
					<a href="/"><i className="fab fa-instagram"></i></a>
					<a href="/"><i className="fab fa-linkedin-in"></i></a>
				</div>
			</div>
			<div className="footer-col">
			<div class="copyright">
    All rights reserved &copy; <span class="devname">{DevName}</span>
</div>
			</div>
		</div>
	</div>
</footer>
  )
}