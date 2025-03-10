<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    p.mb-4 En el marco del presente curso virtual, se abordará el tema del presupuesto de administración y tesorería, una herramienta fundamental para la toma de decisiones financieras y operativas en el entorno empresarial. Esta unidad se centra en proporcionar los conocimientos y habilidades necesarios para comprender y gestionar eficazmente los ingresos y gastos, así como proyectar estados financieros que apoyen la planificación estratégica.
    .row.mb-4
      .col-12.col-lg-6.col-xl-4.bg-rojo.p-4.h-100.d-flex
        span El presupuesto de administración y tesorería desempeña un papel crítico en el éxito organizacional al permitir una gestión eficiente de los recursos financieros. En esta unidad, se explorará cómo la correcta planificación y ejecución presupuestal facilita el cumplimiento de objetivos tanto operativos como estratégicos, minimizando riesgos y optimizando resultados.
      .col-12.col-lg-6.col-xl-4.h-100.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')
      .col-12.col-lg-6.col-xl-4.h-100.bg-azul-claro.p-4
        span La gestión presupuestal trasciende las tareas administrativas tradicionales, ya que su aplicación impacta directamente en la sostenibilidad financiera de las empresas. Los conocimientos adquiridos en esta unidad serán clave para afrontar situaciones reales, como la evaluación de flujos de efectivo o la proyección de estados financieros, habilidades valoradas en diversos ámbitos profesionales.

    p.mb-4 La unidad se organiza en torno a los siguientes subtemas:

    .row.mb-4
      .col-12.col-md-6
        .d-flex.align-items-start.bg-azul.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-2.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 <strong>Tema1</strong><br>Ingresos y gastos operacionales y no operacionales.
      .col-12.col-md-6
        .d-flex.align-items-start.bg-azul.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-2.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 <strong>Tema2</strong><br>Flujo de caja.
      .col-12.col-md-6
        .d-flex.align-items-start.bg-azul.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-2.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 <strong>Tema3</strong><br>Estado de flujo de efectivo.
      .col-12.col-md-6
        .d-flex.align-items-start.bg-azul.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-2.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 <strong>Tema4</strong><br>Proyección de estados financieros.



</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
