import React from 'react'
import Logo from './logo'
import { motion } from 'framer-motion'
import './Navigation.css'


const variable = {
    hidden: { y: '-100vh', opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 50, delay: 0.4 } }
}

const Navigation = () => {
    return (
        <motion.div variants={variable} initial="hidden" animate="visible" className="bar">
            <ul className="u">
                <li><Logo /></li>
                <li><h1 className="title">WeWatch</h1></li>
            </ul>
            <div><hr className="line" /></div>
        </motion.div>
    )
}

export default Navigation