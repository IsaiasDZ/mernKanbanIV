import React from 'react'
import "../styles/Kanban.css"

const kanban = () => {
  return (
    <div className='kanbanBody'>
        
        <div className='kanbanTasks'>
            <div className='rowKanban'><p>titleColumn</p></div>
            <div className='allColumns'>
                <div className='columnKanban column1'>
                    <p>colum1</p>
                </div>
                <div className='columnKanban column2'>
                    <p>column2</p>
                </div>
                <div className='columnKanban column3'>
                    <p>colum3</p>
                </div>
            </div>
        </div>
        <div className='columnCenter'>
            <div className='gadgets first'>
                <p>climate or hour</p>
            </div>
            <div className='gadgets second'>
                <>????</>
            </div>
        </div>
            
        <div className='videos'>
            <p>youtube videos</p>
        </div>
    </div>
  )
}

export default kanban