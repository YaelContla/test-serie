import React, { useState } from "react";
// import serie_img from "../../../src/assets/serie_img.png";
import styles from "./styles.module.css";
import SerieVisual from "../serieVisual/SerieVisual";
import { serie_n } from "../../helpers/serie";

const Formulario = () => {
  // Definir estado para el valor del input
  const [numero, setNumero] = useState("");
  const [resultadoSerie, setResultadoSerie] = useState(null);

  // Manejo de cambios en el input
  const handleChange = (event) => {
    setNumero(event.target.value); // Actualizar el estado con el valor del input
  };

  // Envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar el comportamiento predeterminado de enviar el formulario
    const valorNumero = parseInt(numero); // Convertir el valor del input a un número entero
    const resultadoSerie = serie_n(valorNumero); // Calcular la serie con el valor del input
    console.log("Resultado de la serie:", resultadoSerie);
    setResultadoSerie(resultadoSerie); // Guardar el resultado en el estado
  };

  
  const resultadoTexto =
    resultadoSerie !== null
      ? `El resultado de la serie para el número ${numero} es: ${resultadoSerie}`
      : "";

  return (
    <>
      <div className={styles.container}>
        <div className={styles.img}>
          <p className={styles.titulo}>
            Prueba Técnica <span className={styles.span}>Series numéricas</span>
          </p>
          {/* <img
            src={serie_img}
            alt="serie_img"
            style={{ width: "400px", height: "90px" }}
          /> */}
        </div>

        <div className="row mt-5">
          <div className="col-6">
            <form
              className="shadow p-5 mb-5 bg-body rounded d-flex flex-column bd-highlight mb-3"
              onSubmit={handleSubmit}
            >
              <label htmlFor="numero" className="block fw-bold" for>
                Ingresa el número n{" "}
              </label>
              <input
                id="numero"
                type="number"
                placeholder="número n"
                className="border mt-2"
                value={numero} // Valor del input
                onChange={handleChange} // Manejar cambios en el input
              />
             
              <p>{resultadoTexto}</p>

              <input
                type="submit"
                className="btn btn-primary mt-3 p-2 fw-bold"
                value="Generar Serie"
              />
            </form>
          </div>
          <div className="col-6">
            <div className="shadow p-5 mb-5 bg-body rounded d-flex flex-column bd-highlight mb-3">
              <SerieVisual resultadoSerie={resultadoSerie} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formulario;
