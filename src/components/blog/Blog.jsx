import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:4000/user";

const Blog = () => {
  const [reload, setReload] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [reload]);

  const handleCreate = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let newBlog = Object.fromEntries(formData.entries());

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    }).then((res) => {
      console.log(res);
      e.target.reset();
      setReload((p) => !p);
    });
  };

  const handleDelete = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setReload((p) => !p);
    });
  };

  return (
    <div>
      <form onSubmit={handleCreate} action="">
        <input type="text" placeholder="first name" name="name" />
        <input type="text" placeholder="last name" name="surname" />
        <button>add</button>
      </form>
      <br />
      <div>
        {data?.map((info) => (
          <div key={info.id}>
            <h3>{info.name}</h3>
            <h3>{info.surname}</h3>
            <button onClick={() => handleDelete(info.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
