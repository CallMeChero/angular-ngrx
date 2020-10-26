import { createAction, props } from '@ngrx/store';
import { Product } from '../product';

export const toggleProductCode = createAction(
    '[Product] Toggle Product Code'
);

export const setCurrentProduct = createAction(
    '[Product] Set Current Product',
    props<{currentProductId: number}>()
);

export const clearCurrentProduct = createAction(
    '[Product] Clear Current Product'
);

export const initializeCurrentProduct = createAction(
    '[Product] Initialize Current Product'
);

export const loadProducts = createAction(
    '[Product] Load'
);

export const loadProductsSuccess = createAction(
    '[Product] Load Success',
    props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
    '[Product] Load Fail',
    props<{ error: string }>()
);

// ADD

export const addProduct = createAction(
    '[Product - edit] Add',
    props<{ product: Product}>()
);

export const addProductSuccess = createAction(
    '[Product - edit] Add Success',
    props<{ product: Product}>()
);

export const addProductFailure = createAction(
    '[Product - edit] Add Fail',
    props<{ error: string }>()
);

// EDIT
export const updateProduct = createAction(
    '[Product - edit] Update',
    props<{ product: Product}>()
);

export const updateProductSuccess = createAction(
    '[Product - edit] Update Success',
    props<{ product: Product}>()
);

export const updateProductFailure = createAction(
    '[Product - edit] Update Fail',
    props<{ error: string }>()
);

// DELETE
export const deleteProduct = createAction(
    '[Product - edit] Delete',
    props<{ productId: number}>()
);

export const deleteProductSuccess = createAction(
    '[Product - edit] Delete Success',
    props<{ productId: number }>()
);

export const deleteProductFailure = createAction(
    '[Product - edit] Delete Fail',
    props<{ error: string }>()
);