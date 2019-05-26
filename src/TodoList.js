import React,{Component} from 'react'
import 'antd/dist/antd.css'
import { Input ,Button,List} from 'antd'
import store from './store/index.js'


class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = store.getState()
    }
render (){
  return  (
  <div>
      <div>
      <Input value = {this.state.inputValue}placeholder='input info' />
      <Button type="primary">提交</Button>
      </div>
      <List
      bordered
      dataSource={this.state.list}
      renderItem={item => (
        <List.Item>
          {item}
        </List.Item>
      )}
    />
    </div>)
}
}

export default TodoList