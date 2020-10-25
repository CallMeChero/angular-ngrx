import { createAction, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

export interface UserState {
    maskUserName: boolean;
}

const initialState: UserState = {
    maskUserName: true,
};

// SELECTOR
const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
    getUserFeatureState,
    state => state.maskUserName
);

export const userReducer = createReducer(
    initialState,
    on(createAction('[User] Toggle User Code'), state => {
        console.log('original state: ', JSON.stringify(state))
        return {
            ...state,
            maskUserName: !state.maskUserName
        };
    })
)