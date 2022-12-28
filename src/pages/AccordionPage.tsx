import React from "react"
import Accordion from "../components/Accordion"
const AccordionPage = () => {
	const items = [
		{
			label: "Use React",
			content:
				" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam facere, quam minima incidunt temporibus alias!",
			id: Math.random(),
		},
		{
			label: "Typescipt",
			content:
				" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, consequatur suscipit sed magni doloremque quia soluta accusantium eaque molestias voluptates totam aliquam tenetur distinctio enim, ipsum inventore. Officia, animi necessitatibus!",
			id: Math.random(),
		},
		{
			label: "tailwind",
			content:
				" Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus reiciendis excepturi sapiente consequuntur quisquam perferendis suscipit fuga nihil, possimus iste!",
			id: Math.random(),
		},
	]

	return (
		<>
			<Accordion items={items} />
		</>
	)
}

export default AccordionPage
