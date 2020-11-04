import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'

import Pagination from './components/Pagination/Pagination.jsx'
import Issue from './components/Issue'
import Home from './components/Home/Home.jsx'

import { fetchIssues } from './api'

const App = () => {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  useEffect(() => {
    const getData = async () => {
      const fetchedIssues = await fetchIssues()
      setData(fetchedIssues)
    }
    getData()
  }, [])

  const issues = []
  for (const [,value] of Object.entries(data)) {
      issues.push([value['title'], value['number'], value['state'], value['id'],
          value.user['login'], value['created_at'], value['body']])
  }

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = issues.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
    <Router>
      <Switch>
        <Route exact path='/' render={props =>
          <div>
            <Home {...props} issues={currentPosts} />
            <Pagination {...props} postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate} />
          </div>} />
        {issues.map((issue, i) => {
          return (
          <Route exact path={`/${issue[3]}`} render={(props) => 
            <Issue {...props} title={issue[0]} number={issue[1]} 
              state={issue[2]} id={issue[3]} login={issue[4]} 
              created={issue[5]} body={issue[6]} />} />
          )
        })}
      </Switch>
    </Router>
    </div>
  )

}

export default App