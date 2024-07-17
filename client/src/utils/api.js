export async function registerTask(task) {
  const URI = "http://localhost:8000/new";

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
  const URI = `http://localhost:8000/delete/${id}`;

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
  const URI = "http://localhost:8000/list";

  try {
    const response = await fetch(URI, {
      method: "GET",
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

