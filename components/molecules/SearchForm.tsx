import { FormGroup, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { SearchFormInput } from "../../types";
import { SearchInput } from "../atoms/SearchInput";
import { FormWrapper } from "./Form.wrapper";

export const SearchForm = () => {
  const methods = useForm<SearchFormInput>({
    defaultValues: { query: "" },
    mode: "onChange",
  });
  const { handleSubmit, control, formState, reset } = methods;
  const onSubmit = (data: SearchFormInput) => {
    console.log(data);
    reset();
  };
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormGroup row>
        <SearchInput control={control} elementName={"query"} />
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          type="submit"
        >
          Search
        </Button>
      </FormGroup>
    </FormWrapper>
  );
};
