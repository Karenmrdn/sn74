import React from "react";
import Paginator from "./Paginator";
import {create} from 'react-test-renderer';

describe('Paginator component tests', ()=>{
    test('pages count is 11 but should be showed only 10', () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1}/>);
        const root = component.root;
        const spans = root.findAllByType('span');
        expect(spans.length).toBe(10);
    });

    test('if pages count more than 10 button NEXT should be present', () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1}/>);
        const root = component.root;
        const nextButton = root.findAllByType('button');
        expect(nextButton.length).toBe(1);
    });
})