import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tags:['react', 'nodejs', 'sequelize', 'postgres']
}

export const tagSlice = createSlice({
    name: 'tags',
    initialState,
    reducers:{
        addTag: (state, action) => {
            if(!state.tags.includes(action.payload)){
                state.tags.push(action.payload)
            }
        },
        removeTag: (state, action) => {
            const newArray = state.tags.filter((tag)=> tag !== action.payload)
            state.tags = newArray
        }
    }
})

export const { addTag, removeTag } = tagSlice.actions
export default tagSlice.reducer