export const uploadImage = (req, res) => {
	res.json({
		success: true,
		url: `uploads/${req.file.originalname}`,
	})
}
