import React from 'react'


const UI =(props)=>{
    return (
        <div>
        <input type="text" value={props.value} onChange={props.handlechange} />
        <button onClick={props.handlebtn}>subimit</button>
        {
            props.list.map((item,index)=>{
                return <li onClick={(index)=>{props.handledelete(index)}} key={index}>{item}</li>
            })
        }

    </div>
       )
}
// class UI extends Component{
//     render(){
//        return (
//         <div>
//         <input type="text" value={this.props.value} onChange={this.props.handlechange} />
//         <button onClick={this.props.handlebtn}>subimit</button>
//         {
//             this.props.list.map((item,index)=>{
//                 return <li onClick={(index)=>{this.props.handledelete(index)}} key={index}>{item}</li>
//             })
//         }

//     </div>
//        )
//     }
// }
export default UI