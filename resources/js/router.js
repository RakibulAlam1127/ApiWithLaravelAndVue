import Vue from 'vue';
import VueRouter from 'vue-router';
import ExampleComponent from "./components/ExampleComponent";
import MyComponent from "./components/MyComponent";



Vue.use(VueRouter);

export default new VueRouter({
     routes:[
         {path:'/',component:ExampleComponent},
         {path:'/home',component:MyComponent}
     ],
     mode:'history',
      
});