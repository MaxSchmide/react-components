import React from "react"
import { GoArchive, GoBell, GoCloudDownload } from "react-icons/go"
import Button from "../components/Button"
const ButtonPage= () => {
	const handleClick = () => {}
	return (
		<div>
			<div>
				<Button className={"mb-5"} onClick={handleClick}>
					<GoBell />
					Default
				</Button>
			</div>
			<div>
				<Button primary rounded>
					<GoCloudDownload />
					Rounded primary
				</Button>
			</div>
			<div>
				<Button secondary>
					<GoArchive />
					Secondary
				</Button>
			</div>
			<div>
				<Button outline warning>
					Warning outline
				</Button>
			</div>
			<div>
				<Button success>Success</Button>
			</div>
			<div>
				<Button danger rounded>
					Danger rounded
				</Button>
			</div>
		</div>
	)
}

export default ButtonPage
