import React, { useState } from 'react'
import { Fab, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import Modal from 'react-modal'
import { Cancel } from '@material-ui/icons';

import './addBtn.scss'

const AddBtn = () => {
    const [notes, setNotes] = useState([])
    const [title, setTitle] = useState('')
    const [modalIsOpen, setModalIsOpen] = useState(false)



    const addNote = (e) => {
        e.preventDefault()
        setNotes([
            ...notes,
            { title }
        ])
        setTitle('')
    }

    return (
        <div>
            {notes.map((note) => (
                <div key={note.title} className='list-title'>
                    <h2 className='list-heading'> {note.title}</h2><hr />
                </div>

            ))}
            <Modal
                isOpen={modalIsOpen}
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => setModalIsOpen(false)}
            >
                <div className='inputDiv'>
                    <form onSubmit={addNote}>
                        <input className='addInput' value={title} onChange={(e) => setTitle(e.target.value)} />
                        <div>
                            <button className='btnCancle' onClick={() => setModalIsOpen(false)}>Cancel </button>
                            <button className='btnAdd' >Add </button>
                        </div>

                    </form>
                </div>
            </Modal>

            <Fab color="primary" aria-label="add" className='addBtn' onClick={() => setModalIsOpen(true)} className='addBtnMain'>
                <AddIcon />
            </Fab>
        </div>
    )
}

export default AddBtn
