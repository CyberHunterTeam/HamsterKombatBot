import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="price" source="price" />
        <TextInput label="description" multiline source="description" />
        <BooleanInput label="available" source="available" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
