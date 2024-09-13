// enums actually exist in a build.. interfaces and types only exist in compile, not build
export enum SelectedPage {
	Home = "home",
	Benefits = "benefits",
	OurClasses = "ourclasses",
	ContactUs = "contactus"
  }

export interface BenefitType {
	icon: JSX.Element;
	title: string;
	description: string;
}

export interface ClassType {
	name: string;
	// adding a ? means it's optional. It's no longer required in OurClasses index.tsx
	description?: string;
	image: string;
}