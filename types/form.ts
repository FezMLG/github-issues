import { Control, RegisterOptions } from "react-hook-form";

export type SearchFormInputProps = {
  control: Control<SearchFormInput, any>;
  elementName: SearchFormInputNames;
  validationRules?: RegisterOptions;
};
export type SearchFormInput = {
  query: string;
};

export type SearchFormInputNames = keyof SearchFormInput;
