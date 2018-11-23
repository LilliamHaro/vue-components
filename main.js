// os componentes se deben ubicar en cima de la instnacia de vue!!IMNPORTANTE!!!
// componente sobre la instancia de Vue
//el componente debe estar siempre dentro de el 'el' de la instancia de VUE (osea dentro de #app)
// la primer parametro es el nombre de l etiqueta
//el segundo parametro es un objeto con el template
Vue.component("saludo", {
  template: "<h1>{{saludocomponent}}</h1>",
  // la data dentro de un componente se maneja diferente a la instancia de vue
  // aqui es una funcion que retorna un objeto
  data() {
    return {
      saludocomponent: "hola desde vue"
    };
  }
});

Vue.component("segundocomponente", {
  // template literales son los que no usan comillas simples sino backsplit(comillas invertidas) para poder escribir el template con saltos de line
  // reglas de vue todo los template deben estar encerrados en una contenedor padre o no funcionará :)
  template: `<div>
  <h1>template literal</h1>
  <h3>{{h3saludo}}</h3>
  <div>`,
  data(){
    return {
      h3saludo: 'saludo desde un template literal',
    }
  }
});

// instancias Vue
new Vue({
  el: "#app",
  data: {
    saludos: "holooo desde la instancia"
  }
});
