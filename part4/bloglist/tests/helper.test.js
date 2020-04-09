const listHelper = require('../utils/list_helper')

const blogs = [
    {
        id:"5a422a851b54a676234d17f7",
        title:"React patterns",
        author:"Michael Chan",
        url:"https://reactpatterns.com/",
        likes:7
    },
    {
        id:"5a422aa71b54a676234d17f8",
        title:"Go To Statement Considered Harmful",
        author:"Edsger W. Dijkstra",
        url:"http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes:5
    },
    {
        id:"5a422b3a1b54a676234d17f9",
        title:"Canonical string reduction",
        author:"Edsger W. Dijkstra",
        url:"http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
        likes:12
    },
    {
        id:"5a422b891b54a676234d17fa",
        title:"First class tests",
        author:"Robert C. Martin",
        url:"http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
        likes:10
    },
    {
        id:"5a422ba71b54a676234d17fb",
        title:"TDD harms architecture",
        author:"Robert C. Martin",
        url:"http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
        likes:0
    },
    {
        id:"5a422bc61b54a676234d17fc",
        title:"Type wars",
        author:"Robert C. Martin",
        url:"http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
        likes:2
    }
]

describe('Total likes', () => {
    test('of empty list is zero', () => {
        const resultEmptyBlogList = listHelper.totalLikes([])
        expect(resultEmptyBlogList).toBe(0)
    })

    test('when list has only one blog equals the likes of that blog', () => {
        const blog = blogs[0]
        const resultOneBlogInList = listHelper.totalLikes([blog])
         expect(resultOneBlogInList).toBe(blog.likes)
    })

    test('of a bigger list is calculated right', () => {
        const result = listHelper.totalLikes(blogs)
        expect(result).toBe(36)
    })
  })

describe('Favorite blog', () => {
    test('of empty list is {}', () => {
        const resultEmptyBlogList = listHelper.favoriteBlog([])
        expect(resultEmptyBlogList).toEqual({})
    })

    test('when list has only one blog equals that blog', () => {
        const blog = blogs[0]
        const maxLikes = listHelper.favoriteBlog([blog])
        const favoriteBlog = blogs.find(blog => blog.likes === maxLikes)
        expect(favoriteBlog).toEqual(blog)
    })

    test('of a bigger list is calculated right', () => {
        const maxLikes = listHelper.favoriteBlog(blogs)
        const favoriteBlog = blogs.find(blog => blog.likes === maxLikes)
        expect(favoriteBlog).toEqual({
            id:"5a422b3a1b54a676234d17f9",
            title:"Canonical string reduction",
            author:"Edsger W. Dijkstra",
            url:"http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
            likes:12
        })
    })
})

describe('Author who has the largest amount of blogs', () => {
    test('of empty list is {}', () => {
        const resultEmptyBlogList = listHelper.mostBlogs([])
        expect(resultEmptyBlogList).toEqual({})
    })

    test('when list has only one blog equals to the author of that blog', () => {
        const blog = blogs[0]
        const mostBlogs = listHelper.mostBlogs([blog])
        expect(mostBlogs).toEqual({
            author: blog.author,
            blogs: 1
        })
    })

    test('of a bigger list is calculated right', () => {
        const mostBlogs = listHelper.mostBlogs(blogs)
        expect(mostBlogs).toEqual({
            author: "Robert C. Martin",
            blogs: 3
        })
    })
})

describe('Author whose blog posts have the largest amount of likes', () => {
    test('of empty list is {}', () => {
        const resultEmptyBlogList = listHelper.mostLikes([])
        expect(resultEmptyBlogList).toEqual({})
    })

    test('when list has only one blog equals to the author of that blog', () => {
        const blog = blogs[0]
        const mostBlogs = listHelper.mostLikes([blog])
        expect(mostBlogs).toEqual({
            author: blog.author,
            likes: 7
        })
    })

    test('of a bigger list is calculated right', () => {
        const mostBlogs = listHelper.mostLikes(blogs)
        expect(mostBlogs).toEqual({
            author: "Edsger W. Dijkstra",
            likes: 17
        })
    })
})