import React from 'react';
import { Layout } from 'antd';
import './index.css';
import { Header } from './components/Header';
import { Tabs } from './components/Tabs';

const { Content, Footer } = Layout;

const App: React.FC = () => {
	return (
		<Layout>
			<Header></Header>
			<br></br>
			<Content className='site-layout' style={{ padding: '0 50px' }}>
				<Tabs></Tabs>
			</Content>
			<Footer style={{ textAlign: 'center' }}>
				DDC ©2023 Created by Leon Lin
			</Footer>
		</Layout>
	);
};

export default App;
