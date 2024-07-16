import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="price" source="price" />
        <TextInput label="description" multiline source="description" />
        <BooleanInput label="available" source="available" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
