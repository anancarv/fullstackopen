describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    const user = {
      name: 'Ananias CARVALHO',
      username: 'anancarv',
      password: 'test'
    }
    cy.request('POST', 'http://localhost:3001/api/users', user)
    cy.visit('http://localhost:3000')
  })

  it('Login from is shown', function() {
    cy.contains('username')
    cy.contains('password')
    cy.contains('login')
  })

  describe('Login',function() {
    it('succeeds with correct credentials', function() {
      cy.contains('login')
        .click()
      cy.get('#username')
        .type('anancarv')
      cy.get('#password')
        .type('test')
      cy.get('#login-button')
        .click()
      cy.contains('Ananias CARVALHO logged in')
    })

    it('login fails with wrong password', function() {
      cy.contains('login')
        .click()
      cy.get('#username')
        .type('anancarv')
      cy.get('#password')
        .type('wrong')
      cy.get('#login-button')
        .click()

      cy.get('#error')
        .should('contain', 'Wrong credentials')
        .and('have.css', 'color', 'rgb(255, 0, 0)')

      cy.get('html').should('not.contain', 'Ananias CARVALHO logged in')
    })
  })

  describe('when logged in', function() {
    beforeEach(function() {
      cy.login({ username: 'anancarv', password: 'test' })
    })

    it('a new blog can be created', function() {
      cy.contains('Add new blog')
        .click()
      cy.get('#title')
        .type('First class tests')
      cy.get('#author')
        .type('Edsger W. Dijkstra')
      cy.get('#url')
        .type('http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html')
      cy.contains('add')
        .click()

      cy.contains('First class tests - Edsger W. Dijkstra')
    })

    it('user can like a blog', function() {
      cy.contains('Add new blog')
        .click()
      cy.get('#title')
        .type('First class tests')
      cy.get('#author')
        .type('Edsger W. Dijkstra')
      cy.get('#url')
        .type('http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html')
      cy.contains('add')
        .click()

      cy.contains('First class tests - Edsger W. Dijkstra')
        .click()
      cy.contains('view')
        .click()
      cy.contains('0')
      cy.get('#like-button')
        .click()
      cy.contains('1')
    })

    it('user who created a blog can delete it', function() {
      cy.contains('Add new blog')
        .click()
      cy.get('#title')
        .type('First class tests')
      cy.get('#author')
        .type('Edsger W. Dijkstra')
      cy.get('#url')
        .type('http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html')
      cy.contains('add')
        .click()

      cy.contains('First class tests - Edsger W. Dijkstra')
        .click()
      cy.contains('view')
        .click()
      cy.get('#remove')
        .click()

      cy.get('html').should('not.contain', 'First class tests - Edsger W. Dijkstra')
    })
  })

  describe('Blogs ordered by number of likes', function() {
    beforeEach(function() {
      cy.login({ username: 'anancarv', password: 'test' })
      cy.createBlog({ author: 'John Doe', title: 'test1', url: 'http://example.com./test1' })
      cy.createBlog({ author: 'John Doe', title: 'test2', url: 'http://example.com./test2' })
      cy.createBlog({ author: 'Jane Doe', title: 'test3', url: 'http://example.com./test3' })

      cy.contains('test1').parent().parent().as('blog1')
      cy.contains('test2').parent().parent().as('blog2')
      cy.contains('test3').parent().parent().as('blog3')
    })

    it('they are ordered by number of likes', function() {
      cy.get('@blog1').contains('view').click()
      cy.get('@blog2').contains('view').click()
      cy.get('@blog3').contains('view').click()
      cy.get('@blog1').contains('like').as('like1')
      cy.get('@blog2').contains('like').as('like2')
      cy.get('@blog3').contains('like').as('like3')

      cy.get('@like2').click()
      cy.wait(500)
      cy.get('@like1').click()
      cy.wait(500)
      cy.get('@like1').click()
      cy.wait(500)
      cy.get('@like3').click()
      cy.wait(500)
      cy.get('@like3').click()
      cy.wait(500)
      cy.get('@like3').click()
      cy.wait(500)

      cy.get('.blog').then(blogs => {
        cy.wrap(blogs[0]).contains('3')
        cy.wrap(blogs[1]).contains('2')
        cy.wrap(blogs[2]).contains('1')
      })
    })
  })
})
