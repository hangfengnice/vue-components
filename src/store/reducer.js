export default (state = {
    value: 'hangfeng',
    list: [1, 2]
}, action) => {
    if (action.type === 'inputvalue') {
        const newstate = JSON.parse(JSON.stringify(state))
        newstate.value = action.calue
        return newstate
    }
    if (action.type === 'addlist') {
        const newstate = JSON.parse(JSON.stringify(state))
        newstate.list.push(newstate.value)
        newstate.value = ''
        return newstate
    }
    if (action.type === 'listdelete') {
        const newstate = JSON.parse(JSON.stringify(state))
        newstate.list.splice(action.index,1)
      
        return newstate
    }
    if (action.type === 'initlist') {
        const newstate = JSON.parse(JSON.stringify(state))
        newstate.list = action.data
      
        return newstate
    }
    return state

}