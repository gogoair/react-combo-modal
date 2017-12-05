import React from 'react';
import Modal from '../Components/Modal.jsx';

import { mount } from 'enzyme';
import sinon from 'sinon';
import {expect} from 'chai';

const mockFunction = _ => {};

describe('Initialization of component', () => {

    beforeEach(()=>{
        sinon.spy(Modal.prototype, 'componentDidMount');
    });

    afterEach(()=>{
        Modal.prototype.componentDidMount.restore();
    });

    it('mounts', () => {
        const modal = mount(<Modal onCloseCallback={mockFunction} />);

        expect(Modal.prototype.componentDidMount.calledOnce).to.be.true;

        modal.unmount();
    });

    it('renders the child component when open', () => {
        const modal = mount(<Modal open onCloseCallback={mockFunction}><div id="mock-div"></div></Modal>);

        expect(document.getElementById('mock-div')).to.exist;

        modal.unmount();
    });

    it('calls close callback on click outside when closeOnClickOutside is true', done => {
        const cb = sinon.spy();
        const modal = mount(<Modal open closeOnClickOutside onCloseCallback={cb} />);

        const clickTester = () => {
            expect(cb.calledOnce).to.be.true;
            modal.unmount();
            window.removeEventListener('click', clickTester);
            done();
        };

        window.addEventListener('click', clickTester);

        const event = new window.MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        });
         
        document.body.querySelector('.ReactComboModalBackground').dispatchEvent(event);
    });

    it("doesn't call close callback on click outside when closeOnClickOutside is false", done => {
        const cb = sinon.spy();
        const modal = mount(<Modal open onCloseCallback={cb} />);

        const clickTester = () => {
            expect(cb.notCalled).to.be.true;
            modal.unmount();
            window.removeEventListener('click', clickTester);
            done();
        };

        window.addEventListener('click', clickTester);

        const event = new window.MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        });
         
        document.body.querySelector('.ReactComboModalBackground').dispatchEvent(event);
    });

    it('calls close callback on click outside with custom class names', done => {
        const cb = sinon.spy();
        const modal = mount(<Modal open closeOnClickOutside onCloseCallback={cb} customClassNames={{
            background: 'CustomBackground',
            holder: 'CustomHolder',
            modal: 'CustmModal',
        }} />);

        const clickTester = () => {
            expect(cb.calledOnce).to.be.true;
            modal.unmount();
            window.removeEventListener('click', clickTester);
            done();
        };

        window.addEventListener('click', clickTester);

        const event = new window.MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        });
         
        document.body.querySelector('.CustomBackground').dispatchEvent(event);
    });

    it("doesn't call close callback on click inside the modal", done => {
        const cb = sinon.spy();
        const modal = mount(<Modal open closeOnClickOutside onCloseCallback={cb}><div id="mock-div"></div></Modal>);

        const clickTester = () => {
            expect(cb.notCalled).to.be.true;
            modal.unmount();
            window.removeEventListener('click', clickTester);
            done();
        };

        window.addEventListener('click', clickTester);

        const event = new window.MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        });
         
        document.getElementById('mock-div').dispatchEvent(event);
    });

    it('calls close callback on ESC when ignoreEsc is false', done => {
        const cb = sinon.spy();
        const modal = mount(<Modal open onCloseCallback={cb} />);

        const keyTester = () => {
            expect(cb.calledOnce).to.be.true;
            modal.unmount();
            window.removeEventListener('keyup', keyTester);
            done();
        };

        window.addEventListener('keyup', keyTester);

        const event = new window.KeyboardEvent('keyup', {
            key: 'Escape',
            code: 'Escape',
            keyCode: 27,
            which: 27,
            bubbles: true,
            cancelable: true,
        });
         
        document.body.querySelector('.ReactComboModalBackground').dispatchEvent(event);
    });

    it("doesn't call close callback on ESC when ignoreEsc is false", done => {
        const cb = sinon.spy();
        const modal = mount(<Modal open ignoreEsc onCloseCallback={cb} />);

        const keyTester = () => {
            expect(cb.notCalled).to.be.true;
            modal.unmount();
            window.removeEventListener('keyup', keyTester);
            done();
        };

        window.addEventListener('keyup', keyTester);

        const event = new window.KeyboardEvent('keyup', {
            key: 'Escape',
            code: 'Escape',
            keyCode: 27,
            which: 27,
            bubbles: true,
            cancelable: true,
        });
         
        document.body.querySelector('.ReactComboModalBackground').dispatchEvent(event);
    });

    it('starts closed and opens when open props is updated to true', done => {
        const modal = mount(<Modal onCloseCallback={mockFunction}><div id="mock-div"></div></Modal>);

        expect(document.getElementById('mock-div')).to.be.null;

        modal.setProps({open: true});

        expect(document.getElementById('mock-div')).to.exist;

        modal.unmount();
        done();
    });

    it('starts open and closes when open props is updated to false', done => {
        const modal = mount(<Modal open onCloseCallback={mockFunction}><div id="mock-div"></div></Modal>);


        expect(document.getElementById('mock-div')).to.exist;

        modal.setProps({open: false});

        expect(document.getElementById('mock-div')).to.be.null;

        modal.unmount();
        done();
    });
});