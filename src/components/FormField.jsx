import { TextField } from "@mui/material";

const FormField = ({ field, value, error, onChange }) => {
  return (
    <TextField
      fullWidth
      margin="normal"
      label={field.label}
      name={field.name}
      type={field.type}
      value={value}
      onChange={onChange}
      required={field.required}
      error={!!error}
      helperText={error}
      InputLabelProps={field.type === "date" ? { shrink: true } : {}}
    />
  );
};

export default FormField;
