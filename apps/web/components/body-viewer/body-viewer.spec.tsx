import { render } from '@testing-library/react';

import BodyViewer from './body-viewer';

describe('BodyViewer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BodyViewer />);
    expect(baseElement).toBeTruthy();
  });
});
