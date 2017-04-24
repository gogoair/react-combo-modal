import React, {Component} from 'react';
import Modal from './Components/Modal.jsx';

export default class FakeComponent extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div>
				<Modal>
					<from>
						<label htmlFor="name">Name</label>
						<input name="name" type="text"/>
						<br/>
						<label htmlFor="surname">Surname</label>
						<input name="surname" type="text"/>
						<br/>
						<label htmlFor="phone">Phone</label>
						<input name="phone" type="text"/>
					</from>
				</Modal>
				<br/>
			</div>
		);
	}
}