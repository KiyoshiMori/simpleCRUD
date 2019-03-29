import React, { Component } from 'react';
import stylus from './styles.styl';

import Heading from 'components/Heading';

export default class Header extends Component {
	render() {
		return (
			<div className={stylus.container}>
				<Heading type="h1">simpleCrud</Heading>
				<div className={stylus.buttonsGroup}>
					<Heading type="h2">login</Heading>
				</div>
			</div>
		);
	}
}