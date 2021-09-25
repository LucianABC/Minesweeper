# Buscaminas

### `npm start`

## Herramientas utilizadas

- ReactJS
- Sass
- TypeScript

## Cómo funciona?

Cada casillero tiene una ID, una propiedad "activated" que indica sí el casillero fue clickeado, y una propiedad "hasBomb" que indica si el casillero posee una bomba. \
 Al iniciar el juego, se genera el tablero asignandole bombas a 20 casilleros random segun su ID. \
Con cada click, se chequea qué hay dentro del casillero.
Si te chocás con una bomba, perdés. Si no, sumás 10ptos por cada casillero.
Cuando sumás 50pts, se gana el juego. \
Escribí muy por arriba funcionalidad para tener la posibilidad de elegir 3 dificultades de juego, pero no lo terminé porque ya se me estaba haciendo muy largo. Otra cosa que me gustaría agregarle y no llegué son tests.
