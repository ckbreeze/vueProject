
//引入jquery
import $ from "jquery";
import less from './less/style.less';
// import Vue from 'vue';
// import App from './App.vue';
// import css from "./css/com.css";

// new Vue({
//     el: '#app',
//     render: (h) => h(App),
//   });
  
$(function () {
    $("li:odd").css("background-color", "pink")
    $("li:even").css("background-color", "grey")
})
