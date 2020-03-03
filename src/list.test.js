import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import renderer from 'react-test-renderer';

it ('renders without crashing',()=>{
    const div= document.createElement('div');
    ReactDOM.render(<List cards={[{id: 'a',title:'First card',content:'lorem ipsum'}]} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', ()=>{
    const tree=renderer.create(<List cards={[{id: 'a',title:'First card',content:'lorem ipsum'}]} />).toJSON();
    expect(tree).toMatchSnapshot();
});
