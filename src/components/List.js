import ListItem from "./ListItem";
function List(props) {
  return (
    <>
      {props.list.map((item) => (
        <ListItem key={item} item={item} />
      ))}
    </>
  );
}

export default List;
