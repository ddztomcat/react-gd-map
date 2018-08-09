import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from '@/redux/reducers'
import Footer from '@/components/dumbs/Footer'
import AddTodo from '@/components/smarts/AddTodo'
import VisibleTodoList from '@/components/smarts/VisibleTodoList'

let store = createStore(todoApp)
const App = () => {
    return <div>
        <Provider store={store}>
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        </Provider>
    </div>
}
export default App