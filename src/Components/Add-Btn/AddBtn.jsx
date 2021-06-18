import React, { useState } from 'react'
import { Fab, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import Modal from 'react-modal'
import { Cancel } from '@material-ui/icons';

import './addBtn.scss'

// adding the new words in the list

const AddBtn = () => {
    // passing states
    const [notes, setNotes] = useState([])
    const [title, setTitle] = useState('')
    const [modalIsOpen, setModalIsOpen] = useState(false)


    // add words logic
    const addNote = (e) => {
        e.preventDefault()
        setNotes([
            ...notes,
            { title }
        ])
        setTitle('')

    }

    return (

        //add the data in the list
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
                        <h2 className='add-item'>Add in Dictionary</h2>
                        <h4 className='add-heading'>new word</h4>
                        <input className='addInput' value={title} onChange={(e) => setTitle(e.target.value)} />
                        <div>
                            <button className='btnCancle' onClick={() => setModalIsOpen(false)}>Cancel </button>
                            <button className='btnAdd'  >Add </button>
                        </div>

                    </form>
                </div>
            </Modal>
            <div >
                <Fab color="primary" aria-label="add" style={{ position: 'fixed' }} className='addBtn' onClick={() => setModalIsOpen(true)} className='addBtnMain'>
                    <AddIcon />
                </Fab>
            </div>
        </div>
    )
}

export default AddBtn
