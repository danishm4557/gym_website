import { SelectedPage, ClassType } from '../../shared/types'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';
import { motion } from 'framer-motion';
import HText from '../../shared/HText';
import Class from './Class';

const classes: Array<ClassType> = [
	{
		name: "Weight Training Classes",
		description: "Boost your strength and fitness in our weight training class, perfect for all levels. Expert-led sessions focus on building muscle and enhancing overall tone.",
		image: image1
	},
	{
		name: "Yoga Classes",
		image: image2
	},
	{
		name: "Ab Core Classes",
		description: "Strengthen your core and sculpt your abs in our focused Ab Core class, perfect for all fitness levels. Expert-led workouts target your midsection for maximum results.",
		image: image3
	},
	{
		name: "Adventure Classes",
		description: "Unleash your adventurous spirit in our high-energy Adventure class. Designed for all fitness levels, this session combines dynamic movements and challenges to keep you engaged and energized.",
		image: image4
	},
	{
		name: "Fitness Classes",
		description: "Elevate your fitness in our all-levels Fitness class. Expert-led sessions combine cardio and strength training for a full-body workout that keeps you motivated.",
		image: image5
	},
	{
		name: "Training Classes",
		image: image6
	}
]

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
		<div className="mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden">
			<ul className="w-[2800px] whitespace-nowrap">
				{classes.map((item: ClassType, index) => (
					<Class
						key={`${item.name}-${index}`}
						name={item.name}
						description={item.description}
						image={item.image}
					/>
				))}
			</ul>
		</div>
	</motion.div>
  </section>
}

export default OurClasses