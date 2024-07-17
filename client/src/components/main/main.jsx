import { colorContext } from "../../context/theme/themeContext";
import { TaskContext } from "../../context/task/taskContext";
import { useState, useEffect } from "react";
import { useContext } from "react";
import Typed from "react-typed";
import Task from "./task";
import Form from "./form";

function Main() {
  const { listTask, listAll } = useContext(TaskContext);
  const {colors} = useContext(colorContext)
  const [act, setAct] = useState(false);

  useEffect(() => {
    listAll();
    setAct(false);
    // eslint-disable-next-line
  }, [act]);

  return (
    <>
      <main className="main flex">
        <div className={`container-main-${colors} flex`}>
          <Typed
            className={`typed-${colors}`}
            strings={["Just do it."]}
            typeSpeed={60}
          />
        </div>
        <div className="form-main flex">
          <Form color={colors} setAct={setAct} />
          {listTask.map((data) => (
            <Task key={data.id} data={data} setAct={setAct} />
          ))}
          {!listTask.length ? (
            <div className={`notTask-${colors} flex`}>
              <p> There are no tasks.</p>
            </div>
          ) : null}
        </div>
      </main>
    </>
  );
}

export default Main;
