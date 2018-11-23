Vue.component('contador',{
  template:`<div>
  <div>{{numero}}</div>
    <button @click="numero++">+</button>
  </div>`,
  data(){
    return {
      numero: 0,
    }
  }
})