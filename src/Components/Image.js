import React from 'react'
import { motion } from 'framer-motion'
import './Image.css'

const svgvariant = {
    visible: {
        y: [-15, 20],
        transition: { yoyo: Infinity, delay: 0.6, duration: 1.5, ease: 'easeInOut' }
    }
}

const Image = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="90%" viewBox="0 0 500 1000" className="image">
            <g>
                <motion.path variants={svgvariant} animate="visible" xmlns="http://www.w3.org/2000/svg" d="m228 284h40v48h-40z" fill="#606669" transform="matrix(0 -1 1 0 -60 556)" data-original="#606669"></motion.path >
                <motion.path variants={svgvariant} animate="visible" xmlns="http://www.w3.org/2000/svg" d="m56 24h400v240h-400z" fill="#9aa3a8" data-original="#9aa3a8" class=""></motion.path >
                <motion.path variants={svgvariant} animate="visible" xmlns="http://www.w3.org/2000/svg" d="m56 248h400a0 0 0 0 1 0 0v32a16 16 0 0 1 -16 16h-368a16 16 0 0 1 -16-16v-32a0 0 0 0 1 0 0z" fill="#6a7073" data-original="#6a7073"></motion.path >
                <motion.circle variants={svgvariant} animate="visible" xmlns="http://www.w3.org/2000/svg" cx="256" cy="128" fill="#e9eef2" r="72" data-original="#e9eef2" class="">
                </motion.circle><motion.path variants={svgvariant} animate="visible" xmlns="http://www.w3.org/2000/svg" d="m232 96v64l56-32z" fill="#eb423f" data-original="#eb423f" class=""></motion.path >
                <motion.path variants={svgvariant} animate="visible" xmlns="http://www.w3.org/2000/svg" d="m435.332 332 20-44s5.666-27.667-16-40-40 8-40 8-5-32-40-32c-45.25 0-48 32-48 32s-15.667-22.333-40-8-16 40-16 40c4 12 12 44 12 44z" fill="#ffd33a" data-original="#ffd33a">
                </motion.path>
                <motion.path variants={svgvariant} animate="visible" xmlns="http://www.w3.org/2000/svg" d="m403.932 215.667c2 1.272 11.594 1.349 15.965 8.068 6.024 9.258-.851 20.569-9.715 27.159s-15.8 5.569-22.386-3.3c-.888-1.194-8.961-11.538-9.546-12.841-6.928 6.6-18.661 14.287-28.806 1.477-6.858-8.659-6.512-18.975-1.478-28.806 6.353-12.407 20.424-13.313 24.034-7.9 0 0 5.02-17.966 19.261-14.318 25.139 6.447 12.671 30.461 12.671 30.461z" fill="#ffe76c" data-original="#ffe76c"></motion.path >
                <motion.path variants={svgvariant} animate="visible" xmlns="http://www.w3.org/2000/svg" d="m448 304-16 184h-160l-16-184a23.993 23.993 0 0 1 40.21-17.69h.01a23.952 23.952 0 0 1 7.78 17.69 24 24 0 0 1 48 0 24 24 0 0 1 48 0 24 24 0 0 1 48 0z" fill="#eb423f" data-original="#eb423f" class=""></motion.path >
                <motion.ellipse variants={svgvariant} animate="visible" xmlns="http://www.w3.org/2000/svg" cx="352" cy="384" fill="#ffd33a" rx="56" ry="32" data-original="#ffd33a"></motion.ellipse>
                <motion.path variants={svgvariant} animate="visible" xmlns="http://www.w3.org/2000/svg" d="m272 440c-1.333-11.992-6.833-24-24-24-18 0-21.928 12.509-23.713 24-11.487 1.785-24.287 12.008-24.287 24a24 24 0 0 0 24 24c7.171 0 24-7.167 24-16 0 9.333 8.829 16 16 16a24 24 0 0 0 24-24c0-10.506-6.6-20.748-16-24z" fill="#ffe76c" data-original="#ffe76c"></motion.path >
                <motion.path variants={svgvariant} animate="visible" xmlns="http://www.w3.org/2000/svg" d="m488 432a24 24 0 0 0 -24-24c-8.5 0-16.333 7.833-16 16-3.833-5.833-11.72-8-16-8a24 24 0 0 0 0 48 24 24 0 0 0 48 0c0-4.28-.667-13.333-8-16 10-1.833 16-7.5 16-16z" fill="#ffe76c" data-original="#ffe76c"></motion.path >
                <motion.path variants={svgvariant} animate="visible" xmlns="http://www.w3.org/2000/svg" d="m160 280h-104l-8 32v144l8 32h104l8-32v-144z" fill="#dadcde" data-original="#dadcde"></motion.path >
                <motion.path variants={svgvariant} animate="visible" xmlns="http://www.w3.org/2000/svg" d="m48 312h120v144h-120z" fill="#dadcde" data-original="#dadcde"></motion.path >
                <motion.path variants={svgvariant} animate="visible" xmlns="http://www.w3.org/2000/svg" d="m48 312h120v144h-120z" fill="#eb423f" data-original="#eb423f" class=""></motion.path >
                <motion.path variants={svgvariant} animate="visible" xmlns="http://www.w3.org/2000/svg" d="m48 368s23.75 40 120 40v48h-120z" fill="#c7312e" data-original="#c7312e"></motion.path >
                <motion.path variants={svgvariant} animate="visible" xmlns="http://www.w3.org/2000/svg" d="m248 208a80 80 0 1 0 -80-80 80.091 80.091 0 0 0 80 80zm0-144a64 64 0 1 1 -64 64 64.072 64.072 0 0 1 64-64z" fill="#000000" data-original="#000000" class=""></motion.path >
                <motion.path variants={svgvariant} animate="visible" xmlns="http://www.w3.org/2000/svg" d="m219.984 166.919a8 8 0 0 0 7.985.027l56-32a8 8 0 0 0 0-13.892l-56-32a8 8 0 0 0 -11.969 6.946v64a8 8 0 0 0 3.984 6.919zm12.016-57.134 31.875 18.215-31.875 18.215z" fill="#000000" data-original="#000000" class=""></motion.path >
                <motion.path variants={svgvariant} animate="visible" xmlns="http://www.w3.org/2000/svg" d="m472 400a24.305 24.305 0 0 0 -17.336 7.654 25.154 25.154 0 0 0 -2.573 3.156 31.251 31.251 0 0 0 -5.187-1.855l9.011-103.634 6.368-14.01a8 8 0 0 0 .554-1.706c.218-1.064 4.081-20.933-6.837-36.741v-228.864a8 8 0 0 0 -8-8h-400a8 8 0 0 0 -8 8v168.457l-21.191-7.947a8 8 0 0 0 -5.618 14.98l26.809 10.054v69.456l-7.765 31.06h.007a7.983 7.983 0 0 0 -.242 1.94v144 .073c0 .1.01.195.015.292.008.2.02.393.043.585.011.093.027.185.042.277.031.2.068.4.114.6.008.038.012.077.021.114l8 32a8 8 0 0 0 7.765 6.059h104a8 8 0 0 0 7.761-6.06l8-32c.009-.038.013-.076.021-.114.046-.2.083-.4.114-.6.015-.093.031-.185.043-.278.022-.193.034-.388.042-.584 0-.1.014-.195.015-.293 0-.024 0-.048 0-.073v-119.998h82.753l6.356 73.093a36.951 36.951 0 0 0 -9.105-1.093c-22.094 0-28.438 15.7-30.649 25.493-13.097 4.361-25.351 16.358-25.351 30.507a32.036 32.036 0 0 0 32 32c5.188 0 12.5-2.249 18.637-5.729a39.9 39.9 0 0 0 3.7-2.369 24.831 24.831 0 0 0 17.663 8.098h168a8 8 0 0 0 7.97-7.307l.284-3.27a31.983 31.983 0 0 0 55.746-21.423 32.512 32.512 0 0 0 -2.3-12.834 24.58 24.58 0 0 0 3.662-2.966 22.209 22.209 0 0 0 6.638-16.2 32.036 32.036 0 0 0 -32-32zm-192.756 34.538a38.51 38.51 0 0 0 -4.992-12.989l-10.252-117.861a16 16 0 0 1 32 .312c0 .117.012.231.018.347h-.01l2.5 57.418c-6.658 6.321-10.508 13.944-10.508 22.235 0 9.1 4.625 17.393 12.516 24.043l3.129 71.957h-11.945a31.8 31.8 0 0 0 4.3-16c0-12.188-6.816-23.825-16.756-29.462zm-116.998-146.538-2.485-9.94a8 8 0 0 0 -7.761-6.06h-57.357l-1.882-16h158.774c-6.847 11.344-6.736 23.968-4.826 32zm-106.246-32h20.651l1.882 16h-22.533zm89.754 32 4 16h-99.508l4-16zm6.246 32v79.9c-25.141-.642-57.539-4.556-82.857-18.152-12.424-6.674-18.743-13.386-21.143-16.348v-45.4zm-104 67.176c16.115 12.156 47.451 27.4 104 28.726v32.098h-104zm304 20.824c-28.287 0-48-12.648-48-24s19.713-24 48-24 48 12.648 48 24-19.713 24-48 24zm-8-63.692a88.964 88.964 0 0 0 -29.924 7.274l-2.076-47.66a16 16 0 0 1 32 .078zm-27.052 73.335a90.942 90.942 0 0 0 27.052 6.049v56.308h-24.341zm43.052 6.049a90.942 90.942 0 0 0 27.052-6.049l-2.711 62.357h-24.341zm0-79.384v-40.308a16 16 0 0 1 32-.078l-2.072 47.66a88.964 88.964 0 0 0 -29.928-7.274zm40-61.453a31.959 31.959 0 0 0 -48 0 31.959 31.959 0 0 0 -48 0 31.929 31.929 0 0 0 -42.463-4.966c-.048-6.721 2.2-16.324 13.524-23 7.441-4.386 14.249-4.867 20.809-1.471a27.243 27.243 0 0 1 8.581 7.172 8 8 0 0 0 14.52-3.91c.014-.169 1.555-15.3 20.249-21.771a33.384 33.384 0 0 0 3.952 6.288c6.029 7.612 12.648 9.584 17.139 9.9 5.366.374 10.848-1.256 16.37-4.86.941 1.239 4.514 5.888 4.695 6.13 4.655 6.264 9.757 9.726 15.6 10.585a19.063 19.063 0 0 0 2.778.2c4.933 0 9.935-1.928 15.2-5.847a47.8 47.8 0 0 0 5.61-4.858 20.211 20.211 0 0 1 14.479 2.5c12.206 6.948 13.008 20.7 12.58 27.486a31.955 31.955 0 0 0 -47.623.417zm-.37-60.443a16.913 16.913 0 0 0 5.577 1.984c2.772.644 6.567 1.524 7.984 3.7 1.8 2.758 1.271 9.644-7.782 16.375-2.573 1.912-4.746 2.851-6.108 2.653s-3.172-1.729-5.084-4.3c-.2-.271-7.917-10.3-8.911-11.839a8 8 0 0 0 -12.576-2.02c-4.388 4.183-8.4 6.385-11.3 6.172-.693-.048-2.8-.2-5.711-3.87-4.42-5.581-4.631-12.375-.629-20.194a12.062 12.062 0 0 1 6.957-6.271 6.755 6.755 0 0 1 3.7-.291 7.982 7.982 0 0 0 13.952-2.783c.314-1.068 3.242-10.39 9.584-8.767 4.73 1.211 7.746 3.183 8.961 5.86 2.021 4.445-.406 11.169-1.421 13.19a8 8 0 0 0 2.807 10.401zm-343.63-190.412h384v207.529a37.055 37.055 0 0 0 -10.423-3.123 22.834 22.834 0 0 0 -2.973-17.033 23.191 23.191 0 0 0 -12.4-9.089c1.115-5.1 1.47-11.657-1.346-17.952-2.268-5.072-7.512-11.769-19.615-14.869-8.94-2.291-17.453.892-23.35 8.732-.623.828-1.186 1.667-1.695 2.493a21.313 21.313 0 0 0 -4.931-.272c-7.25.416-16.948 4.671-22.425 15.366a40.455 40.455 0 0 0 -4.535 15.252c-14.678 4.405-22.753 12.8-27.052 19.5-.676 1.054-1.279 2.094-1.818 3.11-9.222-6.248-22.781-9.98-38.509-1.643h-178.049l-2.934-24.935a8 8 0 0 0 -5.136-6.555l-26.809-10.054zm16.625 189.778 2.144 18.222h-18.769v-24.456zm73.129 258.222h-91.508l-4-16h99.508zm22-169.938h.007l-1.515-6.062h49.754v16h-48v-8a7.983 7.983 0 0 0 -.246-1.938zm64.246 9.938v-16h16c0 .231.01.463.03.693l1.331 15.307zm24 152a8 8 0 0 0 -16-.125c-.949 2.919-11.173 8.125-16 8.125a16.019 16.019 0 0 1 -16-16c0-6.185 7.651-14.562 17.515-16.1a8 8 0 0 0 6.677-6.676c2.027-13.037 5.868-17.224 15.808-17.224 7.008 0 14.394 2.006 16.049 16.885a8 8 0 0 0 5.336 6.676c6.052 2.093 10.615 9.161 10.615 16.439a16.019 16.019 0 0 1 -16 16c-2.747 0-8-3.115-8-8zm144.355 8 3.129-71.957c7.891-6.65 12.516-14.943 12.516-24.043 0-8.291-3.85-15.914-10.5-22.235l2.5-57.417h-.01c.006-.116.018-.23.018-.347a16 16 0 0 1 32-.312l-9.188 105.664a31.99 31.99 0 0 0 -5.152 59.243l-.992 11.4zm78.2-39.869a8 8 0 0 0 -1.292 15.388c2.015.732 2.734 4.862 2.734 8.481a16 16 0 0 1 -32 0 8 8 0 0 0 -8-8 16 16 0 0 1 0-32c2.171 0 7.3 1.326 9.314 4.394a8 8 0 0 0 14.679-4.72 7.148 7.148 0 0 1 2.213-4.939 8.38 8.38 0 0 1 5.797-2.735 16.019 16.019 0 0 1 16 16c0 1.583 0 6.4-9.442 8.131z" fill="#000000" data-original="#000000" class="" />
            </g>
        </svg>
    )
}
export default Image;