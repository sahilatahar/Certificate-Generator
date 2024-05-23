function isoToDDMMYYYY(isoString) {
	// Parse the ISO string to a Date object
	const date = new Date(isoString)

	// Extract the day, month, and year
	const day = String(date.getDate()).padStart(2, "0")
	const month = String(date.getMonth() + 1).padStart(2, "0") // Months are zero-indexed
	const year = date.getFullYear()

	// Construct the DD/MM/YYYY format
	return `${day}/${month}/${year}`
}

export { isoToDDMMYYYY }
