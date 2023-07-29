import React from 'react';
import { Layout, theme } from 'antd';
import './index.css';
import { Header } from './components/Header';

const { Content, Footer } = Layout;

const App: React.FC = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Layout>
			<Header></Header>
			<br></br>
			<Content className='site-layout' style={{ padding: '0 50px' }}>
				<div
					style={{ padding: 24, minHeight: 380, background: colorBgContainer }}
				>
					Content
				</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>
				DDC ©2023 Created by Leon Lin
			</Footer>
		</Layout>
	);
};

export default App;
