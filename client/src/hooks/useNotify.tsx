import { notification } from 'antd'
import { NotificationPlacement } from 'antd/lib/notification'

type Props = {
	type: 'info' | 'warning' | 'error' | 'success'
	message: string
	duration?: number
	placement?: NotificationPlacement
}

const useNotify = (props: Props) => {
	const { message, duration, type, placement } = props

	return notification[type]({
		message,
		placement: placement || 'topRight',
		duration,
	})
}

export default useNotify
