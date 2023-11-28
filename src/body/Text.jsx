import {  FaTrash, FaCheckCircle } from "react-icons/fa";
import { useEffect,useState } from "react";
import "./BodyContent.css";
import MyButton from "../MyButton";
const Text = ( ) => {

  const [inputdata, setData] = useState("");

  const saveditems = JSON.parse(localStorage.getItem("people"));
  const [people, setPeople] = useState(saveditems || []);

  const clearall = () => {
    setPeople([]);
  };

  const removeItem = (myid) => {
    const del = people.filter((item) => item !== myid);
    setPeople(del);
  };

  function handleType(e) {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...inputdata, [name]: value });
  }
  const handleSubmit = (e) => {
    if (inputdata.firstName) {
      e.preventDefault();
      const newPerson = { ...inputdata, id: new Date().getTime().toString(),completed:true };
      setPeople([...people, newPerson]);
      setData({ firstName: "" });
    }
  };
  
  const handleClick = (e) => {
    e.target.classList.toggle("strikeThrough");
    localStorage.setItem('people', JSON.stringify(people));
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
<button className="rd11"><MyButton to="" /></button>
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


      <div className="items" style={{display:"grid",gridGap:"10px"}}>
        {people.map((item,index) => {
          const { firstName} = item;

          return (
            <div>
              
              <div className="item" key={item.ID}>
            
                <div className="one" key={item.ID}>
               
                  <p  key={index}  onClick={handleClick}>
                    {item.firstName}</p>
                  
                  <div className="btns">
                   
                    <button
                      type="button"
                      className="delete-btn"
                      onClick={() => removeItem(item)}
                    >
                      <FaTrash className="icons" />
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


