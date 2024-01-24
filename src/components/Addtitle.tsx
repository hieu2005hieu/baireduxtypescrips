import { useState } from "react";
import "./Addnote.scss";
import { useDispatch, useSelector } from "react-redux";
import { addTitle, deleteTitle } from "../store/reducers/titleSlice";
interface ListTitle{
    id: number,
    nameTitle: string
}
export default function Addtitle() {
    const [textValue,setTextValue] = useState<string>("")
    const listTitle: ListTitle[] = useSelector((state: any) => {
          return state.titleSLice.listTitle
      })
  const dispatch = useDispatch();

  const AddTitleNote = () => {
    dispatch(addTitle(textValue))
      alert("them vao thanh cong");
      setTextValue("")
    };
    const handleDelete = (id: any) => {
        if (confirm("ban co muon xoa khong")) {
             dispatch(deleteTitle(id))
        } 
       
       
    }
  return (
    <>
      <header>
        <h2>NOTE app</h2>
      </header>
      <body>
        <div className="title">
          <input
            type="text"
            placeholder="title Take a note..."
            value={textValue}
            name="name"
            onChange={(e)=>setTextValue(e.target.value)}
          />
          <button onClick={AddTitleNote}>+</button>
              </div>
              <div>
                  {listTitle.map((item, index) => (
                      <div key={index}>
                          <p> id:{item.id}</p>
                          <p>nameNote:{item.nameTitle}</p>
                          <button onClick={()=>handleDelete(item.id)}>xoa</button>
                      </div>
                  ))}
              </div>
      </body>
    </>
  );
}
