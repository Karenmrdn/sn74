import React from "react";
import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer";

describe('ProfileStatus component', () => {
    test('status form props should be in the state', () => {
        const component = create(<ProfileStatus status='new status'/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('new status');
    });

    test('after creation span should be displayed', () => {
        const component = create(<ProfileStatus status='new status'/>);
        const root = component.root;
        const span = root.findByType('span');
        expect(span).not.toBeNull();
    });

    test('after creation input should not be displayed', () => {
        const component = create(<ProfileStatus status='new status'/>);
        const root = component.root;
        expect(()=>{
            const input = root.findByType('input');
        }).toThrow();
    });

    test('after creation span should contain correct status value', () => {
        const component = create(<ProfileStatus status='new status'/>);
        const root = component.root;
        const span = root.findByType('span');
        expect(span.children[0]).toBe('new status');
    });

    test('input should be displayed in edit mode instead of span', () => {
        const component = create(<ProfileStatus status='new status'/>);
        const root = component.root;
        const span = root.findByType('span');
        span.props.onDoubleClick();
        const input = root.findByType('input');
        expect(input.props.value).toBe('new status');
    });

    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status='new status' updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});