export async function editCompletedTask(v, id) {
  try {
    await fetch(`${import.meta.env.VITE_URL}/completed/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: v }),
    });
  } catch (error) {
    return error;
  }
}
export async function editTask(id, editTask) {
  try {
    const res = await fetch(`${import.meta.env.VITE_URL}/edit/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editTask),
    });
    return res;
  } catch (error) {
    return error;
  }
}
export async function showTaskCompleted() {
  try {
    const res = await fetch(`${import.meta.env.VITE_URL}/task/completed`);
    return await res.json();
  } catch (error) {
    return error;
  }
}
export async function saveTask(newTask) {
  try {
    const response = await fetch(`${import.meta.env.VITE_URL}/task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    return response;
  } catch (error) {
    return error;
  }
}
export async function deleteTask(id) {
  try {
    const res = await fetch(`${import.meta.env.VITE_URL}/delete/${id}`, {
      method: "DELETE",
    });
    return res;
  } catch (error) {
    return error;
  }
}
export async function showTask() {
  const response = await fetch(`${import.meta.env.VITE_URL}/task`);
  return await response.json();
}
