import React from 'react'
import classes from './AddNewTask.module.css'

function AddNewTask() {
  return (
    <section className={classes.section}>
        <h1>Add New Task</h1>
        <div className={classes.NewTask}>
            <form action="">
                <div className={classes.TitleTask}>
                 <label htmlFor="">TITLE</label>
                 <div className={classes.TaskInput}>
                    <input type="text" placeholder='Task Title' />
                 </div>
                </div>
                <div className={classes.Description}>
                 <label htmlFor="">DESCRIPTION</label>
                <div className={classes.textarea}>
                    <textarea name="textarea" id="textarea" placeholder='Task Description'></textarea>
                </div>
                <div className={classes.Dates}>
                    <div className={classes.startDate}>
                     <label htmlFor="">START DATE</label>
                        <div>
                         <input type="Date" />
                        </div>
                    </div>
                    <div className={classes.startDate}>
                        <label htmlFor="">END DATE</label>
                        <div>
                          <input type="Date" />
                        </div>
                    </div>
                </div>
                </div>
            </form>
        </div>
    </section>
  )
}

export default AddNewTask