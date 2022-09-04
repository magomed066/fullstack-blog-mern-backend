import { FC, useMemo } from 'react'
import styles from './index.module.scss'
import { Props } from './types'

// import '@uiw/react-md-editor/markdown-editor.css'
// import '@uiw/react-markdown-preview/markdown.css'

// import MDEditor from '@uiw/react-md-editor'
import { Button, Card, Form, Input } from 'antd'
import { Post } from '@/types/posts'

import SimpleMdeReact from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'

const AddPostForm: FC<Props> = ({ handleSubmit, setText, text, loading }) => {
	const onFinish = (data: Pick<Post, 'title' | 'text'> & { tags: string }) => {
		handleSubmit(data)
	}

	const options = useMemo(
		() => ({
			placeholder: 'Input text...',
			autoFocus: true,
			status: false,
		}),
		[],
	)

	return (
		<Card className={styles.card}>
			<Form
				className={styles.form}
				name="basic"
				layout="vertical"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 8 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				autoComplete="off"
			>
				<Form.Item
					label="Title"
					name="title"
					rules={[{ required: true, message: 'Please input your title!' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Tags"
					name="tags"
					rules={[{ required: false, message: 'Please input your tags!' }]}
				>
					<Input />
				</Form.Item>

				<SimpleMdeReact value={text} onChange={setText} options={options} />

				{/* <MDEditor
					value={text}
					onChange={(e: any) => {
						setText(e)
					}}
					className={styles.editor}
				/> */}

				<Form.Item>
					<Button type="primary" htmlType="submit" loading={loading}>
						Create
					</Button>
				</Form.Item>
			</Form>
		</Card>
	)
}

export default AddPostForm
