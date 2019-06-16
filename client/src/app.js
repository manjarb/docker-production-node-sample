import React from 'react'
import 'bulma/css/bulma.css'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom"
import { Provider } from 'react-redux'

import store from './redux/store'
import { Admin, AdminReview } from "./container"
import { Employee } from "./container"
import { Header } from "./component"

const App = () => (
  <Provider store={store}>
    <Router>
        <Header/>
        <Route path="/" exact render={() => (<Redirect to="/admin" />)} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/admin/review" exact component={AdminReview} />
        <Route path="/employee" exact component={Employee} />
    </Router>
  </Provider>
)

export default App
