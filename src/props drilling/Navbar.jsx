import Profile from "./Profile"

function Navbar({userName}) {
  return (
    <div>
        <Profile userName={userName}/>
    </div>
  )
}

export default Navbar