import { render } from '@testing-library/react';

import PhantomCore from './phantom-core';

describe('PhantomCore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhantomCore />);
    expect(baseElement).toBeTruthy();
  });
});
