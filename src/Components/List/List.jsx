import React, { useState, useEffect } from 'react'
import './list.scss'
import Modal from 'react-modal'
import { Grid } from '@material-ui/core'
import AddBtn from '../Add-Btn/AddBtn'
import { Cancel } from '@material-ui/icons';
import axios from 'axios'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

//static data
const data = [
    {
        id: 1,
        heading: 'inquisition',
        pera: ' open/close state of the popper can be animated with a render prop child and a transition component. This component should respect the following conditions'
    },
    {
        id: 2,
        heading: 'new',
        pera: 'of recent origin, production, purchase, etc.; having but lately come or been brought into being: a new book.'
    },
    {
        id: 3,
        heading: 'find',
        pera: 'to come upon by chance; meet with: He found a nickel in the street.'
    },
    {
        id: 4,
        heading: 'asymptomatic',
        pera: ' (of a disease or other medical condition) presenting no symptoms or evidence of illness or abnormality Not only is hypertension one of the most serious chronic conditions, it is also classically asymptomatic.'
    },
    {
        id: 5,
        heading: 'contact tracing',
        pera: ' a public health measure undertaken to slow and eventually halt the spread of a disease that is transmitted person-to-person, in which people who have come in close proximity to or direct contact with an infected person are identified and monitored for signs of infection. These individuals, along with any of their contacts who manifest symptoms, are generally required to isolate themselves long enough to be treated, if necessary, before they can infect others.'
    },
    {
        id: 6,
        heading: 'king',
        pera: 'a male sovereign or monarch; a man who holds by life tenure, and usually by hereditary right, the chief authority over a country and people.'
    },
    {
        id: 7,
        heading: 'button',
        pera: ' a small disk, knob, or the like for sewing or otherwise attaching to an article, as of clothing, serving as a fastening when passed through a buttonhole or loop.'
    },
    {
        id: 8,
        heading: 'object',
        pera: ' anything that is visible or tangible and is relatively stable in form.'
    },
    {
        id: 9,
        heading: 'song',
        pera: 'a short metrical composition intended or adapted for singing, especially one in rhymed stanzas; a lyric; a ballad.'
    },
    {
        id: 10,
        heading: 'network',
        pera: 'any netlike combination of filaments, lines, veins, passages, or the like: a network of arteries; a network of sewers under the city.'
    },
]
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,


        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        // padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        right: 10,

        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


Modal.setAppElement('#root')

// app showing data by list
const List = () => {
    const [term, setTerm] = useState('')
    const classes = useStyles();

    const [active, setActive] = useState('')
    const [modalIsOpen, setModalIsOpen] = useState(false)


    // handle the search input in real time
    const handleSearch = (e) => {
        setTerm(e.target.value)
    }
    const SearchAppBar = () => {

        return (
            <div className={classes.root}>

                <AppBar position="static">
                    <Toolbar>

                        <Typography className={classes.title} variant="h6" noWrap>
                            Vocab
                        </Typography>

                        <div className={classes.search}>
                            <form >
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase


                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}

                                    value={term}

                                    onChange={(e) => handleSearch(e)}
                                />
                            </form>
                        </div>
                    </Toolbar>
                </AppBar>
            </div >
        );


    }

    // handling modalbox
    const handleModalbox = (id) => {
        setActive(id)
        setModalIsOpen(true)
    }
    let modalContent = data?.find(item => item.id === active)

    let renderContent;

    // applying search function
    const applyFilter = () => {

        let filterData = data;

        const loweredCaseData = term.toString().toLowerCase();
        const filteredData = filterData.filter(filtdata => {
            return Object.keys(filtdata).some(key => {
                if (filtdata[key] !== null) {
                    return filtdata[key].toString().toLowerCase().includes(loweredCaseData)
                }
            })
        })
        return (
            renderContent = filteredData

        )

    }

    // applying term condition 
    if (term) {
        renderContent = applyFilter()
    } else {
        renderContent = data
    }




    return (
        <div>
            <Grid >
                {SearchAppBar()}
                <div className='main-container'>
                    <h2 className='common-heading'>words list</h2><hr />
                    {
                        //render the display list data
                        renderContent && renderContent.map((item, index) => {
                            return (<div key={index} className='list-title' onClick={() => handleModalbox(item.id)}  >

                                <h2 className='list-heading'>{item.heading}</h2>
                                <p className='list-pera'>
                                    {item.pera}
                                </p>
                                <hr />
                            </div>)
                        })
                    }
                    <div>
                        {/* modalbox */}
                        <Modal
                            isOpen={modalIsOpen}
                            shouldCloseOnOverlayClick={false}
                            onRequestClose={() => setModalIsOpen(false)}
                        >
                            {modalContent ? <div >
                                <div>
                                    <button className='removeBtn' onClick={() => setModalIsOpen(false)}><Cancel /></button>
                                </div>

                                <h2 className='list-heading-modal'    >{modalContent.heading}</h2>
                                <p className='list-pera-modal'>{modalContent.pera}</p>

                            </div> : null}
                        </Modal>
                        <AddBtn />

                    </div>


                </div>
            </Grid >
        </div >
    )
}

export default List
