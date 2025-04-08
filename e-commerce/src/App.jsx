import './App.css'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
function App() {


  return (
    <>
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <HomePage component={HomePage}/>
          </Route>
          <Route path="/Shop">
            <ShopPage component={ShopPage}/>
          </Route>
          <Route path="/About">
            <AboutPage component={AboutPage}/>
          </Route>
          <Route path="/Blog">
            <BlogPage component={BlogPage}/>
          </Route>
          <Route path="/Contact">
            <ContactPage component={ContactPage}/>
          </Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Switch>
      </Layout>
    </Router>
    </>
  )
}

export default App
