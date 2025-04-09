import './App.css'
import Layout from './layout/Layout'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import PricingPage from './pages/PricingPage'
import TeamPage from './pages/TeamPage'
import ProductDetailsPage from './pages/ProductDetailsPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


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
          <Route path="/ProductDetails">
            <ProductDetailsPage component={ProductDetailsPage}/>
          </Route>
          <Route path="/Contact">
            <ContactPage component={ContactPage}/>
          </Route>
          <Route path="/Pricing">
            <PricingPage component={PricingPage}/>
          </Route>
          <Route path="/Team">
            <TeamPage component={TeamPage}/>
          </Route>
          
        </Switch>
      </Layout>
    </Router>
    </>
  )
}

export default App
