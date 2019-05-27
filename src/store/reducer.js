import {BtnClick,InputValue,delete_todo_item,INIT_LIST_ACTION} from './actionTypes'

const defaultState = {
    inputValue: "",
    list:[]
}

export default (state = defaultState, action) =>{
  if(action.type === BtnClick){
      const newState = JSON.parse(JSON.stringify(state))
      newState.list.push(newState.inputValue)
      newState.inputValue=''
      return newState
  }
  if(action.type === InputValue){
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
   
    return newState
}
if(action.type === delete_todo_item){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index,1)

   
    return newState
}
if(action.type === INIT_LIST_ACTION){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list=action.data

   
    return newState
}
    return state
}