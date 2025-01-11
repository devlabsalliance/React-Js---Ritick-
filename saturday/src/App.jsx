//import Profile from "./Componenets/Uprofile/Profile";
// import Card from "./Componenets/Comp/Card";
// import Footer from "./Componenets/Comp/Footer";
// import Nav from "./Componenets/Comp/Nav";
import UserList from "./Componenets/Userprofile/UserList";
function App() {

  const user =[{id : 1, Name : 'Abhay' , Age : 22 , Email :'xyz@123',},
    {id : 2, Name : 'Kinshu' , Age : 23,Email :'xyz@1223' },
    {id : 3, Name : 'Ritik' , Age : 24 ,Email :'xyz@12223'},
  ];
  return (
    <div>
    {/* <Profile/> */}
    {/* <Nav/>
    <Footer/>
    <div className="card1">
    
    <Card title="Devlabs Alliance"  Description="We help you create a better,faster and more skilled team"/>
    <Card title="Devlabs Alliance"  Description="We help you create a better,faster and more skilled team"/>
    <Card title="Devlabs Alliance"  Description="We help you create a better,faster and more skilled team"/>
    <Card title="Devlabs Alliance"  Description="We help you create a better,faster and more skilled team"/>

    </div> */}

    <h1 >User List</h1>
    <UserList user ={user}/>
    

    </div>
  );
}


export default App;
