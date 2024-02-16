import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'; 
import Formulario from '../components/formulario/Formulario';
// jest.mock('../../../src/assets/serie_img.png', () => 'serie_img_mock');
import { resultadoTexto } from '../components/formulario/Formulario';

describe('Formulario', () => {
  test.each(Array.from({ length: 10 }, (_, i) => i + 1))('Genera la serie correctamente para el número %i', (numero) => {
    const { getByText, getByPlaceholderText } = render(<Formulario />);

    const inputNumero = getByPlaceholderText('número n');
    fireEvent.change(inputNumero, { target: { value: numero } });

    fireEvent.click(getByText('Generar Serie'));

    // Obtener el elemento que contiene el texto del resultado de la serie
    const resultadoSerieElement = getByText(/El resultado es:/);
    // Extraer el texto del resultado de la serie del elemento
    const resultadoSerie = resultadoSerieElement.textContent.split(':')[1].trim();


  });
});



// test ('La aplicación funciona', () => {

// })