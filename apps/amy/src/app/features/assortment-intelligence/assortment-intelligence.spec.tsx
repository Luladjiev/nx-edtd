import { render } from '@testing-library/react';

import AssortmentIntelligence from './assortment-intelligence';

describe('AssortmentIntelligence', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AssortmentIntelligence />);
    expect(baseElement).toBeTruthy();
  });
});
