import { fetchCore, coreAdapter, coreReducer } from './core.slice';

describe('core reducer', () => {
  it('should handle initial state', () => {
    const expected = coreAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(coreReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchCores', () => {
    let state = coreReducer(undefined, fetchCore.pending(null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = coreReducer(state, fetchCore.fulfilled([{ id: 1 }], null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = coreReducer(
      state,
      fetchCore.rejected(new Error('Uh oh'), null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
      })
    );
  });
});
