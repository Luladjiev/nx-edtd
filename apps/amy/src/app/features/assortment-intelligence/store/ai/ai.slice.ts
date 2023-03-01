import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

export const AI_FEATURE_KEY = 'ai';

/*
 * Update these interfaces according to your requirements.
 */
export interface AiEntity {
  id: number;
}

export interface AiState extends EntityState<AiEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string;
}

export const aiAdapter = createEntityAdapter<AiEntity>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchAi())
 * }, [dispatch]);
 * ```
 */
export const fetchAi = createAsyncThunk(
  'ai/fetchStatus',
  async (_, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getAis()`;
     * Right now we just return an empty array.
     */
    return Promise.resolve([]);
  }
);

export const initialAiState: AiState = aiAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: null,
});

export const aiSlice = createSlice({
  name: AI_FEATURE_KEY,
  initialState: initialAiState,
  reducers: {
    add: aiAdapter.addOne,
    remove: aiAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAi.pending, (state: AiState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchAi.fulfilled,
        (state: AiState, action: PayloadAction<AiEntity[]>) => {
          aiAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchAi.rejected, (state: AiState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const aiReducer = aiSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(aiActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const aiActions = aiSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllAi);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = aiAdapter.getSelectors();

export const getAiState = (rootState: unknown): AiState =>
  rootState[AI_FEATURE_KEY];

export const selectAllAi = createSelector(getAiState, selectAll);

export const selectAiEntities = createSelector(getAiState, selectEntities);
