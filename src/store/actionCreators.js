import {
    BtnClick,
    InputValue,
    delete_todo_item,
    INIT_LIST_ACTION
} from './actionTypes'


export const gethandleBtnClick = () => ({
    type: BtnClick,
    
})
export const gethandleInputValue = (value) => ({
    type: InputValue,
    value
})
export const gethandleItemClickDelete = (value) => ({
    type: delete_todo_item,
    value
})
export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

