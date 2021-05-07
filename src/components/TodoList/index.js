import React ,{Component} from 'react';
import {connect} from 'react-redux';
import { GetInputValue,GetTodoList,DeleteTodoList} from '../../store/actionCreates';

// class TodoList extends Component{
//     constructor(props){
//         super(props);
//     }
//     render (){
//         const {inputValue,list,handleChange,handleClick,handleDel}=this.props;
//         return (
//             <div>
//                 <input type="text"  onChange={handleChange} value={inputValue}/>
//                 <button type="button" onClick={handleClick}>点击</button>
//                 <ul>
//                     {
//                        list.map((item,index)=>{
//                             return <li key={index} onClick={handleDel.bind(this,index)}>{item}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
// } 


//无状态组件
const TodoList=(props)=>{
      const {inputValue,list,handleChange,handleClick,handleDel}=props;
        return (
            <div>
                <input type="text"  onChange={handleChange} value={inputValue}/>
                <button type="button" onClick={handleClick}>点击</button>
                <ul>
                    {
                       list.map((item,index)=>{
                            return <li key={index} onClick={handleDel.bind(this,index)}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
}


//将state中的数据映射到TodoList组件的props属性中
const mapStateToProps=(state)=>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}

//使props中的属性方法可以调用dispatch方法来操作action 进而改变store中的数据
const mapDispatchToProps=(dispatch)=>{
    return{
        // input 输入改变inputValue
        handleChange(e){
            const action=GetInputValue(e.target.value)
            dispatch(action)
        },
        handleClick(){
            const action=GetTodoList();
            dispatch(action)
        },
        handleDel(index){
            const action=DeleteTodoList(index);
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(TodoList);