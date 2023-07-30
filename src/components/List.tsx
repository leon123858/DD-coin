import { Avatar, List as _List } from 'antd';

const data = [
	{
		title: 'Ant Design Title 1',
	},
	{
		title: 'Ant Design Title 2',
	},
	{
		title: 'Ant Design Title 3',
	},
	{
		title: 'Ant Design Title 4',
	},
];

export const List = () => (
	<_List
		itemLayout='horizontal'
		dataSource={data}
		renderItem={(item, index) => (
			<_List.Item>
				<_List.Item.Meta
					avatar={
						<Avatar
							src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
						/>
					}
					title={<a href='https://ant.design'>{item.title}</a>}
					description='Ant Design, a design language for background applications, is refined by Ant UED Team'
				/>
			</_List.Item>
		)}
	/>
);
