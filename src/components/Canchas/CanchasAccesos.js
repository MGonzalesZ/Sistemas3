import './CanchasAccesos.css';
// import Image from 'next/image';

const DeportesAccesos = (props) => {
  return (
    <div className="deporte-item">
      <center>
        <h4>{props.titulo}</h4>
        <img src={`images/${props.imagen}`} alt={props.titulo} />
      </center>
    </div>
  );
};
export default DeportesAccesos;
