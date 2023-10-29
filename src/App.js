import React from "react";
import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom';
import Navbar from "./Component/Navbar/navbar";
import ContactList from "./Component/contacts/ContactList/ContactList";
import AddContact from "./Component/contacts/AddContact/AddContact";
import ViewContact from "./Component/contacts/ViewContact/ViewContact";
import EditContact from "./Component/contacts/EditContact/EditContact";
let App=()=>{

  return(
   <React.Fragment>
    <Navbar/>
    <Routes>
      <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
       <Route path={'/contacts/list'} element={<ContactList/>}/>
       <Route path={'/contacts/add'} element={<AddContact/>}/>
       <Route path={'/contacts/edit/:contactId'} element={<EditContact/>}/>
       <Route path={'/contacts/view/:contactId'} element={<ViewContact/>}/>
    </Routes>
    

    




   </React.Fragment>
    
  );
}
export default App;