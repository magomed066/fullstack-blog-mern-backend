import useNotify from '@/hooks/useNotify'
import { useUploadMutation } from '@/store/posts'
import { DeleteOutlined, UploadOutlined } from '@ant-design/icons'
import { Modal, Input, Button } from 'antd'
import { FC, useRef, useState } from 'react'

const UploadImage: FC<{ setImage: (i: string) => void }> = ({ setImage }) => {
	const [upload] = useUploadMutation()
	const [prevTitle, setPrevTitle] = useState('')
	const [previewLoading, setPreviewLoading] = useState(false)
	const [previewVisible, setPreviewVisible] = useState(false)
	const [previewImage, setPreviewImage] = useState('')

	const ref = useRef<any>(null)

	const handleClick = () => {
		ref?.current?.input.click()
	}

	const handleUpload = (e: any) => {
		const el = e.currentTarget as HTMLInputElement
		const file = el.files?.[0]

		const formData = new FormData()

		setPreviewLoading(true)

		if (file) {
			formData.append('image', file)

			setTimeout(() => {
				upload(formData)
					.unwrap()
					.then((res) => {
						setPrevTitle(res.url)
						setPreviewImage(res.url)
						setImage(res.url)
					})
					.catch((err) => {
						useNotify({
							type: 'error',
							message: err.data.message,
							duration: 2,
						})
					})
					.finally(() => {
						setPreviewLoading(false)
					})
			}, 400)
		}
	}

	return (
		<>
			<Input type="file" ref={ref} hidden onChange={handleUpload} />

			<Button loading={previewLoading} type="primary" onClick={handleClick}>
				Upload Image <UploadOutlined />
			</Button>

			{previewImage && (
				<Button danger type="primary" onClick={() => setPreviewImage('')}>
					<DeleteOutlined />
				</Button>
			)}
			{previewImage && (
				<Button onClick={() => setPreviewVisible(true)}>Show preview</Button>
			)}

			<Modal
				visible={previewVisible}
				title={prevTitle}
				footer={null}
				onCancel={() => setPreviewVisible(false)}
			>
				<img
					alt="example"
					style={{ width: '100%' }}
					src={
						previewImage.startsWith('upload')
							? 'http://localhost:4444/' + previewImage
							: previewImage
					}
				/>
			</Modal>
		</>
	)
}

export default UploadImage
