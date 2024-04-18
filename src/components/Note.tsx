import { useDispatch } from "react-redux";
import { NoteType, deleteNote } from "../redux/Reducer/NoteReducer";

interface NoteProps {
    note: NoteType;
}
const Note = ({ note }: NoteProps) => {

    const dispatch = useDispatch()
    const handleDoubleClick = () => {
        dispatch(deleteNote(note.id));
    };
    return (
        <div className={`bg-[${note.color}] w-[300px] h-[300px] rounded group relative`} onDoubleClick={handleDoubleClick}>
            <p className="p-3">{note.text}</p>
            <p className={`opacity-0 absolute bottom-0 group-hover:opacity-100 w-full px-6 items-center bg-red-100/20`}>Double Click to Remove This Note</p>
        </div>
    );
};

export default Note;
