import React from 'react'

const CompleteTask = ({data}) => {
    return (
        <div className='shrink-0 h-full w-75  bg-blue-400 rounded-xl p-5'>
            <div className='flex justify-between'>
                <h3 className=' bg-red-600 px-3 py-1 rounded items-center text-sm'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className=' text-sm mt-2'>
               {data.description}
            </p>
            <div className='mt-2'>
                <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs w-full'>Complete</button>
            </div>
        </div>
    )
}

export default CompleteTask
