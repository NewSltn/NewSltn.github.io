
"use strict";

// Codigo apertura de menu desplegable

const barra_open  = document.querySelector(".barra-open");
const fondo_negro = document.querySelector(".fondo_negro");
const modal_container  = document.querySelector(".modal-container");
const modal_cerrar = document.querySelector(".modal-cerrar");

barra_open.addEventListener("click", ()=> { fondo_negro.classList.toggle("fondo_negro-open");
                                            setTimeout(()=>{ modal_container.classList.toggle("modal-container-open"); },200);  });

modal_cerrar.addEventListener("click", ()=>{ modal_container.classList.toggle("modal-container-open");
                                             setTimeout(()=>{ fondo_negro.classList.toggle("fondo_negro-open"); },500); });




// Funcionalidades de opciones de menu desplegable

const modal_principal  = document.querySelector(".modal-principal");
const modal_whatsapp  = document.querySelector(".modal-whatsapp");
const modal_galeria  = document.querySelector(".modal-galeria");

modal_principal.addEventListener("click", ()=>{ location.href = "sobre_nosotros.html"; });
modal_whatsapp.addEventListener("click", ()=>{ location.href = "https://wa.me/message/VJCLXO6NKU5KO1"; });
modal_galeria.addEventListener("click", ()=>{ location.href = "gallery.html"; });






// Codigo agregar efectos del formulario
const form_container = document.querySelector(".seccion2-formulario-container");
const form  = document.querySelector(".seccion2-formulario");
const form_enviar = document.querySelector(".btn-enviar");

const fondo_form = document.querySelector(".fondo_negro-form");
const form_targeta = document.querySelector(".form-targeta");
const form_img_exito = document.querySelector(".form-img-exito");
const form_tittle_exito  = document.querySelector(".form-tittle-exito");
const seccion2_aviso = document.querySelector(".seccion2-aviso");


const submit_data = async (e)=>{ e.preventDefault();
                                 const data_form = await new FormData(form);
                                 let response = await fetch("https://formspree.io/f/xbjwpjwo",{ method: "POST",
                                                                                                body: data_form,
                                                                                                headers: {"Accept": "application/json"} });

                                 if(response.ok){ fondo_form.classList.toggle("fondo_negro-form-open");
                                                  setTimeout(()=>{ form_targeta.classList.toggle("form-targeta-open"); },500);

                                                  form_enviar.style.display = "none";
                                                  seccion2_aviso.innerHTML = `<b style = "color: green">Gracias por usar New Solution.</b>`;
                                                  setTimeout(()=>{ form_targeta.classList.toggle("form-targeta-open");
                                                                   setTimeout(()=>{ fondo_form.classList.toggle("fondo_negro-form-open"); },500);  },3000); }

                                 else { fondo_form.classList.toggle("fondo_negro-form-open");
                                        setTimeout(()=>{ form_targeta.classList.toggle("form-targeta-open");},500);

                                        form_img_exito.setAttribute("src","multimedia-miembros/iconos/error.svg");
                                        form_tittle_exito.innerHTML = "Ocurrio un error al enviar. Si el problema persiste, envienos un whatsapp.";
                                        form_tittle_exito.classList.replace("form-tittle-exito","form-tittle-error");
                                        setTimeout(()=>{ form_targeta.classList.toggle("form-targeta-open");
                                                         setTimeout(()=>{ fondo_form.classList.toggle("fondo_negro-form-open"); },500); },3000); } }

form.addEventListener("submit", submit_data);




// Codigo de apertura dinamica de formulario
const seccion1_solicitar  = document.querySelector(".seccion1-solicitar");
const form_tittle = document.querySelector(".seccion2-tittle");

seccion1_solicitar.addEventListener("click", ()=>{ form_container.style.display = "flex";
                                                   form.style.animation= "form_open 1s forwards";
                                                   seccion1_solicitar.style.display = "none";
                                                   form_tittle.style.animation = "form_tittle 1s forwards"; });