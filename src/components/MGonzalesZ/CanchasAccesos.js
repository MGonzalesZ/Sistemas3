import './CanchasAccesos.css';

const DeportesAccesos = (props) => {
  return (
    <div>
      <div className="col deporte-item">
        <h4>{props.titulo}</h4>
        <img src={`images/${props.imagen}`} alt={props.titulo} />
      </div>
      <div className="col"></div>
    </div>
  );
};
export default DeportesAccesos;
