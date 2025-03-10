<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Análisis y proyección financiera'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-4 El análisis y la proyección financiera son fundamentales en la administración de empresas, ya que permiten evaluar la situación económica actual y anticipar el desempeño futuro de una organización. Estas herramientas facilitan la toma de decisiones estratégicas, la planificación de recursos y la identificación de oportunidades de mejora.
    .row.mb-4
      .col-12.col-xl-8
        .mb-4.d-flex.align-items-start.bg-azul.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-40.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 El <b>análisis financiero</b> implica el estudio detallado de los estados financieros, como el balance general y el estado de resultados, para comprender la rentabilidad, liquidez y solvencia de la empresa. Identificar y analizar estos indicadores es esencial para la evolución y estabilidad de la organización.
        
        p.mb-4 Por otro lado, la <b>proyección financiera</b> estima el comportamiento futuro de variables clave, como ingresos, costos y flujos de efectivo, basándose en datos históricos y supuestos realistas. Este proceso permite anticipar escenarios y establecer estrategias que aseguren la sostenibilidad financiera.
        span  Un modelo adecuado de proyección financiera permite a las pequeñas y medianas empresas anticipar su situación económica, identificar áreas de crecimiento potencial y evaluar la viabilidad de nuevos proyectos.

      .col-4.d-none.d-xl-block(data-aos="zoom-in")
        img.mb-4(src='@/assets/curso/unidad/img-41.png', alt='Descripción de la imagen')

    .row.bg-verde-oscuro.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
        .row
          .col-3.d-none.d-xl-block(data-aos="zoom-in")
            img(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')
          .col-12.col-xl-9.text-white
            span La integración del análisis y la proyección financiera proporciona una base sólida para la toma de decisiones informadas, permitiendo a las empresas adaptarse a cambios en el entorno económico y mantener una posición competitiva en el mercado.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 3.1
        h2 Análisis del flujo de caja

    p.mb-4 El análisis del flujo de caja es una herramienta fundamental en la administración financiera, ya que permite evaluar la capacidad de la organización para generar efectivo y cumplir con sus obligaciones financieras. Este análisis detallado de las entradas y salidas de efectivo durante un período específico brinda una visión clara de la liquidez y la estabilidad financiera de la empresa.

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        .row.mb-4
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Operación
                p.text-small.px-4.text-center.pb-2 Incluye transacciones relacionadas con las actividades principales de la empresa, como ventas, pagos a proveedores y gastos operativos.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Inversión
                p.text-small.px-4.text-center.pb-2 Comprende la compra y venta de activos a largo plazo, como maquinaria, equipos o inversiones en otras empresas.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Financiamiento
                p.text-small.px-4.text-center.pb-2 Involucra transacciones relacionadas con la obtención y reembolso de fondos, como préstamos, emisión de acciones o pago de dividendos.
        p.mb-4 Los métodos de elaboración del flujo de caja son:

    .row.position-relative.mb-5.py-4.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Directo
              p Calcula el flujo neto de efectivo restando las salidas de las entradas de efectivo, proporcionando una visión clara de las fuentes y usos del efectivo.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Indirecto
              p Parte de la utilidad neta y ajusta por partidas no monetarias y cambios en el capital de trabajo para determinar el flujo de efectivo neto de las actividades operativas. Este método es el más utilizado debido a la disponibilidad de información en los estados financieros.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')

    h2 Ejemplo práctico
    p.mb-4 Una empresa presenta los siguientes datos para el año fiscal:
    .row.mb-4
      .col-12.col-md-10.mx-auto
        p.mb-4 <b>Tabla 3.</b> Datos financieros de la empresa
        .tabla-a
          table
            thead
              tr
                th.text-bold Concepto
                th.text-bold Monto ($)
            tbody
              tr
                td.text-bold Ingresos por ventas
                td 500,000
              tr
                td.text-bold Pagos a proveedores
                td (200,000)
              tr
                td.text-bold Gastos operativos
                td (100,000)
              tr
                td.text-bold Compra de maquinaria
                td (50,000)
              tr
                td.text-bold Venta de equipo antiguo
                td 10,000
              tr
                td.text-bold Préstamo bancario recibido
                td 70,000
              tr
                td.text-bold Pago de dividendos
                td (20,000)
        p.mb-4 El flujo de caja neto se calcularía así:
        p.mb-4 <b>Tabla 4.</b> Cálculo del flujo de caja neto
        .tabla-a
          table
            thead
              tr
                th.text-bold Categoría
                th.text-bold Cálculo
                th.text-bold(width="25%") Resultado ($)
            tbody
              tr
                td.text-bold Flujo de caja de operaciones
                td 500,000 - 200,000 - 100,000
                td 200,000
              tr
                td.text-bold Flujo de caja de inversión
                td 10,000 - 50,000
                td (40,000)
              tr
                td.text-bold Flujo de caja de financiamiento
                td 70,000 - 20,000
                td 50,000
              tr
                td.text-bold Flujo de caja neto total
                td 200,000 - 40,000 + 50,000
                td.text-bold 210,000
        .bg-rojo-claro.p-4
          span Este análisis indica que la empresa ha incrementado su efectivo en $210,000 durante el período, lo que refleja una posición financiera saludable.
    h2 Importancia del análisis del flujo de caja
    .row.bg-verde-claro.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
        .row
          .col-12.col-xl-7.my-auto
            p.mb-4 Realizar un análisis regular del flujo de caja permite a la empresa:
            div.d-flex.mb-2
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 Identificar posibles problemas de liquidez y tomar medidas preventivas.
            div.d-flex.mb-2
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 Planificar inversiones y financiamientos de manera más efectiva.
            div.d-flex.mb-2
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 Evaluar la eficiencia operativa y la gestión del capital de trabajo.
          .col-4.d-none.d-xl-block(data-aos="zoom-in")
            img.mb-4(src='@/assets/curso/unidad/img-48.png', alt='Descripción de la imagen')

    .row.bg-verde.bg-full-width.p-4.mb-4
      span.text-white El análisis del flujo de caja es una herramienta clave para la toma de decisiones financieras informadas y para garantizar la sostenibilidad a largo plazo de la empresa.

    #t_3_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 3.2
        h2 Estado de flujo de efectivo y su interpretación

    .row.mb-4
      .col-4.d-none.d-xl-block(data-aos="zoom-in")
        img.mb-4(src='@/assets/curso/unidad/img-49.png', alt='Descripción de la imagen')
      .col-12.col-xl-8
        p.mb-4 El estado de flujo de efectivo es un elemento esencial en los sistemas financieros, ya que brinda información detallada sobre las entradas y salidas de efectivo de una entidad durante un período determinado. Se clasifica en tres actividades fundamentales: operativas, inversión y financiamiento. Su análisis permite evaluar la capacidad de la compañía para generar efectivo y su eficiencia en la gestión de recursos financieros.
        h2 Interpretación del estado de flujo de efectivo
        p.mb-4 Para interpretar adecuadamente este estado financiero, se recomienda comenzar por el saldo final, que indica el aumento o disminución neta del efectivo. Luego, se analizan las tres categorías principales:

    ImagenInfografica.color-secundario.mb-4.bg-white
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-50.png', alt='Descripción de la imagen')
      .tarjeta.bg-white.p-4(x='33%' y='58%' numero='+')
        .h5.mb-2 Actividades operativas
        p Incluyen entradas y salidas de efectivo derivadas de las operaciones principales de la empresa, como ventas y pagos a proveedores. Un flujo positivo indica que las operaciones generan suficiente efectivo para sostener las actividades diarias.
      .tarjeta.bg-white.p-4(x='73%' y='22%' numero='+')
        .h5.mb-2 Actividades de inversión
        p Relacionadas con la adquisición o venta de activos a largo plazo, como maquinaria o inversiones en otras empresas. Un flujo negativo en esta sección puede indicar inversiones en crecimiento futuro.
      .tarjeta.bg-white.p-4(x='64%' y='58%' numero='+')
        .h5.mb-2 Actividades de financiamiento
        p Comprenden movimientos de efectivo vinculados con la obtención o devolución de financiamiento, como la emisión de acciones o el pago de deudas. Un flujo positivo sugiere que la empresa está recibiendo fondos de inversores o acreedores.

    .row.bg-verde-oscuro.bg-full-width.mb-4.px-4
      .d-flex.align-items-start.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-51.svg', alt='Texto descriptivo de la imagen')
        .my-auto
          p.pe-xl-3.mb-0.text-white El análisis detallado de estas secciones permite comprender cómo la empresa genera y utiliza su capital, además de evaluar su capacidad para cumplir con sus obligaciones financieras y planificar estrategias futuras.

    #t_3_3.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 3.3
        h2 Métodos de pronóstico de ventas y tendencias del mercado

    p.mb-4 El pronóstico de ventas es una herramienta vital para la planificación empresarial, ya que permite estimar las ventas futuras basándose en datos históricos y análisis de mercado. Existen diversos métodos para realizar estas proyecciones, los cuales pueden dividirse en cuantitativos y cualitativos.
    .row.mb-4
      .col-12.col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Cuantitativos")(data-aos="fade-up")
            p Basados en el análisis estadístico de datos numéricos, como el análisis de series temporales, modelos de regresión y suavizamiento exponencial.
          .div(titulo="Cualitativos")(data-aos="fade-up")
            p Fundamentados en criterios subjetivos y reflexiones de expertos. Son útiles cuando no hay suficiente información cuantificable, como el método Delphi, que recopila opiniones de especialistas para alcanzar un consenso sobre proyecciones futuras.
          .div(titulo="Línea recta")(data-aos="fade-up")
            p Modelo de pronóstico de series de tiempo que proporciona predicciones sobre futuras ganancias a partir de datos y tendencias anteriores. Es útil para empresas con un crecimiento constante.
      .col-12.col-lg-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')
    h2 Ejemplo práctico de pronóstico de ventas
    p.mb-4 Supongamos que una empresa desea proyectar sus ventas para el próximo trimestre. Utilizando el método de tasa de crecimiento promedio, se calculan las tasas de crecimiento de ventas de los últimos cuatro trimestres: 5 %, 7 %, 6 % y 8 %.

    .row.mb-4
      .col-4.d-none.d-xl-block(data-aos="zoom-in")
        img.mb-4(src='@/assets/curso/unidad/img-53.png', alt='Descripción de la imagen')
      .col-12.col-xl-8
        p.mb-3 Se obtiene el promedio de estas tasas:
        p.text-center.text-bold.mb-4 (5 % + 7 % + 6 % + 8 %) / 4 = 6.5 %
        p.mb-3 Si las ventas del último trimestre fueron de <b>$100,000</b>, la proyección para el próximo trimestre sería:
        p.text-center.text-bold.mb-4 $100,000 * (1 + 0.065) = $106,500
        span Este pronóstico indica que, manteniendo la tendencia actual, las ventas podrían alcanzar <b>$106,500</b> en el próximo trimestre.
    p.mb-4 La combinación del análisis del estado de flujo de efectivo con métodos de pronóstico de ventas proporciona una visión integral de la salud financiera de la empresa y facilita la toma de decisiones estratégicas informadas.
    .row.bg-azul.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2.me-auto Proyección de estados financieros
          p.mb-5(data-aos="fade-up") Los invitamos a leer Proyección de estados financieros , un análisis esencial sobre la planificación estratégica en el ámbito financiero. Este documento explora cómo las empresas pueden anticipar su desempeño económico mediante la proyección de estados financieros, facilitando la toma de decisiones, la gestión de riesgos y la evaluación de proyectos de inversión.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong>Proyección de estados financieros
        .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img.h-100(src='@/assets/curso/unidad/img-54.png', alt='Texto que describa la imagen')
    
    
    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>
    
    
    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://repository.eafit.edu.co/bitstreams/4ffd0a7a-ec71-47f1-bd6a-6307702c0b98/download") Universidad EAFIT. (2021). Modelo de proyección financiera para pequeñas y medianas empresas.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=NUXnNEtz-9Q") [Vídeo] Universidad continental-Modalidad a distancia. (2021, 11 de noviembre). Evaluación financiera de un proyecto de inversión.
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Análisis y proyección financiera',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de los siguientes documentos financieros muestra las entradas y salidas de efectivo de una empresa en un periodo determinado?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estado de resultados',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Balance general',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estado de flujo de efectivo',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Estado de cambios en el patrimonio',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El estado de flujo de efectivo es el documento que muestra las entradas y salidas de efectivo.',
          mensaje_incorrecto:
            'Incorrecto. El estado de flujo de efectivo es el documento que registra los movimientos de efectivo.',
        },
        {
          id: 2,
          texto:
            '¿Qué concepto mide la capacidad de una empresa para cumplir con sus obligaciones a corto plazo mediante la conversión de sus activos en efectivo?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Rentabilidad',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Liquidez',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Endeudamiento',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Patrimonio neto',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La liquidez mide la capacidad de convertir activos en efectivo para cumplir obligaciones a corto plazo.',
          mensaje_incorrecto:
            'Incorrecto. La liquidez es el concepto que mide la capacidad de pago a corto plazo.',
        },
        {
          id: 3,
          texto:
            'En un presupuesto, ¿qué elemento representa los recursos que se esperan obtener de la venta de productos o servicios?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ingreso operacional',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Pasivo',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Costo de ventas',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Activo corriente',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El ingreso operacional representa los recursos esperados por ventas de productos o servicios.',
          mensaje_incorrecto:
            'Incorrecto. Los ingresos operacionales son los recursos que se esperan de las ventas.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes elementos es un indicador clave de la rentabilidad de una empresa?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pasivo corriente',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Margen de utilidad',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Estado de flujo de efectivo',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Costo de capital',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El margen de utilidad es un indicador clave para medir la rentabilidad empresarial.',
          mensaje_incorrecto:
            'Incorrecto. El margen de utilidad es el indicador que mide la rentabilidad.',
        },
        {
          id: 5,
          texto:
            '¿Qué técnica de proyección financiera asume que ciertos elementos varían proporcionalmente con las ventas?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Método de análisis de tendencias',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Método de porcentaje de ventas',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Modelos financieros avanzados',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Análisis de sensibilidad',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El método de porcentaje de ventas asume que ciertos elementos varían proporcionalmente con las ventas.',
          mensaje_incorrecto:
            'Incorrecto. El método de porcentaje de ventas es la técnica que asume esta variación proporcional.',
        },
      ],
      mensaje_final_aprobado:
        '¡Felicitaciones! Has demostrado un buen entendimiento del análisis y proyección financiera.',
      mensaje_final_reprobado:
        'Te recomendamos repasar los conceptos de análisis financiero y proyección financiera antes de intentarlo nuevamente.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
