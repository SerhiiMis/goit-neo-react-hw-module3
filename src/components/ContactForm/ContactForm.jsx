import styles from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = ({ onAddContact }) => {
  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters"),
    number: Yup.string()
      .required("Number is required")
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Number must be in format XXX-XX-XX"),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values.name, values.number);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.formContainer}>
        <label className={styles.label}>
          Name:
          <Field type="text" name="name" />
          <ErrorMessage
            name="name"
            component="div"
            className={styles.errorMessage}
          />
        </label>
        <label className={styles.label}>
          Number:
          <Field type="text" name="number" />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.errorMessage}
          />
        </label>
        <button type="submit" className={styles.submitButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
