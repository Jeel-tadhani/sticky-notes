import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import NoteReducer from "./Reducer/NoteReducer";

const persistClientConfig = {
	key: "notes",
	storage,
};

const noteReducer = persistReducer(persistClientConfig, NoteReducer);

export const store = configureStore({
	reducer: {
		note: noteReducer
	},
});

export const persistor = persistStore(store);
