import React from 'react'
import { FaUserTie } from "react-icons/fa6";

const CommentCard = ({name,comment}) => {
    return (
        <div>
            <ul>
                <li className='flex items-center shadow-2xl pl-4 bg-slate-100 rounded-2xl py-1 mb-1'>
                    <FaUserTie size={25} />
                    <span className='pl-2'>
                        <h1 className='font-semibold'>{name}</h1>
                        <h1 className='text-xs'>{comment}</h1>
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default CommentCard