
import React from 'react'
import { Input ,Button,List} from 'antd'


const TodoListUI = (props)=>{
  return (
    <div>
  <div>
  <Input 
  value = {props.inputValue}
 onChange={props.handleInputValue.bind(this)}

  placeholder='input info'
  />
  <Button type="primary" 
  onClick={props.handleBtnClick.bind(this)}
  >提交</Button>
  </div>
  <List
  bordered
  dataSource={props.list}
  renderItem={(item,index) => (
    <List.Item onClick={()=>{props.handleItemClickDelete(index)}}>
      {item}
    </List.Item>
  )}
/>
</div>
)
}


// class TodoListUI extends Component {
// render(){
//     return (
//         <div>
//       <div>
//       <Input 
//       value = {this.props.inputValue}
//      onChange={this.props.handleInputValue.bind(this)}

//       placeholder='input info'
//       />
//       <Button type="primary" 
//       onClick={this.props.handleBtnClick.bind(this)}
//       >提交</Button>
//       </div>
//       <List
//       bordered
//       dataSource={this.props.list}
//       renderItem={(item,index) => (
//         <List.Item onClick={(index)=>{this.props.handleItemClickDelete(index)}}>
//           {item}
//         </List.Item>
//       )}
//     />
//     </div>
//     )
// }
// }
export default TodoListUI