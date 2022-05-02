
"use strict";

const btn_menu = document.querySelector(".navegacion_menu");
const fondo_modal  = document.querySelector(".fondo_modal-info");
const modal_info_container = document.querySelector(".modal-info-container");

const closed_modal = document.querySelector(".closed-icon");
const home_modal  = document.querySelector(".home-tittle");
const whatsapp_modal  = document.querySelector(".whatsapp-tittle");
const miembro_modal  = document.querySelector(".miembro-tittle");
const ofertas_modal  = document.querySelector(".ofertas-tittle");

btn_menu.addEventListener("click", ()=>{ fondo_modal.classList.toggle("fondo_modal-info-open");
                                         modal_info_container.style.animation  = "modal-view .5s forwards"; });

closed_modal.addEventListener("click", ()=> { modal_info_container.style.animation = "modal-closed .5s forwards";
                                              setTimeout(()=>{ fondo_modal.classList.toggle("fondo_modal-info-open") },500); });

home_modal.addEventListener("click", ()=>{ let change_request = confirm("¿Quieres abandonar esta pagina?");
                                           (change_request)? location.href = "sobre_nosotros.html" : alert("Se cancelo el cambio de pagina"); });

whatsapp_modal.addEventListener("click", ()=>{ location.href  = "https://wa.me/message/VJCLXO6NKU5KO1";  });
miembro_modal.addEventListener("click", ()=>{  window.open("miembros.html"); });

// Intersection observer efect  for window model

const modelos_img  = document.querySelectorAll(".seccion2-modelo");
const view_1  = (entryes)=>{ entryes.forEach(entrada=>{ if(entrada.isIntersecting){ entrada.target.style.animation = "models_efect .6s forwards"; }
                                                        else entrada.target.style.animation = "none";  }); }

const observador  = new IntersectionObserver(view_1);
modelos_img.forEach(model=>{ observador.observe(model); });