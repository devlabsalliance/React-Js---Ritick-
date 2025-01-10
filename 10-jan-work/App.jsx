//import Profile from "./Componenets/Uprofile/Profile";
import Card from "./Componenets/Comp/Card";
import Footer from "./Componenets/Comp/Footer";
import Nav from "./Componenets/Comp/Nav";
function App() {
  return (
    <div>
    {/* <Profile/> */}
    <Nav/>
    <Footer/>
    <div className="card1">
    
    <Card title="Devlabs Alliance"  Description="We help you create a better,faster and more skilled team"/>
    <Card title="Devlabs Alliance"  Description="We help you create a better,faster and more skilled team"/>
    <Card title="Devlabs Alliance"  Description="We help you create a better,faster and more skilled team"/>
    <Card title="Devlabs Alliance"  Description="We help you create a better,faster and more skilled team"/>

    </div>
    

    </div>
  );
}

export default App;
