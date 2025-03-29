// 

export default function ToDo({task,isDone,time=0}){

  return isDone?  <li>Done: {task} Duration:{time}</li>: <li> Do it now: {task} Duration:{time}</li> 
  
}