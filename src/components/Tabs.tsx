import { Tabs as _Tabs } from 'antd';
import { List } from './List';

const tabs = [
	{
		label: `coins`,
		key: '1',
		children: <List></List>,
	},
	{
		label: `mails`,
		key: '2',
		children: <List></List>,
	},
	{
		label: `logs`,
		key: '3',
		children: <List></List>,
	},
	{
		label: `friends`,
		key: '4',
		children: <List></List>,
	},
];

export const Tabs = () => {
	return (
		<div>
			<_Tabs
				defaultActiveKey='1'
				type='card'
				size={'large'}
				centered
				style={{
					marginBottom: 32,
				}}
				items={tabs}
			/>
		</div>
	);
};
