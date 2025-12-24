import React from 'react'

const AcceptTask = ({data}) => {
    
  return (
    <div>
      <div className='shrink-0 h-full w-75  bg-gray-400 rounded-xl p-5'>
                <div className='flex justify-between'>
                    <h3 className=' bg-red-600 px-3 py-1 rounded  text-sm'>{data.category}</h3>
                    <h4 className='text-sm'>{data.date}</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
                <p className=' text-sm mt-2'>
                    {data.description}
                </p>
                <div className='flex justify-between mt-4'>
                    <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>Mark as Completed</button>
                    <button className='bg-red-500 rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>
                </div>
            </div>
    </div>
  )
}

export default AcceptTask
