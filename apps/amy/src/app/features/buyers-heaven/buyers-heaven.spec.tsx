import { render } from '@testing-library/react';

import BuyersHeaven from './buyers-heaven';

describe('BuyersHeaven', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BuyersHeaven />);
    expect(baseElement).toBeTruthy();
  });
});
