// Import core libraries
import React, {Fragment} from 'react'

const Title = ({children, isSubtitle = false}) => {
  return (
    <Fragment>
      {
        /* Conditional rendering */
        !isSubtitle
        ? 
        (
          <h1>{children}</h1>
        ) 
        : 
        (
          <h2>{children}</h2>
        )
      }
    </Fragment>
  )
}

export default Title
