import {
	HomeModernIcon,
	UserGroupIcon,
	AcademicCapIcon
} from "@heroicons/react/24/solid"
import { BenefitType, SelectedPage } from "../../shared/types"
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Benefit from "./Benefit";
import ActionButton from "../../shared/ActionButton";
import BenefitsPageGraphics from "../../assets/BenefitsPageGraphic.png";


const benefits: Array<BenefitType> = [
	{
		icon: <HomeModernIcon className="h-6 w-6" />,
		title: "State of the Art Facilities",
		description: "Rated best facility in all of Illinois."
	},
	{
		icon: <UserGroupIcon className="h-6 w-6" />,
		title: "Hundreds of Diverse Classes",
		description: "Try out every classes to keep the level of excitement to the max."
	},
	{
		icon: <AcademicCapIcon className="h-6 w-6" />,
		title: "Expert and Pro Trainers",
		description: "Work with experts to gain insights and crush your fitness goals."
	}
]

const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.2 }
	}
}

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
	<section
		id="benefits"
		className="mx-auto min-h-full w-5/6 py-20">
		<motion.div
			onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
		>
			{/* HEADER */}
			<motion.div className="md:my-5 md:w-3/5"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.5}}
			transition={{ duration: 0.5 }}
			variants={{
				hidden: { opacity: 0, x: -50 },
				visible: { opacity: 1, x: 0 }
			 }}>
				<HText>MORE THAN JUST A GYM.</HText>
				<p className="my-5 text-sm">
					We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
				</p>
			</motion.div>
			{/* BENEFITS */}
			<motion.div
				className="md:flex items-center justify-between gap-8 mt-5"
				initial="hidden"
				whileInView="visible"
				viewport={{once: true, amount: 0.5}}
				variants={container}
				>
				{benefits.map((benefit: BenefitType) => (
					<Benefit
						key={benefit.title}
						icon={benefit.icon}
						title={benefit.title}
						description={benefit.description}
						setSelectedPage={setSelectedPage}
					/>
				))}
			</motion.div>

			{/* GRAPHICS AND DESCRIPTION */}
			<div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
				{/* GRAPHIC */}
				<img
					className="mx-auto"
					alt="benefits-page-graphics"
					src={BenefitsPageGraphics}
				/>

				{/* DESCRIPTION */}
				<div>
					{/* TITLE */}
					<div className="relative">
						<div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.5}}
								transition={{ duration: 0.5 }}
								variants={{
									hidden: { opacity: 0, x: 50 },
									visible: { opacity: 1, x: 0 }
								}}
							 >
								<HText>
									MILLIONS OF HAPPY MEMBERS GETTING{" "}
									<span className="text-primary-500">FIT</span>
								</HText>
							</motion.div>
						</div>
					</div>

					{/* DESCRIPTION */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5}}
						transition={{ delay: 0.2, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: 50 },
							visible: { opacity: 1, x: 0 }
						}}
					>
						<p className="my-5">
							<strong>About EVOGYM</strong><br />
							Welcome to EVOGYM, where fitness meets innovation. Our state-of-the-art facilities are designed for those who are serious about their fitness journey. Whether you're a seasoned athlete or just starting, EVOGYM provides a dynamic environment that caters to all levels of experience. With cutting-edge equipment, expert trainers, and personalized programs, we empower you to push your limits and achieve your fitness goals. Our commitment to excellence ensures that every visit to EVOGYM is a step towards becoming the best version of yourself.
						</p>
						<p className="mb-5">
							<strong>Why Choose EVOGYM?</strong><br />
							At EVOGYM, we believe in evolving beyond traditional workouts. Our diverse range of classes, including HIIT, strength training, and functional fitness, is tailored to challenge and inspire you. Our community-driven atmosphere fosters motivation and camaraderie, making your fitness journey not just effective but enjoyable. In addition to our group classes, we offer one-on-one personal training sessions and advanced recovery options to support your overall well-being. Join EVOGYM today and experience a fitness revolution designed to elevate your performance and transform your life.
						</p>
					</motion.div>

					{/* BUTTON */}
					<div className="relative mt-16">
						<div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
							<ActionButton setSelectedPage={setSelectedPage}>
								Join Now
							</ActionButton>
						</div>
					</div>

				</div>
			</div>
		</motion.div>
	</section>
  )
}

export default Benefits