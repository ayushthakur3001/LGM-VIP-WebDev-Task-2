import "./Loader.css";
function Loader({load}) {
  return (
    (load) ?
    <div className="containerL">
      <div className="loader"></div>
    </div>
    :""
  );
}

export default Loader;
