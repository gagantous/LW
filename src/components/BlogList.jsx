import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {StyleSheet, css} from 'aphrodite'
import '../scss/blog'

const BlogItem = ({blog}) => {
  const max = 200
  return (
    <li>
      <Link 
        key={blog.id}
        to={`/blogs/${blog.id}`}
      >
        <div className="flex">
          <div className="image large-4">
            image
          </div>
          <div className="text large-8">
            <div className="header">
              <h4>BERITA</h4>
              <h4>NOVEMBER 14, 2017</h4>
            </div>
            <div className="content">
              <h2>{blog.title}j</h2>
              <div className="content-text">
                <p> 
                  { 
                    blog.body.length > max ? 
                    blog.body.substring(0, max) + `...` :
                    blog.body
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

class BlogList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      loading: true,
      currentPage: 1,
      blogsPerPage: 6
    }
    this.pagination = this.pagination.bind(this)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(results => {
      return results.json()
    }).then(data => (
      this.setState({
        blogs: data,
        loading: false
      })
    ))
  }

  pagination(e) {
    e.preventDefault()
    this.setState({
      currentPage: Number(e.target.id)
    })
    console.log('adsf')
  }

  render() {
    const { blogs, loading, currentPage, blogsPerPage } = this.state
    const indexOfLastTodo = currentPage * blogsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstTodo, indexOfLastTodo);
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(blogs.length / blogsPerPage); i++) {
      pageNumbers.push(i);
    }

    const styles = {
      padding: '10px',
      textDecoration: 'none',
      background: '#fff',
      color: '#333',
      padd: {
        padding: '5px'
      }
    }

    return (
      <div>
        <ul>
          { !loading ?
            currentBlogs.map(i => (
              <BlogItem key={i.id} blog={i}/>
            ))
            : <div><img src="./src/images/placeholder.jpg" alt=""/></div>
          }
        </ul>
        <ul className="flex flex-center">
          {
            pageNumbers.map(number => {
              return (
                <li style={styles.padd}><a style={styles} href="#" key={number} id={number} onClick={this.pagination}>{number}</a></li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default BlogList