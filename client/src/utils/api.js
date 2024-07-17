export async function registerTask(task) {
  const URI = "https://task-33mb.onrender.com/new";

  try {
    const response = await fetch(URI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        task,
      }),
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}
export async function deleteTask(id) {
  const URI = `https://task-33mb.onrender.com/delete/${id}`;

  try {
    const response = await fetch(URI, {
      method: "DELETE",
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}
export async function listTaskAll() {
  const URI = "https://task-33mb.onrender.com/list";

  try {
    const response = await fetch(URI, {
      method: "GET",
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

