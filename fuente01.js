// Funciones

/**
 * Suma dos números.
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 * @returns {number} - La suma de a y b.
 * @throws {Error} - Si los argumentos no son números.
 */
function suma(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Ambos argumentos deben ser números');
  }
  return a + b;
}

// Manejo del evento de clic en el botón
document.getElementById('calculateBtn').addEventListener('click', function() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultElement = document.getElementById('result');
  const errorElement = document.getElementById('error');

  // Limpiar resultados anteriores
  resultElement.textContent = '';
  errorElement.textContent = '';

  try {
      const result = suma(num1, num2);
      resultElement.textContent = `Resultado: ${result}`;
  } catch (error) {
      errorElement.textContent = error.message;
  }
});