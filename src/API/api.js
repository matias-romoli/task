export async function editCompletedTask(v, id) {
  try {
    await fetch(`https://backend-4r6v.onrender.com/completed/${id}`, {
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
    const res = await fetch(`https://backend-4r6v.onrender.com/edit/${id}`, {
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
    const res = await fetch("https://backend-4r6v.onrender.com/task/completed");
    return await res.json();
  } catch (error) {
    return error;
  }
}
export async function saveTask(newTask) {
  try {
    const response = await fetch("https://backend-4r6v.onrender.com/task", {
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
    const res = await fetch(`https://backend-4r6v.onrender.com/delete/${id}`, {
      method: "DELETE",
    });
    return res;
  } catch (error) {
    return error;
  }
}
export async function showTask() {
  const response = await fetch("https://backend-4r6v.onrender.com/task");
  return await response.json();
}
