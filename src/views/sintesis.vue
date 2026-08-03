<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center
      .col-lg-4.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/sintesis/img_1.png", class="img-fluid")
      .col-lg-8
        p.mb-3 El componente formativo Venta sostenible, ofrece al aprendiz herramientas conceptuales y aplicadas para diseñar y comunicar propuestas comerciales sostenibles, integrando biocomercio, certificaciones, comunicación comercial y satisfacción del cliente. A través de estos elementos, se fortalece la capacidad de argumentar valor, responder objeciones y construir relaciones comerciales basadas en la confianza, alineando las decisiones comerciales con principios ambientales, sociales y económicos en diferentes contextos del mercado.
        .tarjeta.color-secundario-5.p-4.mb-4(data-aos="zoom-in-right")
          .row.justfy-content-center.align-items-center
            .col-lg-10
                p.mb-0 Asimismo, el componente permite comprender la importancia del control de la información, el uso de indicadores y la implementación de planes de mejora para optimizar la gestión comercial. Mediante el análisis de herramientas, estrategias y casos aplicados, el aprendiz desarrolla competencias para evaluar resultados, ajustar su propuesta y fortalecer la experiencia del cliente, contribuyendo a la sostenibilidad del negocio y a la toma de decisiones fundamentadas en contextos comerciales dinámicos.
            .col-lg-2
              figure
                img(src="@/assets/curso/sintesis/img_2.png", class="img-fluid")
            
       


    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="La ilustración muestra la estructura jerárquica que sintetiza el contenido del componente formativo “Venta sostenible”, el cual se organiza en siete unidades. Inicia con biocomercio (biotrade), comercio justo - certificación flo - rse, allí se abordan su concepto, principios y criterios. La segunda unidad corresponde a greenwashing, donde se desarrolla su concepto, características y tipos. La tercer unidad corresponde a sellos y certificaciones, ampliando acá su concepto, características y diferencias. La cuarta unidad es sobre comunicación comercial (stroytelling, brief), allí se ve su concepto, tipos, herramientas y elementos. La quinta unidad desarrolla la temática de propuesta comercial, en donde se ve su concepto y sus elementos. La sexta unidad corresponde a satisfacción del cliente, sonde se aborda su concepto e importancia. Por ultimo se abarca la temática de control de la información, donde se desarrollan conceptos, herramientas, indicadores y métricas, cerrando con plan de mejora.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
