import Header from "./Header";
import Footer from "./Footer";

import './styles.scss'
import SideMenu from "./SideMenu";

export default function Layout({children}) {
  return (
    <>
      <Header/>
      <div className="container">
        <SideMenu/>
        <div className={"container-content"}>
          <div className={"content"}>
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}