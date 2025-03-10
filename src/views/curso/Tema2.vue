<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Gestión de ingresos y gastos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-4.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-azul-claro.p-4(data-aos="fade-left")
        p.mb-0(data-aos="fade-up") La gestión de ingresos y gastos es una práctica esencial en la administración de empresas, ya que permite monitorear y controlar las entradas y salidas de dinero, asegurando la sostenibilidad financiera y facilitando la toma de decisiones estratégicas. Un control riguroso de estos elementos contribuye a maximizar la rentabilidad y a identificar áreas de mejora en la operación empresarial.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')

    p.mb-4 Los ingresos representan los recursos obtenidos por la venta de bienes o servicios, mientras que los gastos corresponden a las erogaciones necesarias para llevar a cabo las actividades operativas, administrativas y financieras. Mantener un equilibrio adecuado entre ambos es fundamental para garantizar la liquidez y solvencia de la organización.
    h2 Importancia de la gestión de ingresos y gastos

    .row.mb-4.bg-verde-oscuro.py-4
      .col-4.ms-auto.d-none.d-xl-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
      .col-12.col-xl-6.me-xl-auto.my-auto
        p.mb-4.text-white En el siguiente podcast se explica la importancia de la gestión de ingresos y gastos para la estabilidad financiera.
        TarjetaAudio.color-primario.bg-white.mb-3(
          texto='Texto descriptivo del audio'
          tiempo
          :audio="require('../../assets/componentes/audios/audio-ej.mp3')"
          @audio-hover='mostrarIndicadorTarjetaAudio = false'
        )

    #t_2_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 2.1
        h2 Ingresos y gastos operacionales

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 Distinguir entre ingresos y gastos operacionales es clave para evaluar la eficiencia de las operaciones y la rentabilidad de la organización.
        h2 Ingresos operacionales
        .bg-azul-claro.p-4
          span Son aquellos que la empresa obtiene directamente de su actividad principal o giro de negocio.
        .bg-azul.p-4
          p.text-bold.mb-4 Ejemplo: 
          span En una empresa de fabricación de muebles, los ingresos provenientes de la venta de sillas, mesas y armarios corresponden a ingresos operacionales. Estos reflejan el desempeño de la operación principal y son un indicador clave de la salud financiera.

      .col-4.d-none.d-xl-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')


    h2 Gastos operacionales
    p.mb-4 Corresponden a los costos necesarios para el funcionamiento diario de la empresa y están directamente relacionados con su actividad principal.

    TabsC.mb-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo='', :iconUrl="require('@/assets/curso/unidad/img-31.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-32.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h4(data-aos='fade-up') Fijos
            p(data-aos='fade-up') Permanecen constantes, sin depender del nivel de producción o ventas.<br><b>Ejemplo de gasto fijo:</b> El pago mensual por el arrendamiento de una oficina

      .tabs-content.border.px-4.p-md-5.py-3(titulo='', :iconUrl="require('@/assets/curso/unidad/img-31.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-33.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h4(data-aos='fade-up') Variables
            p(data-aos='fade-up') Fluctúan en función del volumen de producción o ventas.
            p.mb-0(data-aos='fade-up') <strong>Ejemplo de gasto variable: </strong>El costo de la madera utilizada en la fabricación de muebles aumenta si se incrementa la producción.
    h2 Importancia de la distinción entre ingresos y gastos operacionales
    p.mb-4 Diferenciar los ingresos y gastos operacionales de los no operacionales permite analizar con mayor precisión la rentabilidad real de la empresa. Esta distinción facilita la toma de decisiones estratégicas, optimiza la gestión de costos y mejora la planificación financiera, asegurando la sostenibilidad del negocio a largo plazo.
    #t_2_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 2.2
        h2 Ingresos y gastos no operacionales


    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 Distinguir entre ingresos y gastos operacionales y no operacionales es fundamental en la contabilidad empresarial, ya que permite evaluar con precisión la rentabilidad y eficacia de una organización. Esta diferenciación facilita la identificación de las fuentes principales de ingresos y costos asociados directamente con la actividad principal, así como aquellos derivados de actividades secundarias o esporádicas.
        h2 Ingresos no operacionales
        .d-flex.align-items-start.bg-rojo-claro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-34.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Son aquellos que no provienen de la actividad principal de la organización, sino de actividades secundarias o extraordinarias. Estos ingresos no son recurrentes ni están directamente relacionados con el objeto social de la empresa.

      .col-4.d-none.d-xl-block(data-aos="zoom-in")
        img.mb-4(src='@/assets/curso/unidad/img-35.png', alt='Descripción de la imagen')

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        .row.mb-4.justify-content-center
          .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-36.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Venta de activos fijos	
              p.px-1.text-small.mb-0.d-flex.text-center Ingresos por la venta de maquinaria, inmuebles u otros bienes no destinados a la producción.
          .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-36.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Dividendos	
              p.px-1.text-small.mb-0.d-flex.text-center Ganancias obtenidas de inversiones en otras empresas.
          .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-36.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Diferencias cambiarias	
              p.px-1.text-small.mb-0.d-flex.text-center Beneficios generados por fluctuaciones en el tipo de cambio.

    h2 Gastos no operacionales
    .row.bg-verde.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.row
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8.text-white.my-auto
          p.mb-4 Corresponden a costos no relacionados directamente con las operaciones principales de la empresa. Generalmente, son inusuales o no habituales y pueden impactar la rentabilidad.
          div.d-flex.mb-2
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 <strong>Sanciones e indemnizaciones. </strong>Pagos por incumplimiento de normativas o litigios.
          div.d-flex.mb-2
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 <strong>Pérdidas en la venta de activos. </strong>Diferencias negativas en la venta de bienes no operativos.
          div.d-flex.mb-2
            img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
            p.mb-0 <strong>Intereses por préstamos. </strong>Costos financieros derivados del financiamiento externo.

    h2 Importancia de la distinción
    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 Separar ingresos y gastos operacionales de los no operacionales permite analizar la eficiencia real de la empresa. Esta diferenciación ayuda a la gerencia a determinar qué parte de las ganancias o pérdidas proviene de la actividad principal y cuáles son consecuencia de eventos extraordinarios, facilitando la toma de decisiones estratégicas.
        .bg-rojo-claro.p-4
          p.text-bold.mb-4 Ejemplo práctico
          span Una empresa de fabricación de muebles reporta ingresos totales de $500,000 en un periodo. De estos, $450,000 provienen de la venta de sus productos <b>(ingresos operacionales)</b> y $50,000 de la venta de un vehículo corporativo <b>(ingresos no operacionales)</b>.<br>En el mismo periodo, incurre en gastos por $300,000, donde $280,000 corresponden a costos de producción y operación <b>(gastos operacionales)</b> y $20,000 al pago de una multa por incumplimiento normativo <b>(gastos no operacionales)</b>.<br>Este análisis permite a la gerencia identificar el impacto de actividades no recurrentes en la rentabilidad y tomar medidas correctivas si es necesario.

      .col-4.d-none.d-xl-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')

    .row.bg-azul.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2.me-auto Herramientas para el control de ingresos y gastos
          p.mb-5(data-aos="fade-up") Los invitamos a leer Herramientas para el control de ingresos y gastos , un recurso clave para optimizar la gestión financiera en cualquier tipo de organización. En este documento, se presentan diversas herramientas que facilitan el registro, análisis y control de las finanzas, desde hojas de cálculo hasta software avanzado de gestión.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong>Herramientas para el control de ingresos y gastos
        .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img.h-100(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')


    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.gerencie.com/ingresos-no-operacionales.html") Gerencie.com. (2023). Ingresos no operacionales.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=zwW7uFiwLw4") [Vídeo] Universidad continental-Modalidad a distancia. (2020, 10 de septiembre). Gestión de costos financieros.
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')
    
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
