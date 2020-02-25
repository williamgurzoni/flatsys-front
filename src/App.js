import React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";

import jsonapiClient from "./DataProvider";
import authProvider from "./auth/authProvider";

// Icons
import UserIcon from "@material-ui/icons/Person";
import CompaniesIcon from "@material-ui/icons/BusinessCenter";
import CustomerIcon from "@material-ui/icons/People";
import ProjectIcon from "@material-ui/icons/AccountTree";

// Resources
import Dashboard from "./resources/Dashboard";
import { UserList, UserEdit, UserCreate } from "./resources/UserList";

const dataProvider = jsonapiClient("http://localhost:3001/api");

function App() {
  return (
    <Admin
      dashboard={Dashboard}
      authProvider={authProvider}
      dataProvider={dataProvider}
    >
      <Resource
        name="user"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
        icon={UserIcon}
      />
      <Resource name="companies" list={ListGuesser} icon={CompaniesIcon} />
      <Resource name="customer" list={ListGuesser} icon={CustomerIcon} />
      <Resource name="project" list={ListGuesser} icon={ProjectIcon} />
    </Admin>
  );
}

export default App;
