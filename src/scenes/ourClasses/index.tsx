import React from 'react'
import { SelectedPage } from '../../shared/types'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';
import { motion } from 'framer-motion';
import HText from '../../shared/HText';


type Props = {
	setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return <section id="ourclasses" className="w-full bg-primary-100 py-40">
	<motion.div
		onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
	>
		<motion.div
			className="mx-auto w-5/6"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.5}}
			transition={{ duration: 0.5 }}
			variants={{
				hidden: { opacity: 0, x: -50 },
				visible: { opacity: 1, x: 0 }
			}}
		>
			<div className="md:w-3/5">
				<HText>OUR CLASSES</HText>
				<p className="py-5">
				At EVOGYM, our classes are designed to push boundaries and deliver results. Whether you're looking to build strength, enhance endurance, or boost flexibility, we offer a diverse range of classes tailored to meet your unique fitness needs. Our high-intensity interval training (HIIT) classes are perfect for those looking to maximize calorie burn and improve cardiovascular health in a short amount of time. For those focused on building muscle and strength, our strength training classes utilize cutting-edge equipment and expert techniques to help you lift heavier and grow stronger with every session.
				</p>
				<p className="pb-5">
				In addition to our core offerings, we provide specialized functional fitness classes that improve everyday movements, ensuring you're not just gym strong, but life strong. Our expert instructors lead each class with energy and precision, ensuring that every workout is safe, effective, and enjoyable. Whether you prefer the camaraderie of group classes or the personalized attention of smaller sessions, EVOGYM's classes are designed to challenge, inspire, and elevate your fitness journey.
				</p>
			</div>
		</motion.div>
	</motion.div>
  </section>
}

export default OurClasses