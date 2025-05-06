const blogs = require('./blog-data.json')
const fs = require('fs')

const Blog = {
  data: [...blogs],
  add: (newBlog) => {
    Blog.data.push(newBlog)
  },
  save: () => {
    try {
      fs.writeFileSync('./src/models/blog-data.json', JSON.stringify(Blog.data, null, 2))
    } catch (error) {
      console.error('Error saving blog data:', error)
    }
  }
}

module.exports = Blog