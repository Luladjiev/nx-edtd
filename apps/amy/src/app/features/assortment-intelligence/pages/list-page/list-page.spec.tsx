import { render } from '@testing-library/react';

import ListPage from './list-page';

describe('ListPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListPage />);
    expect(baseElement).toBeTruthy();
  });
});
