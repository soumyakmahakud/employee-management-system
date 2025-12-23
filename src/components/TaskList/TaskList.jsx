import React from 'react'

const TaskList = ({data}) => {
    return (
        <div id='tasklist' className=' h-[55%] overflow-x-auto w-full py-5 mt-10 flex items-center justify- gap-5 flex-nowrap'>
            <div className='shrink-0 h-full w-[300px] bg-gray-400 rounded-xl p-5'>
                <div className='flex justify-between'>
                    <h3 className=' bg-red-600 px-3 py-1 rounded items-center text-sm'>High</h3>
                    <h4 className='text-sm'>16 dec 2025</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a progress bar</h2>
                <p className=' text-sm mt-2'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde consequatur iste excepturi totam quos neque repudiandae molestias cum, ex sunt distinctio vitae sit doloribus ea natus labore iusto officia possimus?
                </p>
            </div>
            <div className='shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-5'>
                <div className='flex justify-between'>
                    <h3 className=' bg-red-600 px-3 py-1 rounded items-center text-sm'>High</h3>
                    <h4 className='text-sm'>16 dec 2025</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a progress bar</h2>
                <p className=' text-sm mt-2'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde consequatur iste excepturi totam quos neque repudiandae molestias cum, ex sunt distinctio vitae sit doloribus ea natus labore iusto officia possimus?
                </p>
            </div>
            <div className='shrink-0 h-full   bg-blue-400 rounded-xl p-5'>
                <div className='flex justify-between'>
                    <h3 className=' bg-red-600 px-3 py-1 rounded items-center text-sm'>High</h3>
                    <h4 className='text-sm'>16 dec 2025</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a progress bar</h2>
                <p className=' text-sm mt-2'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde consequatur iste excepturi totam quos neque repudiandae molestias cum, ex sunt distinctio vitae sit doloribus ea natus labore iusto officia possimus?
                </p>
            </div>
            <div className='shrink-0 h-full w-[300px] bg-orange-400 rounded-xl p-5'>
                <div className='flex justify-between'>
                    <h3 className=' bg-red-600 px-3 py-1 rounded items-center text-sm'>High</h3>
                    <h4 className='text-sm'>16 dec 2025</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a progress bar</h2>
                <p className=' text-sm mt-2'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde consequatur iste excepturi totam quos neque repudiandae molestias cum, ex sunt distinctio vitae sit doloribus ea natus labore iusto officia possimus?
                </p>
            </div>
            
        </div>
    )
}

export default TaskList
