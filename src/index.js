import React from 'react'
import {render} from 'react-dom'
import TodoList from './TodoList'
import {Provider} from 'react-redux'


import store from './store/index'


const App = (
    <Provider store ={store}>
<TodoList/>
    </Provider>
)








render(App,document.getElementById('root'))