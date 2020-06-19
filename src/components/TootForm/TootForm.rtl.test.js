import React from 'react';
import { render } from '@testing-library/react';

import TootForm from './TootForm';

describe('<TootForm />', () => {
  it('has a Toot button', () => {
    let { getByText } = render(<TootForm />);

    expect(getByText('Toot')).toBeInTheDocument();
  })

  it('has a Toot button by id', () => {
    let { getByTestId } = render(<TootForm />);

    expect(getByTestId('toot-button')).toHaveTextContent('Toot');
  })
});
