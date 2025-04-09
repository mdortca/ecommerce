import Header from './Header';
import Footer from './Footer';
import PageContent from './PageContent'

function Layout({ children }) {


  return (
    <>
        <Header/>
            <PageContent>
                <main>{children}</main>
            </PageContent>
        <Footer/>
    </>
  )
}

export default Layout
