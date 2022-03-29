import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { SearchFormInputProps } from "../../types";

export const SearchInput = ({
  elementName,
  control,
  validationRules,
}: SearchFormInputProps) => (
  <Controller
    name={elementName}
    control={control}
    rules={validationRules}
    render={({ field }) => (
      <TextField
        size="small"
        {...field}
        variant="outlined"
        placeholder="Search"
        sx={{
          input: {
            color: "white",
          },
          "& fieldset.MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255, 255, 255, 0.5)",
            color: "white",
          },
          "& fieldset": {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          },
        }}
        onChange={(e) => field.onChange(e.target.value.trim())}
        onBlur={field.onBlur}
      />
    )}
  />
);
