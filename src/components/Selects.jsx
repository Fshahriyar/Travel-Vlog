import React from 'react';
import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives2.jpg'
import KeyWest from '../assets/keywest.jpg'
import Maldives3 from '../assets/maldives3.jpg'

const Selects = () => {
    return (
        <div className='mx-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='relative'>
                <img src={BoraBora} alt="" />
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                    <p className='left-4 bottom-4 absolute text-2xl text-white font-bold'>Borabora</p>
                </div>
            </div>
            <div className='relative'>
                <img src={BoraBora2} alt="" />
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                    <p className='left-4 bottom-4 absolute text-2xl text-white font-bold'>Borabora</p>
                </div>
            </div>
            <div className='relative'>
                <img src={Maldives} alt="" />
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                    <p className='left-4 bottom-4 absolute text-2xl text-white font-bold'>Maldives1</p>
                </div>
            </div>
            <div className='relative'>
                <img className='w-full h-full object-cover' src={Maldives2} alt="" />
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                    <p className='left-4 bottom-4 absolute text-2xl text-white font-bold'>Maldives2</p>
                </div>
            </div>
            <div className='relative'>
                <img className='w-full h-full object-cover' src={Maldives3} alt="" />
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                    <p className='left-4 bottom-4 absolute text-2xl text-white font-bold'>Maldives3</p>
                </div>
            </div>
            <div className='relative'>
                <img src={KeyWest} alt="" />
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                    <p className='left-4 bottom-4 absolute text-2xl text-white font-bold'>KeyWest</p>
                </div>
            </div>
        </div>
    );
};

export default Selects;