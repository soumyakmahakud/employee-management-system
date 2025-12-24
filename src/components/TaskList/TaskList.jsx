import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FaildTask from './FaildTask'

const TaskList = ({data}) => {
    
    return (
        <div id='tasklist' className=' h-[60%] overflow-x-auto w-full py-5 mt-10 flex items-center justify- gap-5 flex-nowrap'>
            {data.tasks.map((e, idx)=>{
                if(e.active){
                    return <AcceptTask key={idx} data={e}/>
                }
                if(e.newTask){
                    return <NewTask key={idx} data={e}/>
                }
                if(e.completed){
                    return <CompleteTask key={idx} data={e}/>
                }
                if(e.failed){
                    return <FaildTask key={idx} data={e}/>
                }

            })}
            
        </div>
    )
}

export default TaskList
