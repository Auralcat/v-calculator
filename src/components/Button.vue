<template>
  <button :class="translationTable[label]" v-on:click="press">{{label}}</button>
</template>

<script>
import store from '@/store'

export default {
  props: ['label'],
  data () {
    return {
      translationTable: {
        /* Nums */
        '1': 'number one',
        '2': 'number two',
        '3': 'number three',
        '4': 'number four',
        '5': 'number five',
        '6': 'number six',
        '7': 'number seven',
        '8': 'number eight',
        '9': 'number nine',
        '0': 'number zero',
        '.': 'number dot',
        /* Basic operations */
        'C': 'warning clear',
        '←': 'warning backspace',
        '=': 'operation equals',
        '+': 'operation sum',
        '-': 'operation subtract',
        '*': 'operation multiply',
        '/': 'operation divide',
        /* Advanced operations */
        '^': 'operation exponentiate',
        '√': 'operation squareroot',
        'π': 'operation pi',
        'ln': 'operation natural-logarithm',
        'x²': 'operation square',
        'log': 'operation logarithm'
      }
    }
  },
  methods: {
    press () {
      switch (this.label) {
        case '=':
          store.commit('equals')
          break
        case 'π':
          store.commit('printPi')
          break
        case 'ln':
          store.commit('ln')
          break
        case 'C':
          store.commit('clear')
          break
        case '√':
          store.commit('squareroot')
          break
        case 'x²':
          store.commit('square')
          break
        case '←':
          store.commit('backspace')
          break
        case 'log':
          store.commit('log10')
          break
        default:
          store.commit('addchar', this.label)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@mixin button-colors($base, $font:#000) {
  background-color: $base;
  border: 1px solid lighten($base, 10%);
  box-shadow: 0 2px 0 darken($base, 10%);
  color: $font;
}
/* Button type colors */
.number {
  @include button-colors(#b57ddb)
}

.operation {
  @include button-colors(#5755ba)
}

.warning {
  @include button-colors(#b317c1)
}

/* Base button styles */
button {
  font-family: OpenSans;
  border-radius: 4px;
  position: relative;
  top: 0px;
  transition: all 0.2s;
  padding: 4px;
}

button:active {
  top: 2px;
}

/* Button list */

$buttons: (
  /* Numbers */
  (name: zero,  col: 1 / span 2, row: 4),
  (name: dot,   col: 3,          row: 4),
  (name: one,   col: 1,          row: 3),
  (name: two,   col: 2,          row: 3),
  (name: three, col: 3,          row: 3),
  (name: four,  col: 1,          row: 2),
  (name: five,  col: 2,          row: 2),
  (name: six,   col: 3,          row: 2),
  (name: seven, col: 1,          row: 1),
  (name: eight, col: 2,          row: 1),
  (name: nine,  col: 3,          row: 1),
  /* Basic operations */
  (name: backspace, col: 1,          row: 1),
  (name: clear,     col: 2,          row: 1),
  (name: equals,    col: 1 / span 2, row: 4),
  (name: multiply,  col: 1,          row: 2),
  (name: divide,    col: 2,          row: 2),
  (name: sum,       col: 1,          row: 3),
  (name: subtract,  col: 2,          row: 3),
  /* Advanced operations */
  (name: squareroot, col: 1, row: 1),
  (name: pi, col: 2, row: 1),
  (name: square, col: 3, row: 1),
  (name: natural-logarithm, col: 1, row: 2),
  (name: logarithm, col: 2, row: 2),
  (name: exponentiate, col: 3, row: 2),
);

@each $button in $buttons {
  .#{map-get($button, name)} {
    grid-column: map-get($button, col);
    grid-row: map-get($button, row);
  }
}

</style>
