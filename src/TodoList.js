import React,{Component} from 'react'
import store from './store/index'
import UI from './store/ui'
import './mock/mock'
import axios from 'axios'
import {connect } from 'react-redux'


class TodoList extends Component{
   
    render(){
        const {value,list,handlechange,handlestore,handlebtn,handledelete} = this.props
        return <UI

        value = {value}
        list = {list}
        handlechange ={handlechange}
        handlestore ={handlestore} 
        handlebtn={handlebtn}
        handledelete={handledelete}

        />
    }
    componentDidMount(){
        axios.get('/data').then(res => {
            const action={
                type: 'initlist',
                data:res.data
            }
            store.dispatch(action)
        })
    }
    // handlestore(){
    //     this.setState(store.getState())
    // }
//    handlechange(e){
// const action ={
//     type:'inputvalue',
//     value : e.target.value
// }
// store.dispatch(action)
//    }
//    handlebtn(){
//        const action ={
//            type:'addlist'
//        }
//        store.dispatch(action)
//    }
//    handledelete(index){
//        const action = {
//            type:"listdelete",
//            index
//        }
//        store.dispatch(action)
//    }
}
const test = (state)=>{
return {
    value: state.value,
    list:state.list
}
}
const test1 = (dispatch)=>{
return {
    // handlestore(){
    //     this.setState(store.getState())

    // },
    handlechange(e){
        const action ={
            type:'inputvalue',
            value : e.target.value
        }
       dispatch(action)
           },
           handlebtn(){
            const action ={
                type:'addlist'
            }
            dispatch(action)
        },
        handledelete(index){
            const action = {
                type:"listdelete",
                index
            }
           dispatch(action)
        },
        handledelete(index){
            const action = {
                type:"listdelete",
                index
            }
           dispatch(action)
        }

}
}

export default connect(test,test1)(TodoList)