import React, { Component } from 'react';
import stylus from './styles.styl';

import Heading from 'components/Heading';

export default class Header extends Component {
	render() {
		const { loggined, username } = this.props;

		return (
			<div className={stylus.container}>
				<Heading type="h1">simpleCrud</Heading>
				<div className={stylus.buttonsGroup}>
					{loggined
						? (
							<Heading type="h2">
								Hello, { username }!
							</Heading>
						)
						: (
							<Heading type="h2">login</Heading>
						)
					}
				</div>
			</div>
		);
	}
}