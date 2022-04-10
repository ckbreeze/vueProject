
//ES6 默認 導入 jqery
import $ from "jquery";

import css from "./css/index.css";
import less from "./css/index.less";
import log from  "./images/222.jpg";


/* @info 装饰器  高级语法*/
@info
class Person{};

function info (target){
  target.info='张三'

};

/* import Vue from 'vue';
import App from './App.vue'; */
/* 
new Vue({
  el: '#app',
  render: (h) => h(App),
}); */
//入口函數
$(function(){
$('.log').attr("src",log);
$('li:odd').css('background-color','grey');
$('li:even').css('background-color','pink');

});
console1.log(Person.info);

