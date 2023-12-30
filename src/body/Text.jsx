import { FaTrash, FaCheckCircle, FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import "./BodyContent.css";
import MyButton from "../MyButton";
const Text = () => {
  const [inputdata, setData] = useState("");
  const [editId, setEditId] = useState(null);
  const saveditems = JSON.parse(localStorage.getItem("people"));
  const [people, setPeople] = useState(saveditems || []);

  const clearall = () => {
    setPeople([]);
  };

  const removeItem = (myid) => {
    const del = people.filter((item) => item.id !== myid);
    setPeople(del);
  };

  function handleType(e) {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...inputdata, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputdata.firstName.trim()) {
      return;
    }

    if (editId !== null) {
      // Editing existing todo
      const updatedTodos = people.map((item) =>
        item.id === editId ? { ...item, firstName: inputdata.firstName } : item
      );
      setPeople(updatedTodos);
      setEditId(null);
      setData({ firstName: "" }); // Clear the input field after editing
    } else {
      // Adding a new task
      const newPerson = {
        ...inputdata,
        id: new Date().getTime().toString(),
        completed: true,
      };
      setPeople([...people, newPerson]);
      setData({ firstName: "" });
    }
  };

  // const handleEdit = (id) => {
  //   const editToDo = people.find((item) => item.id === id);
  //   setPeople(editToDo.text);
  //   setEditId(null);
  // };
  const handleEdit = (id) => {
    const editToDo = people.find((item) => item.id === id);
    if (editToDo) {
      setData({ firstName: editToDo.firstName });
      setEditId(id);
    }
  };

  const handleClick = (id) => {
    const updatedTodos = people.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setPeople(updatedTodos);
  };

  useEffect(() => {
    const people = JSON.parse(localStorage.getItem("people"));
    if (people) {
      setPeople(people);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(people));
  }, [people]);

  return (
    <div>
      <button className="rd11">
        <MyButton to="" />
      </button>
      <div className="inpt">
        <textarea
          type="text"
          placeholder="New Task"
          name="firstName"
          onChange={handleType}
          value={inputdata.firstName}
          spellCheck="true"
        />

        <button onClick={handleSubmit}>
          <FaCheckCircle className="icons" />
        </button>

        {/*            
           <button  className='clr' onClick={clearall}>Clear All Tasks</button> */}

        {people <= 0 ? null : (
          <button className="clr" onClick={clearall}>
            Clear
          </button>
        )}
      </div>

      <div className="items" style={{ display: "grid", gridGap: "10px" }}>
        {people.map((item, index) => {
          const { firstName } = item;

          return (
            <div>
              <div className="item" key={item.id}>
                <div className="one" key={item.id}>
                  <p
                    className="strike"
                    style={{
                      textDecoration: item.completed ? "none" : "line-through",
                      textDecorationColor: "red",
                    }}
                    key={index}
                    onClick={() => handleClick(item.id)}
                  >
                    {firstName}
                  </p>

                  <div className="btns">
                    <button
                      type="button"
                      className="delete-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      <FaTrash className="icons" />
                    </button>
                    <button
                      type="button"
                      className="edit-btn"
                      onClick={() => handleEdit(item.id)}
                    >
                      <FaEdit className="icons" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Text;
