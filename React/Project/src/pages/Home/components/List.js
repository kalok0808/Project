import Item from "./Item";

const List = ({ listData, deleteData, submittingStatus }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { id, name,description , assignTo, date } = item;
        console.log(item);
        return (
          <Item
            key={id}
            id={id}
            note={name}
            descrip={description}
            date={date}
            img={assignTo}
            deleteData={deleteData}
            submittingStatus={submittingStatus}
          />
        );
      })}
    </div>
  );
};

export default List;
