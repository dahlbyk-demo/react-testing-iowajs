import React from 'react';
import { shallow } from 'enzyme';

import TootButton from './TootButton';

describe('<TootButton />', () => {
  it('can render a <button>', () => {
    let app = shallow(<TootButton />);

    const button = app.find('button');

    expect(button.text()).toBe('Toot');
    expect(button.hasClass('btn')).toBe(true);
  });

  it('calls onClick prop on click', () => {
    let mockClick = jest.fn();

    let app = shallow(<TootButton onClick={mockClick} />);

    const button = app.find('button');
    button.simulate('click');

    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
