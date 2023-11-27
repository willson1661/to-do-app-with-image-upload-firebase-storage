
import { FaTrash,FaCheckCircle} from "react-icons/fa";
import { useState , useEffect} from 'react';
import "./Firebase.css"
import MyButton from "../MyButton"

import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  deleteObject

} from "firebase/storage";

import { storage} from "./firebase";


import { FaUpload } from 'react-icons/fa';
 // eslint-disable-next-line
const Firebasemain =()=> {

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
    
  };



  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev,url]);
        });
      });
      console.log(response);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


// eslint-disable-next-line
  const removeItem11 = (url) => {
  let pictureRef=ref(storage,url);
deleteObject(pictureRef);
window.open("/uploadimage","_self")
 };



  return (
    <div className='App'>
<button className="rd11"><MyButton to="" /></button>

  
<div className="total">

<input
className='ret11'
        type="file"
        id='er'
        multiple
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <label for="er"><FaUpload/></label>
     
      <button onClick={uploadFile} className="gt1">        <FaCheckCircle /></button>
      </div>
      <div className="imagess">
      {imageUrls.map((url) => {
        return (
        <div className='brder'>
        <img src={url} style={{width:"150px", height:"150px"}} alt="url" />
        
        <button
                    
                      className="delete-btnsss"
                      onClick={() => removeItem11(url)}
                    >
                      <FaTrash className="icons" />
                    </button>
        </div>
        );
      })}
</div>
    </div>
  );
}

export default Firebasemain;
