import { AddPostForm } from '@/components'
import { AlertContext } from '@/context/alert/context'
import { Button, Input, Spinner, UploadBtn } from '@/lib/ui'
import { useCreatePostMutation, useUploadMutation } from '@/store/posts'
import axios from 'axios'
import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

const AddPost = () => {
	const [createPost, { isLoading }] = useCreatePostMutation()
	const [upload, { isLoading: previewLoading }] = useUploadMutation()
	const { open } = useContext(AlertContext)
	const nav = useNavigate()
	const [data, setData] = useState({
		title: '',
		tags: '',
		imageUrl: '',
	})
	const [text, setText] = useState<string>('')

	const handleImageUpload = (e: Event) => {
		const el = e.currentTarget as HTMLInputElement
		const file = el.files?.[0]

		const formData = new FormData()

		if (file) {
			formData.append('image', file)

			upload(formData)
				.unwrap()
				.then((res) => {
					setData((prev) => ({
						...prev,
						imageUrl: res.url,
					}))
				})
				.catch((err) => {
					open('error', err.data.message)
				})
		}
	}

	const handleDeletePreview = () => {
		setData((prev) => ({ ...prev, imageUrl: '' }))
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	const checkValidData = (obj: typeof data): boolean => {
		let emptyValues = 0

		Object.values(obj).forEach((item) => {
			if (!item.length) {
				emptyValues++
			}
		})

		return emptyValues > 0 ? false : true
	}

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()

		if (!checkValidData(data)) {
			open('error', 'Input all fields')
			return
		}

		if (!text.length) {
			open('error', 'Input text')

			return
		}

		const transformedData = {
			...data,
			text,
			tags: data.tags.split(','),
		}

		createPost(transformedData)
			.unwrap()
			.then((res) => {
				setTimeout(() => nav('/'), 200)
			})
			.catch((err) => {
				open('error', err.data.message)
			})
	}

	if (isLoading || previewLoading) {
		return <Spinner />
	}

	return (
		<div className={styles.add}>
			<div className={styles.header}>
				<Link to={'/'} className={styles['add__link']}>
					Back
				</Link>
			</div>

			<div className={styles.content}>
				<div className={styles['add-image']}>
					<div className={styles['add-image-actions']}>
						{!data.imageUrl ? (
							<UploadBtn onChange={handleImageUpload} />
						) : (
							<Button variant="danger" onClick={handleDeletePreview}>
								Delete
							</Button>
						)}
					</div>

					{data.imageUrl && (
						<img
							className={styles.preview}
							src={`http://localhost:4444/${data.imageUrl}`}
						/>
					)}
				</div>

				<AddPostForm
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					data={data}
					text={text}
					setText={setText}
				/>
			</div>
		</div>
	)
}

export default AddPost
