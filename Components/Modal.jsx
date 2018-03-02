import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

export default class Modal extends React.Component {
	constructor(props) {
		super(props);

		this.closeCallback = this.closeCallback.bind(this);
		this.globalMouseClick = this.globalMouseClick.bind(this);
		this.globalKeypress = this.globalKeypress.bind(this);
	}

	componentDidMount() {
		this.popup = document.createElement('div');
		document.body.appendChild(this.popup);
		this.renderLayer();

		if (this.props.open) {
			this.addEventListeners();
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.open !== this.props.open) {
			this.renderLayer();

			if (!prevProps.open && this.props.open) {
				document.body.style.overflow = 'hidden';
				this.addEventListeners();
			} else {
				document.body.style.overflow = 'auto';
				this.removeEventListeners();
			}
		}
	}

	componentWillUnmount() {
		if (document.body) {
			document.body.removeChild(this.popup);
		}

		this.removeEventListeners();
	}

	globalMouseClick(e) {
		if (
			(e.target.className == this.props.customClassNames.holder ||
				e.target.className == this.props.customClassNames.background) &&
			this.props.closeOnClickOutside
		) {
			this.props.onCloseCallback({
				open: false,
			});
		}
	}

	globalKeypress(e) {
		if (e.keyCode == 27 && !this.props.ignoreEsc) {
			this.props.onCloseCallback({
				open: false,
			});
		}
	}

	closeCallback(e) {
		e.preventDefault();
		this.props.onCloseCallback({
			open: false,
		});
	}

	addEventListeners() {
		window.addEventListener('click', this.globalMouseClick);
		window.addEventListener('keyup', this.globalKeypress);
	}

	removeEventListeners() {
		window.removeEventListener('click', this.globalMouseClick);
		window.removeEventListener('keyup', this.globalKeypress);
	}

	createModalWrapper(content) {
		return (
			<div>
				{this.props.open && (
					<div
						style={this.props.style && this.props.style.background}
						className={
							this.props.customClassNames.background || Modal.defaultProps.customClassNames.background
						}
					>
						<div
							style={this.props.style && this.props.style.holder}
							className={this.props.customClassNames.holder || Modal.defaultProps.customClassNames.holder}
						>
							<div
								style={this.props.style && this.props.style.modal}
								className={
									this.props.customClassNames.modal || Modal.defaultProps.customClassNames.modal
								}
							>
								{content}
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}

	renderLayer() {
		render(this.createModalWrapper(this.props.children), this.popup);
	}

	render() {
		return <div />;
	}
}

Modal.propTypes = {
	open: PropTypes.bool,
	onCloseCallback: PropTypes.func.isRequired,
	style: PropTypes.object,
	customClassNames: PropTypes.object,
	closeOnClickOutside: PropTypes.bool,
	ignoreEsc: PropTypes.bool,
};

Modal.defaultProps = {
	customClassNames: {
		background: 'ReactComboModalBackground',
		holder: 'ReactComboModalHolder',
		modal: 'ReactComboModal',
	},
};
