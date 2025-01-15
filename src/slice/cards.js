import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

// export const getBooks = createAsyncThunk(
//     "book/getBooks", 
//     async function (_, {rejectWithValue}) {
//         try {
//             const response = await fetch('https://api.itbook.store/1.0/new');
//             if(!response.ok) {
//                 throw new Error("Не удалось загрузить данные")
//             }
//             const data = await response.json();
//             return data;
//         }
//         catch (error) {
//             return rejectWithValue((error as Error).message)
//         }
//     }
// )

const cardSlice = createSlice({
    name: 'cats',
    initialState: {
        // books: [],
        // error: null,
        // status: null, 
        // book: null, 
        // cart: [], 
        // favorites: [], 
        // total: 0, 
        // search: [], 
        // totalCart: 0, 
        // totalFavorites: 0
    },
    reducers: {
        // addToCartRedux(state: any, {payload}: {payload :any}) {
        //     state.cart.push(payload);
        // },
        // addToFavoriteRedux(state: any, {payload}: {payload :any}) {
        //     let index = -1;
        //     for (let i = 0; i < state.favorites.length; i++ ) {
        //         if (state.favorites[i].isbn13 === payload.isbn13) {
        //             index = i;
        //         }
        //     }
        //     if (index > -1) {
        //         state.favorites.splice(index, 1);
        //     } else {
        //         state.favorites.push(payload);
        //     }
        //     state.totalFavorites = state.favorites.length;
        // },
        // removeBookFromCartRedux(state: any, {payload}: {payload :any}) {
        //     const index = state.cart.findIndex((item: TData) => item.isbn13 === payload.isbn13);
        //     state.cart.splice(index, 1);
        // },
        // removeAllSameBooksRedux(state: any, {payload}: {payload :any}) {
        //     state.cart = state.cart.filter((item: TData) => item.isbn13 != payload.isbn13)
        // },
        // countCartRedux(state: any) {
        //     const result = state.cart.reduce((count: number, item: any) => {
        //         return Number(item.price.slice(1)) + count;
        //     }, 0);
        //     state.total = result;
        //     state.totalCart = state.cart.length;
        // }
    },
    // extraReducers: (builder) => {
    //     return builder.addCase(getBooks.pending, (state: any) => {
    //         state.status = 'loading';
    //         state.error = null;
    //     }), 
    //     builder.addCase(getBooks.fulfilled, (state: any, {payload}: {payload :any}) => {
    //         state.status = 'resolved';
    //         state.error = null;
    //         state.books = payload.books;
    //     }), 
    //     builder.addCase(getBooks.rejected, (state: any, {payload}: {payload :any}) => {
    //         state.status = 'rejected';
    //         state.error = payload;
    //     })
    // }
})

const {actions, reducer} = cardSlice;

export default reducer;
export const {} = actions;