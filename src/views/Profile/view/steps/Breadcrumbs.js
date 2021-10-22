import { Fragment } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const BreadcrumbsDefault = () => {
  return (
    <Fragment>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to='/inventory'> CareerZopt </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to='#'> ProfileDetails </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to='#' active>Attach Resume</Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </Fragment>
  )
}
export default BreadcrumbsDefault
