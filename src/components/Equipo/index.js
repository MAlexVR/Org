import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  //Destructuración
  const { colorPrimario, colorSecundario, titulo, id } = props.datos;
  const { colaboradores, eliminarColaborador, actualizarColor, like } = props;

  const obj = {
    backgroundColor: hexToRgba(colorPrimario, 0.2),
  };

  //console.log(colaboradores.length > 0);

  const estiloTitulo = {
    borderColor: colorPrimario,
  };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={obj}>
          <input
            type="color"
            className="input-color"
            value={colorPrimario}
            onChange={(event) => {
              actualizarColor(event.target.value, id);
            }}
          />
          <h3 style={estiloTitulo}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador) => (
              <Colaborador
                datos={colaborador}
                key={indexedDB}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
