import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface State{
    listTitle: {
        id: number;
        nameTitle: string;
    }[]

}
const titleSlice = createSlice({
    name: "title",
    initialState: {
        listTitle: []
    },
    reducers: {
        addTitle: (state:State, action: PayloadAction<string>) => {
            let newTitle = {
                nameTitle: action.payload,
                id: Math.floor(Math.random()*99)
            }
            state.listTitle.push(newTitle)
        },
        deleteTitle: (state:State, action: PayloadAction<number>) => {
          const deleteTiteleUser= state.listTitle.filter((item) => {
              return item.id != action.payload
          })
         state.listTitle = deleteTiteleUser
        }
    }
})
export const {addTitle,deleteTitle} = titleSlice.actions
export default titleSlice.reducer;