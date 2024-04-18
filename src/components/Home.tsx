import { useState } from 'react'
import Note from './Note'
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { NoteType, addNote } from '../redux/Reducer/NoteReducer';

const Home = () => {
    const [note, setNote] = useState("")
    const [view, setView] = useState(false)

    const { Notes } = useSelector((state: any) => state.note)
    const dispatch = useDispatch()

    const colors = ["#f7e98d", "#c2ff3d", "#ff3de8", "#3dc2ff", "#04e022", "#bc83e6", "#ebb328"]

    const handleKeyChange = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.keyCode === 13 && event.shiftKey) {
            setNote((prev => prev + "\n"));
            return;
        }
        if (event.keyCode === 13) {
            dispatch(addNote({ text: note, color: colors[Math.floor(Math.random() * (colors.length - 1))] }))
            setNote("")
            setView(false)
        }
    }

    return (
        <div className='bg-[#2f363e] w-full min-h-screen font-poppins'>
            <div className='p-10'>
                <div className='flex gap-8 flex-wrap'>
                    <div className={`w-[300px] h-[300px] rounded overflow-hidden`}>
                        {!view ?
                            <div className='flex items-center justify-center h-full bg-white/10' onClick={() => setView(true)}>
                                <FaPlus size={100} color='#ffffff' />
                            </div> :
                            <textarea
                                className='h-full w-full p-3'
                                placeholder='Write Here...'
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                onKeyUp={(e: React.KeyboardEvent<HTMLTextAreaElement>) => handleKeyChange(e)}

                            ></textarea>}
                    </div>
                    {(Notes || []).map((note: NoteType, i: number) => {
                        return <Note note={note} key={i} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home
