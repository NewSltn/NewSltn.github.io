
"use strict";

const barra_nav = document.querySelector(".barra-open");
const fondo_oscuro = document.querySelector(".fondo-oscuro");
const modal_info  = document.querySelector(".window-info-container");
const btn_closed = document.querySelector(".option-closed");

const modal_message = document.querySelector(".option-message-tittle");
const modal_home = document.querySelector(".option-home-tittle");
const modal_gallery = document.querySelector(".option-gallery-tittle");
const modal_miembro = document.querySelector(".option-miembro-tittle");


barra_nav.addEventListener("click", ()=>{ fondo_oscuro.classList.add("fondo-oscuro-open");
	                                      fondo_oscuro.style.animation = "fondo-aparecer .5s forwards";
                                          modal_info.style.animation = "modal-aparecer .5s forwards";
                                          barra_nav.style.transform = "rotate(90deg)"  });

btn_closed.addEventListener("click", ()=>{ modal_info.style.animation  = "modal-closed .2s forwards";
                                           fondo_oscuro.style.animation = "fondo-closed .5s forwards";
                                           setTimeout(()=>{ fondo_oscuro.classList.toggle("fondo-oscuro-open"); },1000);
                                           barra_nav.style.transform = "rotate(0deg)" });


modal_home.addEventListener("click", ()=>{ location.href = "index.html"; });
modal_message.addEventListener("click", ()=>{ location.href = "https://wa.me/message/VJCLXO6NKU5KO1"; });
modal_gallery.addEventListener("click", ()=>{ location.href = "gallery.html"; });
modal_miembro.addEventListener("click", ()=>{  location.href = "miembros.html"; });


// Codigo de intersection observer para imagenes de seccion de informacion

const img_nosotros = document.querySelector(".nosotros-img");
const img_funcion = document.querySelector(".funcion-img");
const img_porque = document.querySelector(".porque-img");
const img_metodo = document.querySelector(".metodo-img");

const observar = (entryes)=>{ entryes.forEach(entrada=>{ if(entrada.isIntersecting){ entrada.target.classList.add("imgs_efect"); }
                                                         else entrada.target.classList.remove("imgs_efect");  }); }

let observador  = new IntersectionObserver(observar);

observador.observe(img_nosotros);
observador.observe(img_funcion);
observador.observe(img_porque);
observador.observe(img_metodo);

// Codigo para redirigir a la galeria

const metodo_button = document.querySelector(".metodo-button");
metodo_button.addEventListener("click", ()=>{ window.location.href  = "gallery.html"; });


// Codigo de intersection observer para efecto de barras de skills

const barra1 = document.querySelector(".barra-interna-1");
const barra2 = document.querySelector(".barra-interna-2");
const barra3 = document.querySelector(".barra-interna-3");
const barra4 = document.querySelector(".barra-interna-4");

const view_barra1 = (entradas)=>{ entradas.forEach(entrada=>{ if(entrada.isIntersecting == true){ entrada.target.classList.add("barra-1-actived"); }
                                                              else if(entrada.isIntersecting == false) { entrada.target.classList.remove("barra-1-actived"); }   });   }

const intersection1 = new IntersectionObserver(view_barra1);

intersection1.observe(barra1);



const view_barra2 = (entradas)=>{ entradas.forEach(entrada=>{ if(entrada.isIntersecting == true){ entrada.target.classList.add("barra-2-actived"); }
                                                              else if(entrada.isIntersecting == false) { entrada.target.classList.remove("barra-2-actived"); }   });   }

const intersection2 = new IntersectionObserver(view_barra2);

intersection2.observe(barra2);


const view_barra3 = (entradas)=>{ entradas.forEach(entrada=>{ if(entrada.isIntersecting == true){ entrada.target.classList.add("barra-3-actived"); }
                                                              else if(entrada.isIntersecting == false) { entrada.target.classList.remove("barra-3-actived"); }   });   }

const intersection3 = new IntersectionObserver(view_barra3);

intersection3.observe(barra3);

const view_barra4 = (entradas)=>{ entradas.forEach(entrada=>{ if(entrada.isIntersecting == true){ entrada.target.classList.add("barra-4-actived"); }
                                                              else if(entrada.isIntersecting == false) { entrada.target.classList.remove("barra-4-actived"); }   });   }

const intersection4 = new IntersectionObserver(view_barra4);

intersection4.observe(barra4);

