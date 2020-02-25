import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  PasswordInput,
  ReferenceInput,
  SelectInput,
  Filter
} from "react-admin";

const CustomTitle = ({ record }) => {
  return (
    <span>
      User - {record ? `${record.first_name} ${record.last_name}` : ""}
    </span>
  );
};

const CustomFilter = props => (
  <Filter {...props}>
    <TextInput label="Search Name" source="first_name" alwaysOn />
    <ReferenceInput label="Role" source="role" reference="user" allowEmpty>
      <SelectInput optionText="role" />
    </ReferenceInput>
  </Filter>
);

export const UserList = props => (
  <List filters={<CustomFilter />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="user" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <NumberField source="role" />
      <EditButton />
    </Datagrid>
  </List>
);

export const UserEdit = props => (
  <Edit title={<CustomTitle />} {...props}>
    <SimpleForm>
      <TextInput source="user" />
      <TextInput source="first_name" />
      <TextInput source="last_name" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="user" />
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <PasswordInput source="password" />
    </SimpleForm>
  </Create>
);
