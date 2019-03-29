import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles.styl';

export default class Row extends PureComponent {
	static propTypes = {
		children: PropTypes.node.isRequired,
		className: PropTypes.string,
		icon: PropTypes.oneOf(['add']),
	};

	static defaultProps = {
		className: null,
		icon: null,
	};

	render() {
		const { children, className, icon } = this.props;
		const classes = cx(
			styles.button,
			className,
		);

		return (
			<div className={classes}>
				{children}
				{icon && (
					<div className={styles.icon}>
						<FontAwesomeIcon icon={icon} />
					</div>
				)}
			</div>
		);
	}
}
