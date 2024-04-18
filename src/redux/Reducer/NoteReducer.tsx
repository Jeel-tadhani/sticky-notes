import { createSlice } from "@reduxjs/toolkit";
export interface NoteType {
	id: string;
	text: string;
	color: string;
}

interface InitialState {
	id: number;
	Notes: NoteType[];
}

const initialState: InitialState = {
	Notes: [],
	id: 1
};


export const NotesSlice = createSlice({
	name: "notes",
	initialState,
	reducers: {
		addNote: (state, action) => {
			state.Notes = [...state.Notes, { ...action.payload, id: state.id }];
			state.id = state.id + 1;
		},
		deleteNote: (state, action) => {
			state.Notes = state.Notes.filter(note => note.id !== action.payload);
		}
	},
});

export const { addNote, deleteNote } = NotesSlice.actions;

export default NotesSlice.reducer;
