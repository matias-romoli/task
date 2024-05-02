import { Formik, Form, Field } from "formik";
import { toast } from "react-toastify";
import { saveTask } from "../API/api";

function FormTask() {
  const handleSubmit = async (v, { setSubmitting, resetForm }) => {
    try {
      const submit = await saveTask(v);
      if (submit) {
        toast.success("Task saved successfully");
        resetForm();
      }
    } catch (error) {
      return error;
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      <Formik initialValues={{ newTask: "" }} onSubmit={handleSubmit}>
        <Form className="form">
          <Field
            type="text"
            name="newTask"
            autoComplete="off"
            placeholder="What´s next..."
          />
        </Form>
      </Formik>
    </>
  );
}

export default FormTask;
