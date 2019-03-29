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
		size: PropTypes.oneOf(['small', 'default']),
		secondary: PropTypes.bool,
	};

	static defaultProps = {
		className: null,
		icon: null,
		size: 'default',
		secondary: false,
	};

	render() {
		const { children, className, icon, size, secondary, ...rest } = this.props;
		const classes = cx(
			styles.button,
			size && styles[`button${size}`],
			secondary && styles.buttonSecondary,
			className,
		);

		return (
			<div className={classes} {...rest}>
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
