/**
 * Función para calcular la media de una lista de números.
 * @param {number[]} numeros - Lista de números.
 * @returns {number} La media de la lista de números.
 */
function obtenerMedia(numeros) {
  if (numeros.length === 0) return 0; // Validación para lista vacía
  let total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  let media = total / numeros.length;
  return media;
}

/**
* Función para calcular la mediana de una lista de números.
* @param {number[]} numeros - Lista de números.
* @returns {number} La mediana de la lista de números.
*/
function obtenerMediana(numeros) {
  let numerosOrdenados = numeros.slice().sort((a, b) => a - b);
  let n = numerosOrdenados.length;
  let mediana;
  if (n % 2 === 0) {
      mediana = (numerosOrdenados[n / 2 - 1] + numerosOrdenados[n / 2]) / 2;
  } else {
      mediana = numerosOrdenados[(n - 1) / 2];
  }
  return mediana;
}

/**
* Función para calcular la desviación estándar de una lista de números.
* @param {number[]} numeros - Lista de números.
* @returns {number} La desviación estándar de la lista de números.
*/
function obtenerDesviacionEstandar(numeros) {
  let media = obtenerMedia(numeros);
  let desviaciones = numeros.map(numero => Math.pow(numero - media, 2));
  let varianza = desviaciones.reduce((acumulador, desviacion) => acumulador + desviacion, 0) / numeros.length;
  let desviacionEstandar = Math.sqrt(varianza);
  return desviacionEstandar;
}

/**
* Función para calcular las estadísticas y mostrar los resultados en el frontend.
*/
function calcularEstadisticas() {
  const input = document.getElementById('numeros').value;
  const numeros = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
  
  const media = obtenerMedia(numeros);
  const mediana = obtenerMediana(numeros);
  const desviacionEstandar = obtenerDesviacionEstandar(numeros);

  document.getElementById('media').innerText = `Media: ${media}`;
  document.getElementById('mediana').innerText = `Mediana: ${mediana}`;
  document.getElementById('desviacionEstandar').innerText = `Desviación estándar: ${desviacionEstandar}`;
}

// Evento para el botón de calcular
document.getElementById('calcular').addEventListener('click', calcularEstadisticas);
