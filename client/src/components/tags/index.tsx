import { Card, List, Skeleton, Typography } from 'antd'
import styles from './index.module.scss'

const Tags = ({ tags, isLoading }: { tags: string[]; isLoading: boolean }) => {
	return (
		<Card>
			<Skeleton loading={isLoading}>
				<List
					header={<Typography.Title level={4}>Tags</Typography.Title>}
					dataSource={tags}
					renderItem={(item) => <List.Item>{item}</List.Item>}
				/>
			</Skeleton>
		</Card>
	)
}

export default Tags
