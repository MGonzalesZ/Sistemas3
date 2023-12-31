import Image from "@/components/Image";
import Titulo from "@/components/Tittle";
import Paraf from "@/components/Paraf";
import Boton from "./Button";
import './btnstyle.css';

function C2l(props) {
    const tstyle = {
        borderRadius: "20px",
        height: "350px",
    };
    const bstyle = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#dfbcc6",
    };
    const fstyle = {
        textAlign: "left",
        color: "grey",
        fontSize: "40px",
        fontWeight: "500",
        fontFamily: "Lucida Console, Courier New, monospace",
    };
    const pstyle = {
        textAlign: "left",
        color: "grey",
        fontSize: "20px",
        fontWeight: "100",
        fontFamily: "Lucida Console, Courier New, monospace",
    };

    return(
        <div className="contenedorf" style={tstyle}>
            <Image src={props.image} imgstyle={tstyle}/>
            <div className="contenedor3">
                <Titulo titulo={props.titulo} fontstyle={fstyle}/>
                <Paraf desc={props.desc} pstyle={pstyle}/>
                <Boton nombre={props.nombre} style1={bstyle}/>
            </div>
        </div>
    );
}

export default C2l;