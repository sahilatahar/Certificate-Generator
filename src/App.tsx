import { pdf } from "@react-pdf/renderer"
import { ChangeEvent, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { isAfter, isBefore } from "validator"
import PdfComponent from "./components/PdfComponent"
import Footer from "./components/Footer"
import { FormData } from "./types/app"

function App() {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		field: "",
		startingDate: "",
		endingDate: "",
		issueDate: "",
	})

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const validateForm = () => {
		const startingDate = new Date(formData.startingDate)
		const endingDate = new Date(formData.endingDate)
		const issueDate = new Date(formData.issueDate)

		if (formData.name.trim() === "") {
			toast.error("Name is required")
			return false
		} else if (formData.name.trim().length > 40) {
			toast.error("Name must be less than 50 characters")
			return false
		} else if (formData.field.trim() === "") {
			toast.error("Field is required")
			return false
		} else if (formData.field.trim().length > 50) {
			toast.error("Field must be less than 50 characters")
			return false
		} else if (isNaN(startingDate.getDate())) {
			toast.error("Starting date is required")
			return false
		} else if (isNaN(endingDate.getDate())) {
			toast.error("Ending date is required")
			return false
		} else if (!isBefore(startingDate.toString(), endingDate.toString())) {
			toast.error("Starting date must be before ending date")
			return false
		} else if (isNaN(issueDate.getDate())) {
			toast.error("Certificate Issue date is required")
			return false
		} else if (!isAfter(issueDate.toString(), endingDate.toString())) {
			toast.error("Issue date must be after ending date")
			return false
		}
		return true
	}

	const handleGenerate = async () => {
		if (!validateForm()) return
		const blob = await pdf(<PdfComponent formData={formData} />).toBlob()
		const url = URL.createObjectURL(blob)
		window.open(url, "_blank")
	}

	return (
		<div className="min-h-screen flex flex-col">
			<main className="lg:w-5/6 xl:w-2/3 flex items-center gap-8 flex-col px-4 mx-auto justify-center flex-grow">
				<Toaster position="top-right" />
				<header className="space-y-2 pt-12 md:pt-8">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sand-900 text-center">
						Certificate Generator
					</h1>
					<p className="text-center">
						Generate your own <b>CodeSoft</b> certificate by filling
						out the form below.
					</p>
				</header>
				<main className="space-y-2 w-full">
					<div className="flex gap-2 w-full flex-col sm:flex-row">
						<div className="input-group">
							<label htmlFor="name">Full Name</label>
							<input
								type="text"
								placeholder="Enter your name"
								name="name"
								value={formData.name}
								onChange={handleOnChange}
								id="name"
								className="input"
							/>
						</div>
						<div className="input-group">
							<label htmlFor="field">
								Field (e.g. Web Development)
							</label>
							<input
								type="text"
								placeholder="Enter your field"
								name="field"
								value={formData.field}
								onChange={handleOnChange}
								id="field"
								className="input"
							/>
						</div>
					</div>
					<div className="flex gap-2 w-full flex-col sm:flex-row">
						<div className="input-group">
							<label htmlFor="startingDate">Starting Date</label>
							<input
								type="date"
								name="startingDate"
								onChange={handleDateChange}
								id="startingDate"
								className="input"
							/>
						</div>
						<div className="input-group">
							<label htmlFor="endingDate">Ending Date</label>
							<input
								type="date"
								name="endingDate"
								onChange={handleDateChange}
								id="endingDate"
								className="input"
							/>
						</div>
					</div>
					<div className="input-group">
						<label htmlFor="issueDate">Issue Date</label>
						<input
							type="date"
							name="issueDate"
							onChange={handleDateChange}
							id="issueDate"
							className="input"
						/>
					</div>
				</main>
				<button
					className="bg-sand-700 text-white rounded-md p-3 w-full font-semibold text-lg"
					onClick={handleGenerate}
				>
					Generate Certificate
				</button>
			</main>
			<Footer />
		</div>
	)
}

export default App
