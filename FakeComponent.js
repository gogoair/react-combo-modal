import React, { Component } from 'react';
import Modal from './Components/Modal.jsx';

export default class FakeComponent extends Component {
	constructor(props) {
		super(props);

		this.onCloseCallback = this.onCloseCallback.bind(this);

		this.state = {
			open: false,
		};
	}

	onCloseCallback(closeCallbackData) {
		this.setState({ open: closeCallbackData.open });
	}

	render() {
		const style = {
			background: {},
			holder: {},
			modal: {
				background: 'none',
			},
		};

		const customClassNames = {
			background: '',
			holder: '',
			modal: '',
		};

		return (
			<div>
				<a
					href="#"
					onClick={e => {
						e.preventDefault();
						this.setState({ open: true });
					}}
				>
					Open
				</a>
				<Modal
					open={this.state.open}
					onCloseCallback={this.onCloseCallback}
				>
					<form>
						<label htmlFor="name">Name</label>
						<input name="name" type="text" />
						<br />
						<label htmlFor="surname">Surname</label>
						<input name="surname" type="text" />
						<br />
						<label htmlFor="phone">Phone</label>
						<input name="phone" type="text" />
						<br />
						<label htmlFor="phone">Phone</label>
						<input name="phone" type="text" />
						<br />
						<label htmlFor="phone">Phone</label>
						<input name="phone" type="text" />
						<br />
						<label htmlFor="phone">Phone</label>
						<input name="phone" type="text" />
						<br />
						<label htmlFor="phone">Phone</label>
						<input name="phone" type="text" />
						<br />
						<label htmlFor="phone">Phone</label>
						<input name="phone" type="text" />
						<br />
						<label htmlFor="phone">Phone</label>
						<input name="phone" type="text" />
						<br />
						<label htmlFor="phone">Phone</label>
						<input name="phone" type="text" />
						<br />
						<label htmlFor="phone">Phone</label>
						<input name="phone" type="text" />
						<br />
						<label htmlFor="phone">Phone</label>
						<input name="phone" type="text" />
						<br />
						<label htmlFor="phone">Phone</label>
						<input name="phone" type="text" />
						<br />
						<label htmlFor="phone">Phone</label>
						<input name="phone" type="text" />
						<br />
						<label htmlFor="phone">Phone</label>
						<input name="phone" type="text" />
						<br />
						<label htmlFor="phone">Phone</label>
						<input name="phone" type="text" />
						<br />
						<label htmlFor="phone">Phone</label>
						<input name="phone" type="text" />
						<br />
						<label htmlFor="phone">Phone</label>
						<input name="phone" type="text" />
						<br />
						<label htmlFor="phone">Phone</label>
						<input name="phone" type="text" />
						<br />
						<label htmlFor="name">Name</label>
						<input name="name" type="text" />
						<br />
						<label htmlFor="surname">Surname</label>
						<input name="surname" type="text" />
						<br />
						<label htmlFor="phone">Phone</label>
						<input name="phone" type="text" />
						<br />
						<label htmlFor="phone">Phone</label>
						<input name="phone" type="text" />
						<br />
					</form>
				</Modal>
				<br />
				<div>asd</div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
		);
	}
}
