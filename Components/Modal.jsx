import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

export default class Modal extends React.Component {

	constructor(props) {
		super(props);

		this.closeCallback = this.closeCallback.bind(this);
		this.globalMouseClick = this.globalMouseClick.bind(this);
	}

	componentDidMount() {
		this.popup = document.createElement("div");
		document.body.appendChild(this.popup);
		this.renderLayer();

		window.addEventListener('click', this.globalMouseClick);
	}

	componentDidUpdate(lastProps) {
		this.renderLayer();

		if (this.props.open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}

	componentWillUnmount() {
		document.body.removeChild(this.popup);

		window.removeEventListener('click', this.globalMouseClick);
	}

	globalMouseClick(e) {
		if (e.target.className == 'ReactComboModalHolder' || e.target.className == 'ReactComboModalBackground') {
			this.props.onCloseCallback({
				open: false
			})
		}
	}

	closeCallback(e) {
		e.preventDefault();
		this.props.onCloseCallback({
			open: false
		})
	}

	createModalWrapper(content) {
		return (
			<div>
				{
					this.props.open && <div style={this.props.style.background}
						className={this.props.customClassNames && this.props.customClassNames.background ? this.props.customClassNames.background : 'ReactComboModalBackground'}>
						<div style={this.props.style.holder}
							className={this.props.customClassNames && this.props.customClassNames.holder ? this.props.customClassNames.holder : 'ReactComboModalHolder'}>
							<div style={this.props.style.modal}
								className={this.props.customClassNames && this.props.customClassNames.modal ? this.props.customClassNames.modal : 'ReactComboModal'}>
								{content}
							</div>
						</div>
					</div>
				}
			</div>
		)
	}

	renderLayer() {
		render(this.createModalWrapper(this.props.children), this.popup);
	}

	render() {
		return <div></div>;
	}
}

Modal.propTypes = {
	open: PropTypes.PropTypes.bool.isRequired,
	onCloseCallback: PropTypes.PropTypes.func.isRequired,
	style: PropTypes.PropTypes.object,
	customClassNames: PropTypes.PropTypes.object
};
