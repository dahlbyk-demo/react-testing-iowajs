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

    expect(app.state('clicks')).toBe(0);
  });

  it('calls onClick prop on click and counts clicks', () => {
    let mockClick = jest.fn();

    let app = shallow(<TootButton onClick={mockClick} />);

    const button = app.find('button');
    button.simulate('click');

    expect(mockClick).toHaveBeenCalledTimes(1);
    expect(app.state('clicks')).toBe(1);

    // Demo
    expect(app.state('person')).toHaveProperty('firstName', 'Keith');
    expect(app.state('person').firstName).toBe('Keith');
  });

  it('renders as expected', () => {
    // Also possible with enzyme? https://github.com/adriantoine/enzyme-to-json

    let obj = renderer.create(<TootButton />).toJSON();
    // console.log(obj);

    expect(obj).toMatchSnapshot();
  });
});
