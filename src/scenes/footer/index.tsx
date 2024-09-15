import Logo from '../../assets/Logo.png'

const Footer = () => {
  return <footer id="footer" className="bg-primary-100 py-16">
	<div className="justify-content mx-auto w-5/6 gap-16 md:flex">
		<div className="mt-16 basis-1/2 md:mt-0">
			<img alt="logo" src={Logo} />
			<p className="my-5">
				Where innovation meets fitness. Our state-of-the-art facilities and cutting-edge equipment are designed to help you reach your health and wellness goals. Join us and experience a new era of exercise with personalized training programs, expert guidance, and a supportive community.
			</p>
			<p className="">© 2024 EvoGym. All rights reserved. | Designed by Danish Mohiuddin</p>
			{/* <p className="pb-5">© 2024 EvoGym. All rights reserved. | Designed by Danish Mohiuddin</p>
			<p className="pb-5">123 Fitness Lane, Muscle City, CA 90001 | Phone: (123) 456-7890 | Email: info@evogym.com</p> */}
		</div>
		<div className="mt-16 basis-1/4 md:mt-0">
			<h4 className="font-bold">Links</h4>
			<p className="my-5">Benefits</p>
			<p className="my-5">Our Classes</p>
			<p>Careers</p>
		</div>
		<div className="mt-16 basis-1/4 md:mt-0">
			<h4 className="font-bold">Contact Us</h4>
			<p className="my-5">Visit Us</p>
			<p>Phone: (123) 456-7890</p>
		</div>
	</div>
  </footer>
}

export default Footer