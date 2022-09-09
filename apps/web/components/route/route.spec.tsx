import { render } from '@testing-library/react';

import Route from './route';

describe('Route', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Route />);
    expect(baseElement).toBeTruthy();
  });
});
