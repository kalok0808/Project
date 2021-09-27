import { useState } from "react";
import { v4 } from "uuid";
import png from '../components/user.png';

const Edit = ({ add, submittingStatus }) => {
  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }
  const [descrip, setDescrip] = useState("");
  function DescripChange(e) {
    setDescrip(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [img, setImg] = useState("");
  function imgChange(e) {
    setImg(e.target.value);
  }

  console.log(note, descrip, date, img);

  function addItem() {
    submittingStatus.current = true
    add(function (prevData) {
      return [
        {
          id: v4(),
          note,
          descrip,
          date,
          img,
        },
        ...prevData,
      ];
    });
  }

  return (
    <div>
      {/* <form id="form" className="form-noshow"> */}
        <div className="form-main">
          <div className="form">
            <p>PROJECT NAME</p>
            <input type="text" value={note} onChange={noteChange} />
            <p>DESCRIPTION</p>
            <input type="text" value={descrip} onChange={DescripChange} />
            <p>DUE DATE</p>
            <input type="date" value={date} onChange={dateChange} />
            <p>ASSIGNED TO</p>
            <div className="ASSIGNED-TO">
              <img src={png} value={img} onChange={imgChange} />
              <img src={png} value={img} onChange={imgChange} />
              <img src={png} value={img} onChange={imgChange} />
            </div>
            <div id="addItem-Btn">
              <button onClick={addItem} className="Confirm">
                <span>CONFIRM</span>
              </button>
            </div>
          </div>
        </div>
      {/* </form> */}

    </div>
  );
};

export default Edit;
