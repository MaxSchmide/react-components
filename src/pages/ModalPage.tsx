import { useState } from "react"
import Button from "../components/Button"
import Modal from "../components/Modal"
const ModalPage = () => {
	const [showModal, setShowModal] = useState(false)
	const handleClick = () => {
		setShowModal(true)
	}
	const handleClose = () => {
		setShowModal(false)
	}
	const actionBar = (
		<div>
			<Button onClick={handleClose} success>
				I Accept
			</Button>
		</div>
	)
	const modal = (
		<Modal onClose={handleClose} actionBar={actionBar}>
			<p>Here is important agreement for you to accept</p>
		</Modal>
	)
	return (
		<div>
			<Button onClick={handleClick} primary>
				Open Modal
			</Button>
			{showModal && modal}
		</div>
	)
}
export default ModalPage
