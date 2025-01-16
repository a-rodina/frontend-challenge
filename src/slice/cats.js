import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

export const getCats = createAsyncThunk(
    "cats/getCats", 
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
            if(!response.ok) {
                throw new Error("Не удалось загрузить данные")
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            return rejectWithValue((error).message)
        }
    }
)

const items = localStorage.getItem('favorite') !== null ? JSON.parse(localStorage.getItem('favorite')) : []

const catSlice = createSlice({
    name: 'cats',
    initialState: {
        cats: [],
        favorites: items,
        cat: null
    },
    reducers: {
        addToFavoriteRedux(state, {payload}) {
            let index = -1;
            for (let i = 0; i < state.favorites.length; i++ ) {
                if (state.favorites[i].id === payload.id) {
                    index = i;
                }
            }
            if (index > -1) {
                state.favorites.splice(index, 1);
            } else {
                state.favorites.push(payload);
            }

            localStorage.setItem('favorite', JSON.stringify(state.favorites.map(item => item)));
        },
    },
    extraReducers: (builder) => {
        return builder.addCase(getCats.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        }), 
        builder.addCase(getCats.fulfilled, (state, {payload}) => {
            state.status = 'resolved';
            state.error = null;
            state.cats = payload;
        }), 
        builder.addCase(getCats.rejected, (state, {payload}) => {
            state.status = 'rejected';
            state.error = payload;
        })
    }
})

const {actions, reducer} = catSlice;

export default reducer;
export const {addToFavoriteRedux} = actions;