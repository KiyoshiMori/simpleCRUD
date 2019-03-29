import React, { Component } from 'react';
import stylus from './styles.styl';

export default class Header extends Component {
	render() {
		return (
			<div className={stylus.container}>
				<h1>simpleCrud</h1>
				<div className={stylus.buttonsGroup}>
					<h2>login</h2>
				</div>
			</div>
		);
	}
}