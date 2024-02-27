import "./hello.css";
function Hello() {
  const world = "world";
  function toAdd() {
    return <div>To add a Task : </div>;
  }
  return (
    <div className="hello">
      <p>hello {world}</p>
      {toAdd()}
    </div>
  );
}
export default Hello;
