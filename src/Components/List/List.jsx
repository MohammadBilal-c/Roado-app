import React, { useState, useEffect } from 'react'
import './list.scss'
import Modal from 'react-modal'
import { Grid } from '@material-ui/core'
import AddBtn from '../Add-Btn/AddBtn'
import { Cancel } from '@material-ui/icons';
import axios from 'axios'



// const data = [
//     {
//         id: 1,
//         heading: 'inquisition',
//         pera: ' open/close state of the popper can be animated with a render prop child and a transition component. This component should respect the following conditions'
//     },
//     {
//         id: 2,
//         heading: 'inquisition1',
//         pera: ' open/close state of the popper can be animated with a render prop child and a transition component. This component should respect the following conditions'
//     },
//     {
//         id: 3,
//         heading: 'inquisition2',
//         pera: ' open/close state of the popper can be animated with a render prop child and a transition component. This component should respect the following conditions'
//     },]

Modal.setAppElement('#root')
const List = () => {
    const [active, setActive] = useState('')
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [resources, setResources] = useState([])

    useEffect(() => {
        (async resource => {
            const respons = await axios.get(`https://jsonplaceholder.typicode.com/comments`)
            setResources(respons.data)
        })(resource)
    }), [resource]


    const handleModalbox = (id) => {
        setActive(id)
        setModalIsOpen(true)
    }
    let modalContent = data?.find(item => item.id === active)
    console.log(modalContent, "abcd------------------------>")
    return (
        <div className='main-container'>
            <Grid >
                <h2 className='common-heading'>words list</h2><hr />

                {resources && resources.map((item, index) =>

                    <div key={index} className='list-title' onClick={() => handleModalbox(item.id)}  >

                        <h2 className='list-heading'>{item.name}</h2>
                        <p className='list-pera'>
                            {item.body}
                        </p>
                        <hr />
                    </div>

                )}
                <div>

                    <Modal
                        isOpen={modalIsOpen}
                        shouldCloseOnOverlayClick={false}
                        onRequestClose={() => setModalIsOpen(false)}
                    >
                        {
                            {/* modalContent.filter((item, index) => {
                                <div key={index} >
                                    <div>
                                        <button className='removeBtn' onClick={() => setModalIsOpen(false)}><Cancel /></button>
                                    </div>

                                    <h2 className='list-heading'    >{item.heading}</h2>
                                    <p className='list-pera'>{item.pera}</p>

                                </div>


                            }) */}
                            /* {data && data.find((item, i) =>
        
                            <div key={i} >
                                <div>
                                    <button className='removeBtn' onClick={() => setModalIsOpen(false)}><Cancel /></button>
                                </div>
        
                                <h2 className='list-heading'    >{item.heading}</h2>
                                <p className='list-pera'>{item.pera}</p>
        
                            </div>
                        )} */
                        }
                    </Modal>
                    <AddBtn />

                </div>


            </Grid >
        </div >
    )
}

export default List
