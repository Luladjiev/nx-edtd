import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useMyHook from './use-my-hook';

describe('useMyHook', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useMyHook());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
