// ── VARIABLES ────────────────────────────────────────────
// Son como cajas que guardan información mientras la app corre

let primerNumero = '';    // el 10 (el porcentaje que el usuario quiere)
let segundoNumero = '';   // el 160 (el total)
let esperandoSegundo = false;
// esperandoSegundo = false → el usuario está tipeando el primer número
// esperandoSegundo = true  → ya presionó "% de", ahora tipea el segundo

// ── FUNCIONES ─────────────────────────────────────────────

function ingresarNum(n) {
  console.log('boton presionado:', n);
  // Esta función se ejecuta cada vez que el usuario toca un número

  if (!esperandoSegundo) {
    // Estamos en el PRIMER número (el porcentaje)
    primerNumero += n;
    // += agrega el dígito al final del string
    // Si el usuario presiona 1, luego 0: '1' → '10'

  } else {
    // Estamos en el SEGUNDO número (el total)
    segundoNumero += n;
  }

  actualizarVisor();
}

function ingresarPorcentoDe() {
  // El usuario presionó "% de"
  // Cambiamos el estado: ahora esperamos el segundo número
  if (primerNumero === '') return;
  // Si no tipeó nada todavía, no hace nada

  esperandoSegundo = true;
  actualizarVisor();
}

function calcular() {
  // El usuario presionó "="
  // Convertimos los strings a números con parseFloat
  let a = parseFloat(primerNumero);   // el porcentaje (ej: 10)
  let b = parseFloat(segundoNumero);  // el total (ej: 160)

  if (isNaN(a) || isNaN(b)) return;
  // isNaN = "is Not a Number" → si alguno no es número, no hace nada

  // La fórmula del porcentaje:
  // resultado = (porcentaje / 100) * total
  let resultado = parseFloat(((a / 100) * b).toFixed(10));

  // Muestra el resultado en el visor grande
  document.getElementById('resultado').textContent = resultado;

  // Efecto flash: agrega la clase "flash" → color blanco
  document.getElementById('resultado').classList.add('flash');

  // Después de 300ms saca la clase → vuelve al dorado
  setTimeout(() => {
    document.getElementById('resultado').classList.remove('flash');
  }, 300);

  // Muestra la operación completa arriba
  document.getElementById('expresion').textContent =
    a + '% de ' + b + ' =';
}

function actualizarVisor() {
  // Actualiza lo que se ve en pantalla mientras el usuario tipea

  if (!esperandoSegundo) {
    // Solo hay primer número
    document.getElementById('resultado').textContent =
      primerNumero || '0';
    document.getElementById('expresion').textContent = primerNumero ?  'ingresa % de' : '';

  } else {
    // Ya presionó "% de", muestra todo el cálculo en progreso
    document.getElementById('resultado').textContent = segundoNumero ||'0';
    document.getElementById('expresion').textContent =
      primerNumero + '% de ' + (segundoNumero || '...');
  }
}

function limpiar() {
  // Resetea todo a cero
  primerNumero = '';
  segundoNumero = '';
  esperandoSegundo = false;

  document.getElementById('resultado').textContent = '0';
  document.getElementById('expresion').textContent = '';
}