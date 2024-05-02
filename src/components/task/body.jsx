import { useContext } from "react";
import Modal from "../modal/modal";
import {
  MdDeleteOutline,
  MdEditDocument,
  MdCheck,
  MdDoNotDisturbAlt,
} from "react-icons/md";
import { functionContext, taskContext } from "../../hooks/context";

function Body({ data, check }) {
  const { Delete, handleCompleted } = useContext(functionContext);
  const { setCompleted, modal, setModal, taskId, setTaskId } =
    useContext(taskContext);

  return (
    <div key={data.id} className="task">
      <p>{data.name}</p>
      <div className="task__button">
        {check ? (
          <>
            {data.completed === 1 ? (
              <MdCheck
                className="button"
                onClick={async () => {
                  await handleCompleted(0, data.id, setCompleted);
                }}
              />
            ) : (
              <MdDoNotDisturbAlt
                className="button"
                onClick={async () => {
                  await handleCompleted(1, data.id, setCompleted);
                }}
              />
            )}
            <button>
              <MdDeleteOutline
                onClick={async () => {
                  await Delete(data.id);
                }}
              />
            </button>
            <button>
              <MdEditDocument
                onClick={() => {
                  setTaskId(data.id);
                  setModal(!modal);
                }}
              />
            </button>
            <Modal idem={taskId} />
          </>
        ) : (
          <>
            {data.completed === 1 ? (
              <MdCheck
                className="button"
                onClick={async () => {
                  await handleCompleted(0, data.id);
                }}
              />
            ) : (
              <MdDoNotDisturbAlt
                className="button"
                onClick={async () => {
                  await handleCompleted(1, data.id);
                }}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Body;
