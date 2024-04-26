// Import core libraries
import React from 'react'

// Import components
import {Container, Title, Header} from './components'

const headerLinks = [
  {
    title: 'Inicio',
    href: '/'
  },
  {
    title: 'Blog',
    href: '/'
  }
]

const IndexPage = () => {
  return (
    <Container>
      <Header navlinks={headerLinks} />
      <Title>Hello world!</Title>
    </Container>
  )
}

export default IndexPage
