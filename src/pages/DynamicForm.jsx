import { useState } from "react";
import { formFields } from "../data/formFields";
import { validateField } from "../utils/validation";
import FormField from "../components/FormField";
import { Container, Box, Typography, Button, Paper } from "@mui/material";
import toast from "react-hot-toast";

const DynamicForm = () => {
  const initialData = formFields.reduce(
    (acc, f) => ({ ...acc, [f.name]: "" }),
    {}
  );
  const initialErrors = formFields.reduce(
    (acc, f) => ({ ...acc, [f.name]: "" }),
    {}
  );

  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState(initialErrors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    formFields.forEach((f) => {
      newErrors[f.name] = validateField(f, formData[f.name], formData);
    });
    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((err) => err);
    if (!hasError) {
      console.log("Form submitted:", formData);
      toast.success("Form submitted successfully!");
      const emptyData = formFields.reduce(
        (acc, f) => ({ ...acc, [f.name]: "" }),
        {}
      );
      setFormData(emptyData);

      const emptyErrors = formFields.reduce(
        (acc, f) => ({ ...acc, [f.name]: "" }),
        {}
      );
      setErrors(emptyErrors);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ p: 4, mt: 5, borderRadius: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Smart Dynamic Form
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          {formFields.map((field) => (
            <FormField
              key={field.name}
              field={field}
              value={formData[field.name]}
              error={errors[field.name]}
              onChange={handleChange}
            />
          ))}
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={{
              mt: 2,
              textTransform: "none",
              borderRadius: 3,
              fontWeight: "bold",
            }}
          >
            Submit Form
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default DynamicForm;
