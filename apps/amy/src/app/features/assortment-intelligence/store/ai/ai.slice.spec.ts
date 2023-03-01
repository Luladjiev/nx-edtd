import { fetchAi, aiAdapter, aiReducer } from './ai.slice';

describe('ai reducer', () => {
  it('should handle initial state', () => {
    const expected = aiAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(aiReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchAis', () => {
    let state = aiReducer(undefined, fetchAi.pending(null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = aiReducer(state, fetchAi.fulfilled([{ id: 1 }], null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = aiReducer(state, fetchAi.rejected(new Error('Uh oh'), null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
      })
    );
  });
});
