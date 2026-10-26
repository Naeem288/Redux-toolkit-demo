import Navbar from "./Navbar"
function Layout({ userName }) {
  return (
    <div>
        <Navbar userName={userName}/>
    </div>
  )
}

export default Layout;
