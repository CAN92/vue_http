import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.http.options.root = "https://vuejs-vue-resource-63842-default-rtdb.firebaseio.com";

Vue.http.interceptors.push((request, next)=> {
  //console.log(request.method);
  //if(request.method == "POST"){
  //     request.method = "PUT"
  // }
  next(response => {
    //console.log(response);
    response.json = () => {
      return {
        userList : response.body
      }
    }
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
