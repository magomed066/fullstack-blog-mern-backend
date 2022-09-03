import { Button, Card, Input } from '@/lib/ui'
import { FC, useState } from 'react'
import styles from './index.module.scss'
import { Props } from './types'

import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'

import MDEditor from '@uiw/react-md-editor'

const AddPostForm: FC<Props> = ({
	data,
	handleChange,
	handleSubmit,
	setText,
	text,
}) => {
	return (
		<Card className={styles.card}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<Input
					name="title"
					label="Title"
					value={data.title}
					onChange={handleChange}
				/>
				<Input
					name="tags"
					label="Tags"
					value={data.tags}
					onChange={handleChange}
				/>

				<MDEditor
					value={text}
					onChange={(e) => {
						if (e?.length) {
							setText(e)
						}
					}}
					className={styles.editor}
				/>

				<Button variant="primary" type="submit">
					Create
				</Button>
			</form>
		</Card>
	)
}

export default AddPostForm
