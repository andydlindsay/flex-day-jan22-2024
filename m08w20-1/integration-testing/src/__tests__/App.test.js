import React from 'react';
import ReactDOM from 'react-dom'; 
import App from '../App';
import {render, fireEvent} from '@testing-library/react';

it('renders without crashing', () => { 
  const div = document.createElement('div'); 
  ReactDOM.render(<App />, div); 
  ReactDOM.unmountComponentAtNode(div); 
});

test('can toggle the isCheating boolean by clicking on the robot head icon', () => {
  const { getByTestId } = render(<App />);

  // get the robot head icon
  const robotHeadIcon = getByTestId('robot-head');

  // click on the robot head icon
  fireEvent.click(robotHeadIcon);

  // check that the robot head has the class "cheating"
  expect(robotHeadIcon).toHaveClass('cheating');

  // click on the robot head icon again
  fireEvent.click(robotHeadIcon);

  // check that the robot head does not have the class "cheating"
  expect(robotHeadIcon).not.toHaveClass('cheating');
});
