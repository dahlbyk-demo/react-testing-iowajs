import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import TootButton from './TootButton';

describe('<TootButton />', () => {
  it('can render a <button>', () => {
    let app = shallow(<TootButton />);

    const button = app.find('button');

    expect(button.text()).toBe('Toot');
    expect(button.hasClass('btn')).toBe(true);
    expect(button.hasClass('btn-primary')).toBe(true);
  });

  it('calls onClick prop on click', () => {
    let mockClick = jest.fn();

    let app = shallow(<TootButton onClick={mockClick} />);

    const button = app.find('button');
    button.simulate('click');

    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it('renders as expected', () => {
    let obj = renderer.create(<TootButton />).toJSON();
    // console.log(obj);

    expect(obj).toMatchSnapshot();
  });
});
