import { taskContext } from "../../hooks/context";
import { Formik, Form, Field } from "formik";
import { editTask } from "../../API/api";
import { toast } from "react-toastify";
import { useContext } from "react";

function Modal({ idem }) {
  const { modal, setModal } = useContext(taskContext);
  const handleSubmit = async (v, { resetForm }) => {
    try {
      const res = await editTask(idem, v);
      if (res) {
        toast.success("task updated successfully");
        setModal(!modal);
        resetForm();
      }
    } catch (error) {
      return error;
    }
  };
  return (
    <>
      <div
        className={modal ? "d-modal" : ""}
        style={{ display: modal ? "block" : "none" }}
      >
        <div className="modal__close">
          <p
            onClick={() => {
              setModal(!modal);
            }}
          >
            x
          </p>
        </div>
        <div className="modal__form">
          <h2> PLEASE, EDIT TASK. </h2>
          <Formik initialValues={{ editTask: "" }} onSubmit={handleSubmit}>
            <Form>
              <Field
                type="text"
                name="editTask"
                autoComplete="off"
                placeholder="..."
              />
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Modal;
