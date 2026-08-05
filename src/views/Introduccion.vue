<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-start 
      .col-lg-9
        .row.justify-content-center.align-items-start 
          .col-lg-5
            figure.mb-3
              img(src="@/assets/curso/introduccion/img_1.png", class="img-fluid")
          .col-lg-7
            .tarjeta.color-primario-10.p-4.mb-3(data-aos="zoom-in-right")
              p.text-justify.mb-0
                | El componente formativo desarrolla los fundamentos y aplicaciones de la venta en negocios sostenibles, abordando conceptos como biocomercio, comercio justo, certificaciones, comunicación comercial y satisfacción del cliente. Estos elementos permiten comprender cómo estructurar propuestas comerciales coherentes con principios de sostenibilidad y necesidades del mercado.
        .row.justify-content-center.align-items-center
          .col-lg-12
            .tarjeta.color-primario-10.p-4.mb-3(data-aos="zoom-in-right", style="background-color: #F5FCF4;")
              p.text-justify
                | Su importancia radica en fortalecer la capacidad del aprendiz para diseñar, comunicar y ajustar propuestas comerciales sostenibles, considerando la experiencia del cliente y el contexto empresarial.
      .col-md-10.col-lg-3 
        figure
          img(src="@/assets/curso/introduccion/img_2.png", class="img-fluid")
    .row.justify-content-center.align-items-center.mt-4
      .col-lg-12
        .cajon.color-primario-20.p-4.mb-3(data-aos="zoom-in-right", style="background-color: #FAFCF4;")
          p.text-justify.mb-0
            | El contenido será abordado mediante el análisis de conceptos, ejemplos empresariales y el desarrollo de un caso aplicado, facilitando la integración entre teoría y práctica en procesos comerciales orientados a la sostenibilidad.
          
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
