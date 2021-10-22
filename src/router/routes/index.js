// ** Routes Imports

// import Menus from './Menus'
import User from './User'
// import Pages from './Pages'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/mastersettings'

// ** Merge Routes
const Routes = [
  // ...Pages,
  ...User
]

export { DefaultRoute, TemplateTitle, Routes }
