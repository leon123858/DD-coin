import { Layout, Button, Dropdown, Avatar } from 'antd';
import { login, logout } from '../utils/auth';
import { UserOutlined } from '@ant-design/icons';
import { useContext, useState } from 'react';
import { Context } from './Context';

const { Header: _Header } = Layout;

export const Header = () => {
	const { isLogin, photo, name, uid } = useContext(Context);
	const [isDropdownOpen, setDropdownOpen] = useState(false);

	return (
		<_Header
			style={{
				position: 'sticky',
				top: 0,
				zIndex: 1,
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			<h1 style={{ color: 'white' }}>DDC</h1>
			<div style={{ display: 'flex' }}>
				<Dropdown
					// trigger={['click']}
					placement='bottomRight'
					arrow
					open={isDropdownOpen}
					dropdownRender={() => (
						<div
							style={{
								background: 'white',
								padding: 20,
								borderRadius: 6,
								textAlign: 'left',
								boxShadow: '3px 3px 3px 3px rgba(208, 216, 243, 0.6)',
							}}
						>
							{!isLogin ? (
								<>
									<Button
										style={{ width: '100%' }}
										onClick={async () => {
											setDropdownOpen(false);
											await login();
										}}
									>
										login
									</Button>
								</>
							) : (
								<>
									<h3>{name}</h3>
									<p>id: {uid}</p>
									<Button
										style={{ width: '100%' }}
										onClick={async () => {
											setDropdownOpen(false);
											await logout();
										}}
									>
										logout
									</Button>
								</>
							)}
						</div>
					)}
				>
					<Avatar
						style={{ backgroundColor: '#87d068' }}
						size={'large'}
						src={isLogin ? photo || <UserOutlined /> : <UserOutlined />}
						onClick={() => {
							setDropdownOpen(!isDropdownOpen);
						}}
					/>
				</Dropdown>
			</div>
		</_Header>
	);
};
