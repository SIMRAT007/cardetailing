import React from 'react';
import { FaCheckCircle, FaCar, FaLeaf, FaSmile, FaStar, FaShieldAlt } from 'react-icons/fa';
import { BsSpeedometer } from 'react-icons/bs';

const points = [
	{
		title: 'Quick Wash',
		description:
			'Efficient, swift, and spotless – our Quick Wash delivers a rapid refresh for your vehicle\'s ultimate cleanliness.',
		icon: BsSpeedometer,
	},
	{
		title: 'Efficient Cleaning',
		description:
			'Lobortis consectetuer malesuada feugiat facilisi integer nulla porta vulputate nisi',
		icon: FaCar,
	},
	{
		title: 'Vehicle Protection',
		description:
			'Ensure longevity and shine with our premium vehicle protection services, guarding against wear, tear, and environmental elements.',
		icon: FaShieldAlt,
	},
	{
		title: 'Eco-friendly',
		description:
			'Choose our eco-friendly solutions for guilt-free, sustainable services that prioritize both your vehicle and the environment',
		icon: FaLeaf,
	},
	{
		title: 'Customer Satisfaction',
		description:
			'Exceeding expectations, our commitment to customer satisfaction ensures a tailored experience, leaving every client delighted and content.',
		icon: FaSmile,
	},
	{
		title: 'Shine & Clean',
		description:
			'Experience the perfect union of shine and clean with our meticulous detailing, leaving your vehicle radiant and spotless',
		icon: FaStar,
	},
];

export default function WhyUs() {
	return (
		<section className="py-16 max-md:mx-4">
			<h2 className="md:text-[4rem] text-3xl font-bold text-center mb-6 bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
				Why Choose Us?
			</h2>
			<p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
				At [Your Brand Name], we are dedicated to providing top-notch car detailing
				services. Our commitment to quality, affordability, and customer
				satisfaction sets us apart. Discover why we are the trusted choice for car
				enthusiasts everywhere.
			</p>

			{/* Responsive Container */}
			<div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-center gap-10">
				{/* Left Cards */}
				<div className="flex flex-col gap-4 order-2 lg:order-1">
					{points.slice(0, 3).map((point, index) => (
						<div
							key={index}
							className="w-full lg:w-90 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 flex flex-col items-start gap-4 border border-gray-700 hover:border-red-500"
						>
							<div className="p-3 bg-gray-700/30 rounded-lg group-hover:bg-red-500/10 transition-colors duration-300">
								<point.icon className="text-red-600 text-4xl mb-3 transform hover:rotate-12 transition-transform duration-300" />
							</div>
							<h4 className="text-xl font-bold text-white hover:text-red-400 transition-colors duration-300">
								{point.title}
							</h4>
							<p className="text-base text-gray-400 hover:text-gray-300 transition-colors duration-300">
								{point.description}
							</p>
						</div>
					))}
				</div>

				{/* Car Image */}
				<div className="order-1 lg:order-2 flex justify-center">
					<img
						src="https://www.pngmart.com/files/4/Ferrari-Sergio-PNG-HD.png"
						alt="Car"
						className="w-96 h-auto hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
					/>
				</div>

				{/* Right Cards - Same styling as Left Cards */}
				<div className="flex flex-col gap-4 order-3">
					{points.slice(3, 6).map((point, index) => (
						<div
							key={index}
							className="w-full lg:w-90 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 flex flex-col items-start gap-4 border border-gray-700 hover:border-red-500"
						>
							<div className="p-3 bg-gray-700/30 rounded-lg group-hover:bg-red-500/10 transition-colors duration-300">
								<point.icon className="text-red-600 text-4xl mb-3 transform hover:rotate-12 transition-transform duration-300" />
							</div>
							<h4 className="text-xl font-bold text-white hover:text-red-400 transition-colors duration-300">
								{point.title}
							</h4>
							<p className="text-base text-gray-400 hover:text-gray-300 transition-colors duration-300">
								{point.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
