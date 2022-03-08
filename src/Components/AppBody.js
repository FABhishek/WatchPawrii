import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from './Image'
import { motion } from 'framer-motion'
import axios from "axios";
import { io } from "socket.io-client";
import Modal from './Modal'
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import './AppBody.css'
import { Toaster } from 'react-hot-toast'



const spanVariants = {
    visible: { y: 0, scaleY: 1 },
    hover: {
        y: [-1, -2, -2.8, 0.9, 0],
        scaleY: [1, 1.3, 0.8, 1.2, 1],
        color: '#E83A14'
    }
}
const list = {
    hidden: {
        opacity: 0,
        transition: {
            when: 'afterChildren'
        }
    },
    visible: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.3
        }
    }
}

const effect = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        y: [-1, -1.9, -2.7, 1],
        scaleY: [1, 1.3, 0.8, 1]
    }
}
const btnani = {
    hidden: {
        x: '-100vh',
        opacity: 0
    },
    visible: { x: 0, opacity: 1, transition: { delay: 3, type: 'spring', stiffness: 150 } },
    hover: {
        scale: [1, 1.1],
        transition: { yoyo: Infinity, ease: 'easeInOut', duration: 0.3 }
    }

}

const AppBody = () => {

    const socket = io("http://localhost:8000");
    socket.on("connect", () => {
        console.log("Socket connected");
    });
    const navigate = useNavigate();

    function createRoom() {
        axios.get("http://localhost:5000/room").then((res) => {
            console.log(res.data);
            // eslint-disable-next-line no-useless-concat
            navigate("room=/" + `${res.data.room}`);
        });
    }
    const text1 = "WatchPawRi"
    const [ModalOpen, setModalOpen] = useState(false);
    return (
        <Container className="outer">
            <Row>
                <Col xs={12} md={12} lg={6} style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <motion.span variants={list} initial="hidden" animate="visible">
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                {text1.split("").map((Letter, id) => (
                                    <motion.div variants={effect}>
                                        <span key={id}>
                                            <motion.h1 className="letter" variants={spanVariants} initial="visible" whileHover="hover">{Letter}</motion.h1>
                                        </span></motion.div>
                                ))}
                            </div>
                        </motion.span>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem', justifyContent: 'space-between', padding: '0 20px' }}>
                            <Button component={motion.div} variants={btnani} initial="hidden" animate="visible" whileHover="hover" variant="contained" sx={{ fontSize: '15px', borderRadius: '35px', backgroundColor: '#24A19C', fontFamily: "'Open Sans', sans-serif", color: 'black', width: '50%', padding: '13px', boxShadow: 'inset 0 -4px #146356', fontWeight: 'bold', '&:hover': { backgroundColor: '#019267', boxShadow: 'inset 0 -4px #146356' }, '@media screen and (max-width:525px)': { fontSize: '10px', height: '70%', width: '60%' } }} onClick={createRoom}>Create Room</Button>
                            <Button component={motion.div} variants={btnani} initial="hidden" animate="visible" whileHover="hover" variant="contained" sx={{ fontSize: '15px', borderRadius: '35px', backgroundColor: '#D67D3E', fontFamily: "'Open Sans', sans-serif", color: 'black', width: '50%', padding: '13px', boxShadow: 'inset 0 -4px #FFBC80', fontWeight: 'bold', '&:hover': { borderColor: '#EF6C57', color: 'black', backgroundColor: '#B3541E', boxShadow: 'inset 0 -4px #FFBC80' }, '@media screen and (max-width:525px)': { fontSize: '10px', height: '70%', width: '60%' } }} onClick={() => setModalOpen(true)}>Join Room</Button>
                            <Modal modalOpen={ModalOpen} setModalOpen={setModalOpen}></Modal>
                            <Toaster position='bottom-right'
                                toastOptions={{
                                    style: {
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold',
                                        padding: '5px 10px'
                                    },
                                }
                                } />
                        </div>

                    </div>
                </Col>
                <Col xs={12} md={12} lg={6} style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                    <Image />
                </Col>
            </Row>
        </Container>
    )
}

export default AppBody