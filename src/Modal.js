import React, { useState, useEffect } from 'react'
import './Modal.css'
import { AnimatePresence, motion } from 'framer-motion'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Button from '@mui/material/Button'
import toast from 'react-hot-toast'
import { v4 as uuid } from "uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const drop = {
    hidden: {
        opacity: 0,
        transform: 'scale(0.9)',

    },
    final: {
        transform: 'scale(1)',
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500
        }
    },
    exit: {
        transform: 'scale(0)',
        opacity: 0,
    }
}

const Modal = ({ modalOpen, setModalOpen }) => {
    const [Title, setTitle] = useState('');
    useEffect(() => {
        setTitle('');
    }, [setModalOpen])
    const navigate = useNavigate();
    const handlesubmit = (e) => {
        e.preventDefault();
        if (Title === '') {
            toast.error("ID shouldn't be empty!!", { duration: 2000 })
            return;
        }
        else {
            axios
                .get("http://localhost:5000/join", {
                    params: {
                        roomId: uuid(),
                    },
                })
                .then((res) => {
                    console.log(res.data);
                    navigate(`room=/${res.data}`);
                });
            setTitle('')
            toast.success('Welcome to your WatchPawri!!');
        }
        setModalOpen(false);
    }
    return (
        <AnimatePresence>
            {modalOpen && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="wrapper">
                    <motion.div variants={drop} initial="hidden" animate="final" exit="exit" className="modalwrapper">
                        <motion.div className="closeButton"
                            onClick={() => setModalOpen(false)}
                            onKeyDown={() => setModalOpen(false)}
                            tabIndex={0}
                            role="button"
                            initial={{ top: 40, opacity: 0 }}
                            animate={{ top: -10, opacity: 1 }}
                        ><CloseOutlinedIcon />
                        </motion.div>
                        <form className="form" onSubmit={handlesubmit}>
                            <label htmlFor="title">Enter Room ID:-
                                <input value={Title} onChange={(e) => setTitle(e.target.value)} type="text" id="title" placeholder='Enter room ID' />
                            </label>
                            <div className="buttonContainer">
                                <Button type="submit" variant="contained">Join Room</Button>
                                <Button
                                    onClick={() => setModalOpen(false)}
                                    onKeyDown={() => setModalOpen(false)}
                                    color="error" size="medium" type="button" variant="outlined">Cancel</Button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );

}

export default Modal