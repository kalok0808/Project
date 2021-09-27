import png from "../components/user.png";

const Item = ({ id, note, descrip, date, img, deleteData, submittingStatus }) => {

  function deleteItem() {
    submittingStatus.current = true
    deleteData(function (prev) {
      return prev.filter(item => item.id !== id)
    })
  }

  return (
    <div className="item-main">
    <div className="item">
      <div>
        <p>PROJECT:{note}</p>
        <p>DESCRIPTION:{descrip}</p>
        <p>DUE DATE:{date}</p>
        <div>
          ASSIGN TO
          <img src={png} alt="abc"></img>
          <img src={png} alt="abc"></img>
          <img src={png} alt="abc"></img>
        </div>
      </div>
      <button onClick={deleteItem} className="remove">DELETE</button>
    </div>
    </div>
  );
};

export default Item;
