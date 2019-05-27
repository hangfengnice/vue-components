import React,{Component} from 'react'
import 'antd/dist/antd.css'
// import {BtnClick,InputValue,delete_todo_item} from './store/actionTypes'
import store from './store/index.js'
import {initListAction,gethandleBtnClick,gethandleInputValue,gethandleItemClickDelete} from './store/actionCreators'
import ToDoListUI from './store/ToDoListUI'
import axios from 'axios'

import './mock/mock'

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = store.getState()
       store.subscribe(this.handleChange.bind(this))
       this.handleItemClickDelete = this.handleItemClickDelete.bind(this)
    }
render (){
  return (
  <ToDoListUI 
  list={this.state.list}
  inputValue={this.state.inputValue}
  handleInputValue={this.handleInputValue}
  handleBtnClick={this.handleBtnClick}
  handleItemClickDelete = {this.handleItemClickDelete}
  />
  )
}
componentDidMount(){
  axios.get('/data').then((res)=>{
    const data = res.data
  const action = initListAction(data)
  store.dispatch(action)
})
 
}
handleBtnClick(){
  const action = gethandleBtnClick()
  store.dispatch(action)
}
handleInputValue(e){
  const action= gethandleInputValue(e.target.value)
  store.dispatch(action)
}

handleChange(){
  this.setState(store.getState())
}
handleItemClickDelete(index){
const action=gethandleItemClickDelete(index)
store.dispatch(action)
}



}

export default TodoList