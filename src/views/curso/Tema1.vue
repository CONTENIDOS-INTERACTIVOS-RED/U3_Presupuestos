<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1.  Fundamentos del presupuesto de administración y tesorería'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    
    .row.bg-verde-oscuro.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.row
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8.text-white
          p.mb-4 El presupuesto de administración y tesorería es una herramienta clave en la gestión financiera empresarial, permitiendo planificar y controlar los flujos de efectivo para garantizar la liquidez y cumplir con las obligaciones financieras y operativas. Su correcta elaboración y seguimiento facilitan la toma de decisiones estratégicas, contribuyendo a la estabilidad y crecimiento de la organización.
          span Este presupuesto se centra en la proyección de entradas y salidas de efectivo en un periodo determinado (mensual o anual), permitiendo anticipar posibles déficits o excedentes. Con esta información, se pueden implementar estrategias para optimizar el uso de los recursos financieros, como la negociación de plazos con proveedores o la inversión de excedentes en instrumentos financieros adecuados.
    
    p.mb-4 Su elaboración implica la recopilación y análisis de información relevante, como:

    .row.mb-4
      .col-12.col-md-6.col-lg-3.mx-auto(data-aos="flip-up")
        .bg-verde.h-100.p-4.rounded.text-white
          p.text-big.mb-4.text-bold 01
          p.text-center Políticas de cobro y pago.

      .col-12.col-md-6.col-lg-3.mx-auto(data-aos="flip-up")
        .bg-verde-claro.h-100.p-4.rounded
          p.text-big.mb-4.text-bold 02
          p.text-center Ciclos de ventas y producción.

      .col-12.col-md-6.col-lg-3.mx-auto(data-aos="flip-up")
        .bg-azul-oscuro.p-4.h-100.p-4.rounded.text-white
          p.text-big.mb-4.text-bold 03
          p.text-center Condiciones del mercado financiero.

      .col-12.col-md-6.col-lg-3.mx-auto(data-aos="flip-up")
        .bg-rojo-oscuro.p-4.h-100.p-4.rounded
          p.text-big.mb-4.text-bold 04
          p.text-center Factores externos como tasas de interés y normativa fiscal.

    p.mb-4 Una gestión eficiente de este presupuesto minimiza el riesgo de insolvencia y mejora la rentabilidad, ya que permite identificar oportunidades de inversión y fortalecer la capacidad de la empresa para afrontar imprevistos financieros.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 Conceptos básicos del presupuesto

    p.mb-4 El presupuesto es un plan financiero detallado que pronostica los ingresos y gastos de una organización en un periodo específico. Su propósito principal es facilitar la toma de decisiones informadas y la evaluación del desempeño económico.

    h2 Importancia del presupuesto
    p.mb-4 Elaborar un presupuesto aporta diversos beneficios, entre los que destacan:

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        .row.mb-4
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Control financiero
                p.text-small.px-4.text-center.pb-2 Monitorea y regula los gastos para evitar excesos y optimizar recursos.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Planificación estratégica
                p.text-small.px-4.text-center.pb-2 Asigna recursos a áreas prioritarias alineadas con los objetivos empresariales.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Evaluación del desempeño
                p.text-small.px-4.text-center.pb-2 Compara resultados reales con proyecciones para detectar desviaciones y áreas de mejora.

        h2 Componentes básicos del presupuesto

    .row.bg-rojo-claro.bg-full-width.p-4.mb-4
      div.px-5.pb-md-3

        .row
          .col-12.col-xl-8
            p.mb-4 Un presupuesto empresarial típico incluye:
            div.d-flex.mb-2
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 <strong>Ingresos proyectados: </strong>estimación de las ventas o ingresos esperados.
            div.d-flex.mb-2
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 <strong>Costos fijos: </strong>gastos constantes como alquiler, salarios administrativos y seguros.
            div.d-flex.mb-2
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 <strong>Costos variables: </strong>gastos que dependen del volumen de producción o ventas, como materias primas y comisiones.
            div.d-flex.mb-2
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 <strong>Gastos de capital: </strong>inversiones en activos a largo plazo, como maquinaria y equipos.
            div.d-flex.mb-2
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0 <strong>Flujo de caja proyectado: </strong>análisis de las entradas y salidas de efectivo para garantizar liquidez.
          .col-4.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')


    h2 Proceso de elaboración del presupuesto
    p.mb-4 Los pasos clave para crear un presupuesto efectivo son:
    
    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.row
        .col-4.d-none.d-xl-block
          img.mb-4(src='@/assets/curso/unidad/img-8.png', alt='Descripción de la imagen')
        .col-12.col-xl-8
          SlyderF(columnas='col-12 col-lg-6 py-4 px-3')
            div.rounded-8px.h-100
              .row.mb-4.justify-content-center.h-100
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-9.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Análisis de la situación actual
                  p.px-1.text-small.mb-0.d-flex.text-center Evaluar el desempeño financiero histórico para identificar tendencias.
            div.rounded-8px.h-100
              .row.mb-4.justify-content-center.h-100
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-10.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Definición de objetivos financieros
                  p.px-1.text-small.mb-0.d-flex.text-center Establecer metas claras alineadas con la estrategia empresarial.
            div.rounded-8px.h-100
              .row.mb-4.justify-content-center.h-100
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-11.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Proyección de ingresos y gastos
                  p.px-1.text-small.mb-0.d-flex.text-center Basarse en datos históricos y condiciones del mercado.
            div.rounded-8px.h-100
              .row.mb-4.justify-content-center.h-100
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-12.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Revisión y ajuste
                  p.px-1.text-small.mb-0.d-flex.text-center Comparar proyecciones con objetivos y hacer ajustes necesarios.
            div.rounded-8px.h-100
              .row.mb-4.justify-content-center.h-100
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-13.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Monitoreo y control
                  p.px-1.text-small.mb-0.d-flex.text-center Implementar mecanismos de seguimiento para identificar desviaciones y tomar medidas correctivas.
    

    .row.mb-4
      .col-12.col-xl-8
        h2 Ejemplo práctico
        p.mb-4 Se proyectan ingresos por ventas de $150,000 para el próximo trimestre. Los costos fijos mensuales incluyen alquiler ($10,000), salarios administrativos ($5,000) y seguros ($2,000), lo que suma $17,000 mensuales o $51,000 trimestrales. Los costos variables se estiman en $20 por unidad producida y se planea vender 4,000 unidades, resultando en $80,000 en costos variables.
        p.mb-4 <strong>Tabla 1.</strong> Presupuesto proyectado para el próximo trimestre
        .tabla-a
          table
            thead
              tr
                th.text-bold Concepto
                th.text-bold Valor
            tbody
              tr
                td.text-bold Ingresos totales
                td $150,000
              tr
                td.text-bold Costos fijos
                td $51,000
              tr
                td.text-bold Costos variables
                td $80,000
              tr
                td.text-bold Beneficio neto proyectado
                td $19,000

      .col-4.d-none.d-xl-block
        img.mb-4(src='@/assets/curso/unidad/img-14.png', alt='Descripción de la imagen')
    .d-flex.align-items-start.bg-verde-oscuro.text-white.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-15.svg', alt='Texto descriptivo de la imagen')
      .my-auto
        p.pe-xl-3.mb-0 Este análisis permite anticipar la rentabilidad y tomar decisiones estratégicas. El presupuesto es una herramienta esencial para la gestión financiera, proporcionando una hoja de ruta para la asignación de recursos y la evaluación del desempeño empresarial. Su correcta elaboración y seguimiento son fundamentales para la sostenibilidad y el éxito de cualquier organización.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.2
        h2 Importancia del presupuesto en la toma de decisiones

    .row.mb-4
      .col-4.d-none.d-xl-block
        img.mb-4(src='@/assets/curso/unidad/img-16.png', alt='Descripción de la imagen')
      .col-12.col-xl-8
        p.mb-4 El presupuesto es una herramienta esencial en la gestión empresarial, ya que permite planificar, coordinar y controlar las operaciones financieras de una organización. Su importancia radica en su capacidad para proporcionar una visión clara y cuantificada de los objetivos y los recursos necesarios para alcanzarlos, facilitando así la toma de decisiones informadas.
        .bg-azul-claro.p-4.mb-4
          span El presupuesto actúa como una guía que orienta las acciones de la empresa hacia el cumplimiento de sus metas financieras y operativas. Al establecer proyecciones de ingresos y gastos, permite identificar posibles desviaciones e implementar medidas correctivas oportunas. Además, favorece una asignación eficiente de los recursos, asegurando que se destinen a las áreas que generen mayor valor para la organización.
        span Los beneficios del presupuesto en la toma de decisiones son: 

    .row.position-relative.mb-5.py-4.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Control financiero
              p Permite monitorear y regular los gastos, evitando excesos y asegurando el uso adecuado de los recursos.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Planificación estratégica
              p Facilita la definición de objetivos a corto y largo plazo, alineando las operaciones diarias con la visión global de la empresa.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Evaluación del desempeño
              p Compara los resultados reales con las proyecciones, identificando oportunidades de mejora y optimización.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Reducción de riesgos
              p Permite anticipar escenarios financieros y desarrollar estrategias para mitigar riesgos y enfrentar imprevistos.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')

    h2 Ejemplo práctico
    p.mb-4 Supongamos que una empresa pronostica ingresos mensuales de $50,000 y ha establecido el siguiente presupuesto:

    p.mb-4 <strong>Tabla 2.</strong>  Presupuesto proyectado de la empresa
    .row.mb-4
      .col-12.col-xl-5
        .tabla-a
          table
            thead
              tr
                th(width="65%").text-bold Concepto
                th.text-bold Monto ($)
            tbody
              tr
                td.text-bold Ingresos mensuales
                td 50,000
              tr
                td.text-bold Costos de producción
                td 20,000
              tr
                td.text-bold Gastos de marketing
                td 10,000
              tr
                td.text-bold Gastos administrativos
                td 5,000
              tr
                td.text-bold Imprevistos
                td 5,000
              tr
                td.text-bold Beneficio neto esperado
                td 10,000
      .col-12.col-xl-7
        .bg-rojo-claro.p-4
          span Al finalizar el mes, se observa que los gastos de marketing ascendieron a $15,000, lo que redujo el beneficio neto a $5,000. Esta desviación indica la necesidad de revisar las estrategias de marketing o reasignar recursos para mantener la rentabilidad deseada.
        .bg-rojo.p-4
          span El presupuesto es una herramienta fundamental para la toma de decisiones en las empresas, ya que proporciona una estructura clara para la planificación, control y evaluación de las operaciones financieras. Su correcta implementación contribuye al logro de los objetivos organizacionales y a la sostenibilidad a largo plazo.

    #t_1_3.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.3
        h2 Tipologías de presupuestos y su aplicación
    p.mb-4 Los presupuestos son herramientas esenciales en la gestión financiera de las organizaciones, ya que permiten planificar, controlar y evaluar el uso de los recursos económicos. Existen diversas tipologías de presupuestos, cada una adaptada a necesidades específicas y con aplicaciones particulares en el ámbito empresarial.
    p.mb-4 Los principales tipos de presupuestos y su aplicación son:
    .row.mb-4
      .col-12.col-lg-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Presupuesto maestro")(data-aos="fade-up")
            p Consolida los presupuestos operativos y financieros de la empresa, coordinando todas las áreas y orientando la planificación global.
          .div(titulo="Presupuesto operativo")(data-aos="fade-up")
            p Detalla ingresos, costos y gastos operativos, facilitando la gestión de producción, ventas y administración.
          .div(titulo="Presupuesto de capital")(data-aos="fade-up")
            p Proyecta inversiones en activos a largo plazo, permitiendo planificar compras de maquinaria, infraestructura o tecnología.
          .div(titulo="Presupuesto financiero")(data-aos="fade-up")
            p Estima necesidades de financiamiento y gestión de efectivo, apoyando decisiones sobre créditos, liquidez y endeudamiento.

    h2 Presupuesto maestro
    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 El presupuesto maestro es la consolidación de todos los presupuestos operativos y financieros de la empresa. Su propósito es proporcionar una visión integral de las actividades planificadas, anticipar necesidades de financiamiento y diseñar estrategias para cumplir con los objetivos financieros.
        .bg-rojo-claro.p-4
          p.text-bold.mb-4 Ejemplo práctico
          span Una empresa manufacturera elabora su presupuesto maestro anual, integrando estimaciones de ventas, producción y gastos administrativos. Esto le permite prever necesidades de financiamiento y planificar estrategias de mercado que garanticen el cumplimiento de sus objetivos.
      .col-4.d-none.d-xl-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')

    h2 Presupuesto operativo

    .row.bg-azul.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.row
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 Este presupuesto se enfoca en las actividades diarias de la empresa, detallando los ingresos y gastos relacionados con la producción y venta de bienes o servicios. Incluye presupuestos específicos como ventas, producción, compras y gastos operativos. Su aplicación garantiza que las operaciones diarias sean eficientes y rentables.
          p.text-bold Ejemplo práctico
          span Una empresa de servicios proyecta sus ingresos mensuales basándose en contratos actuales y previstos. Además, estima los gastos operativos, como salarios, suministros y servicios públicos, asegurando una operación sin contratiempos financieros.
    h2 Presupuesto financiero

    p.mb-4 El presupuesto financiero se centra en la planificación de los recursos financieros de la empresa, abarcando aspectos como flujo de caja, inversiones y financiamiento. Su objetivo es garantizar la liquidez para cumplir con obligaciones financieras y aprovechar oportunidades de inversión.

    .row.mb-4
      .col-12.col-xl-7
        .bg-verde-claro.p-4
          p.text-bold.mb-4 Ejemplo práctico
          span Una empresa prevé un déficit de efectivo en el tercer trimestre del año y, mediante el presupuesto financiero, planifica la obtención de un préstamo bancario para cubrir esta necesidad, asegurando la continuidad de sus operaciones.
      .col-4.d-none.d-xl-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')

    h2 Presupuesto de inversión

    .row.bg-azul-claro.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
        .row.mb-4
          .col-4.d-none.d-xl-block(data-aos="zoom-in")
            img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
          .col-12.col-xl-8
            p.mb-4 Este presupuesto está destinado a planificar las inversiones en activos fijos o proyectos a largo plazo, como la adquisición de maquinaria, desarrollo de nuevas líneas de productos o expansión de instalaciones. Es clave para evaluar la viabilidad y rentabilidad de las inversiones antes de comprometer recursos significativos.
            p.text-bold Ejemplo práctico
            span Una empresa decide invertir en una nueva línea de producción y, a través del presupuesto de inversión, analiza los costos asociados y proyecta los ingresos esperados, determinando el período de recuperación de la inversión.

    h2 Presupuesto base cero

    .row.mb-4
      .col-12.col-xl-8
        .bg-rojo-claro.p-4
          span A diferencia de otros presupuestos basados en datos históricos, el presupuesto base cero requiere justificar todas las partidas de gasto desde cero en cada periodo presupuestario. Es útil para eliminar gastos innecesarios y mejorar la eficiencia en la asignación de recursos.
        .bg-rojo.p-4
          p.text-bold.mb-4 Ejemplo práctico
          span Una organización no gubernamental revisa anualmente todos sus programas y actividades, justificando cada gasto desde cero para garantizar que los fondos se utilicen de manera óptima en proyectos que aporten mayor valor a sus beneficiarios.
      .col-4.d-none.d-xl-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')

    .row.bg-verde-oscuro.text-white.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.row
        .col-3.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
        .col-12.col-xl-9.d-flex.align-items-center
          span Comprender y aplicar estas diferentes tipologías de presupuestos permite a las empresas gestionar de manera más efectiva sus recursos financieros, alineando sus operaciones con sus objetivos estratégicos y mejorando su capacidad de adaptación a cambios en el entorno económico.

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.pnc.com/insights/es/small-business/manage-business-finances/how-to-control-costs-and-better-allocate-resources.html") PNC. (2023). Su presupuesto empresarial: cómo controlar los costos y asignar los recursos de manera más efectiva.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/_gAVclsMovk?si=fcsreS1Cwuxo_64N") [Vídeo] Finanzas. (2020, 25 de marzo). El presupuesto de tesorería. Mis Finanzas U.
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')




</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
