import {
	Document,
	Image,
	Page,
	StyleSheet,
	Text,
	Font,
} from "@react-pdf/renderer"
import { isoToDDMMYYYY } from "../utils/date"
import certificateImg from "../assets/certificate.jpg"
import lora from "../assets/fonts/lora/Lora-Regular.ttf"
import loraBold from "../assets/fonts/lora/Lora-Bold.ttf"
import { FormData } from "../types/app"

Font.register({
	family: "Lora",
	fonts: [{ src: lora }, { src: loraBold, fontWeight: "bold" }],
})

// Create styles
const styles = StyleSheet.create({
	page: {
		backgroundColor: "#ffffff",
		position: "relative",
	},
	img: {
		objectFit: "cover",
		height: "99%",
	},
	name: {
		width: "100%",
		color: "#000000",
		fontSize: "26px",
		fontWeight: "bold",
		position: "absolute",
		top: "41%",
		right: "0%",
		transform: "translateY(-50%)",
		textTransform: "uppercase",
		textAlign: "center",
		fontFamily: "Lora",
	},
	field: {
		width: "100%",
		color: "#000000",
		fontSize: "17px",
		fontWeight: "bold",
		position: "absolute",
		top: "53%",
		right: "0%",
		transform: "translateY(-50%)",
		textTransform: "uppercase",
		textAlign: "center",
		fontFamily: "Lora",
	},
	date: {
		color: "#000000",
		fontSize: "16px",
		fontWeight: "bold",
		position: "absolute",
		top: "49%",
		right: "16.5%",
	},
	issueDate: {
		color: "#000000",
		fontSize: "14px",
		fontWeight: "semibold",
		position: "absolute",
		bottom: "6.5%",
		right: "19%",
	},
})

// Create Document Component
const PdfComponent = ({ formData }: { formData: FormData }) => {
	const { name, field, startingDate, endingDate, issueDate } = formData
	const date = `${isoToDDMMYYYY(startingDate)} to ${isoToDDMMYYYY(
		endingDate
	)}.`

	return (
		<Document>
			<Page size="A4" style={styles.page} orientation="landscape">
				<Image src={certificateImg} style={styles.img} />
				<Text style={styles.name}>{name}</Text>
				<Text style={styles.field}>{field}</Text>
				<Text style={styles.date}>{date}</Text>
				<Text style={styles.issueDate}>{isoToDDMMYYYY(issueDate)}</Text>
			</Page>
		</Document>
	)
}

export default PdfComponent
