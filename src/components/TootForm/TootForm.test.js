import React from 'react';
import { shallow, mount } from 'enzyme';

import TootForm from './TootForm';

describe('<TootForm />', () => {
  it('has a TootButton', () => {
    let app = shallow(<TootForm />);

    let button = app.find('form TootButton');

    expect(button.exists()).toBe(true);
  })

  it('has a button', () => {
    let app = mount(<TootForm />);

    let button = app.find('form button');

    expect(button.exists()).toBe(true);
  })
});
