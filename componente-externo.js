Vue.component('componentexterno',{
  template: `<div>
  <h1>template literal</h1>
  <h3>{{saludoExterno}}</h3>
  <div>`,
  data(){
    return {
      saludoExterno: 'Hola desde un componente externo'
    }
  }
})