<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Medición de resultados
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La medición de resultados es el punto de partida para verificar el impacto real de las acciones de mercadeo, no basta con ejecutar estrategias; es necesario evaluar su efectividad, pertinencia y alineación con los objetivos organizacionales.
        p.mb-0 La medición no es un fin en sí mismo, sino un medio para tomar decisiones estratégicas, cuando los resultados son claros y confiables, los equipos pueden ajustar campañas, redistribuir presupuestos, fortalecer canales o replantear objetivos, la toma de decisiones basada en datos reduce la incertidumbre y mejora la efectividad de las acciones.
        
    .row.justify-content-center.align-items-center
      .col-xl-10
        .p-4.bg-box.rounded-4
          .row.align-items-center.justify-content-center
            .col-lg-9
              p Por ejemplo, si una empresa de ropa detecta que su campaña en Instagram genera más conversiones que en Facebook, puede decidir enfocar sus esfuerzos en ese canal, optimizando recursos y resultados.
            .d-none.d-lg-block.col-lg-2
              figure
                img(src="@/assets/curso/temas/tema1/2.png" alt="Imagen ilustrativa" data-aos="fade-up")

    Separador
    .row.justify-content-center
      .col-xl-10
        #t_1_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 1.1 Concepto
  
    .row.justify-content-center.align-items-center
      .col-10.col-sm-6.col-lg-5.col-xl-4
        figure(data-aos="fade-up")
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema1/3.png" alt="Imagen ilustrativa")
      .col-lg-7.col-xl-6
        p.mb-0 La medición de resultados es el proceso mediante el cual se evalúa el grado de cumplimiento de los objetivos establecidos en un plan o estrategia. Implica comparar los resultados obtenidos con los indicadores definidos previamente, para identificar avances, desviaciones o áreas que requieren acciones de mejora. En el ámbito del mercadeo estratégico, esta medición permite analizar el impacto real de las decisiones comerciales, la efectividad de las campañas y la eficiencia de los recursos utilizados, aportando información clave para la toma de decisiones y la optimización continua del desempeño organizacional.

    Separador
    .row.justify-content-center.z-2
      .col-xl-10
        #t_1_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 1.2 Propósito

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-8.col-sm-6.col-lg-3.col-xl-2
        figure(data-aos="fade-up")
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema1/4.png" alt="Imagen ilustrativa")
      .col-lg-9.col-xl-8
        p La medición de resultados se refiere al proceso sistemático de recolectar, analizar y valorar información sobre el desempeño de una acción o conjunto de acciones (Kotler & Keller, 2016), su propósito principal es determinar si las estrategias implementadas están generando los efectos deseados, permitiendo tomar decisiones informadas para ajustar, escalar o rediseñar las acciones.
        p.mb-0 En el contexto del mercadeo estratégico, medir resultados implica observar el comportamiento del mercado, la respuesta de los consumidores, el cumplimiento de metas y la eficiencia de los recursos utilizados; esta práctica fomenta la transparencia, la rendición de cuentas y la mejora continua. Por ejemplo, una empresa de cosméticos que lanza una campaña digital puede medir su éxito a través del aumento en visitas al sitio <em>web</em>, interacciones en redes sociales y ventas generadas durante el periodo de promoción.

    .row.justify-content-center.align-items-center.z-2
      .col-lg-10.col-xl-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Propósitos clave de la medición de resultados en mercadeo 
        img.mb-2(data-aos="fade-up", src='@/assets/curso/temas/tema1/5.svg', alt='en la figura se muestra como es el layout tipo Grid (rejilla), desarrollado en un supermercado, supentienda o tienda.')
        figcaption <strong>Fuente:</strong> Adaptado de Kotler & Keller, 2016.

    .fullwidth-bg.fullwidth-bg--1
    Separador
    .row.justify-content-center
      .col-xl-10
        #t_1_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 1.3 Tipos

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        p.mb-4 Los resultados pueden clasificarse en distintos tipos según el enfoque de análisis, los más comunes en mercadeo son:

    .row.justify-content-center.align-items-center.factores-slider.z-2.mb-5
      .col-10.col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema1/6.png" alt="Imagen ilustrativa" data-aos="fade-up")
      .col-lg-9.col-xl-7
        SlyderF(columnas="col-lg-6")
          .tarjeta.bg-cards.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon(src='@/assets/curso/temas/tema1/7.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Cuantitativos
            p.mb-4.mb-5.text-center Expresados en cifras, como ventas, participación de mercado, ROI.

          .tarjeta.bg-cards.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon(src='@/assets/curso/temas/tema1/8.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Cualitativos
            p.mb-4.text-center Relacionados con percepciones, satisfacción, reputación.

          .tarjeta.bg-cards.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon(src='@/assets/curso/temas/tema1/9.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Operativos
            p.mb-4.mb-5.text-center Vinculados a la ejecución de tareas, tiempos de respuesta, cobertura.

          .tarjeta.bg-cards.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon(src='@/assets/curso/temas/tema1/10.png' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Estratégicos
            p.mb-4.text-center Alineados con los objetivos de largo plazo, posicionamiento, fidelización. 

    p.mb-5.z-2 Cada tipo tiene características específicas. Los cuantitativos son medibles, comparables y permiten análisis estadísticos. Los cualitativos requieren interpretación contextual y suelen obtenerse mediante encuestas o entrevistas. Los operativos se centran en la eficiencia interna, mientras que los estratégicos evalúan el impacto en la visión organizacional.

    .row.justify-content-center.align-items-center
      .col-xl-10
        .p-4.p-lg-1.bg-box.rounded-4
          .row.align-items-center.justify-content-center
            .col-lg-8
              p.mb-0 Por ejemplo, si una empresa de ropa detecta que su campaña en Instagram genera más conversiones que en Facebook, puede decidir enfocar sus esfuerzos en ese canal, optimizando recursos y resultados.
            .d-none.d-lg-block.col-lg-2
              figure
                img(src="@/assets/curso/temas/tema1/11.png" alt="Imagen ilustrativa" data-aos="fade-up")

    Separador
    .row.justify-content-center
      .col-xl-10
        #t_1_4.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 1.4 Técnicas de medición

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-md-6.col-xl-3   
        .tarjeta-avatar.p-2.mb-4.mb-xl-0
          img(src='@/assets/curso/temas/tema1/12.png', alt='imagen decorativa')
          .tarjeta.pt-5.mt-3.shadow.p-4
            h5.mt-5.mb-4.pt-4.text-center Encuestas estructuradas
            p.text-center Permiten obtener datos sobre percepción, satisfacción y comportamiento.
      .col-md-6.col-xl-3   
        .tarjeta-avatar.p-2.mb-4.mb-xl-0
          img(src='@/assets/curso/temas/tema1/13.png', alt='imagen decorativa')
          .tarjeta.pt-5.mt-3.shadow.p-4
            h5.mt-5.mb-4.pt-4.text-center Indicadores clave de desempeño (KPIs)
            p.text-center Permiten obtener datos sobre percepción, satisfacción y comportamiento.
      .col-md-6.col-xl-3   
        .tarjeta-avatar.p-2.mb-4.mb-xl-0
          img(src='@/assets/curso/temas/tema1/14.png', alt='imagen decorativa')
          .tarjeta.pt-5.mt-3.shadow.p-4
            h5.mt-5.mb-4.pt-4.text-center Analítica digital
            p.text-center Permiten obtener datos sobre percepción, satisfacción y comportamiento.
      .col-md-6.col-xl-3   
        .tarjeta-avatar.p-2.mb-4.mb-xl-0
          img(src='@/assets/curso/temas/tema1/15.png', alt='imagen decorativa')
          .tarjeta.pt-5.mt-3.shadow.p-4
            h5.mt-5.mb-4.pt-4.text-center Matrices comparativas
            p.text-center Permiten obtener datos sobre percepción, satisfacción y comportamiento.



    .cajon.color-acento-contenido.p-4.mb-5
      p.mb-0 Cada técnica tiene características particulares. Las encuestas son versátiles y accesibles, los KPIs son precisos y estratégicos, la analítica digital es inmediata y detallada, y las matrices ofrecen una visión comparativa clara.

    .row.justify-content-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 1.
          span Técnicas de medición y sus características
        .tabla-a.color-secundario
          table
            caption <strong>Fuente:</strong> SENA, 2025.
            thead(style="background-color: #FFF3EF;")
              tr
                th Técnica
                th(colspan="2") Características principales
                th(colspan="2") Aplicación empresarial
            tbody
              tr
                td <strong>Encuestas.</strong>
                td(colspan="2") Flexibles, permiten segmentar, capturan percepción.
                td(colspan="2") Evaluación de campañas publicitarias.
              tr
                td <strong>KPIs.</strong>
                td(colspan="2") Enfocados, cuantificables, alineados con objetivos.
                td(colspan="2") Seguimiento de ventas, leads, conversión.
              tr
                td <strong>Analítica digital.</strong>
                td(colspan="2") Precisa, en tiempo real, visualizable.
                td(colspan="2") Monitoreo de tráfico <em>web</em> y redes sociales.
              tr
                td <strong>Matrices comparativas.</strong>
                td(colspan="2") Sintéticas, comparativas, útiles para benchmarking.
                td(colspan="2") Comparación de desempeño entre sucursales.


    .row.justify-content-center
      .col-xl-10
        h4(data-aos='zoom-in-right').mb-5
          span.etiqueta-title Cita de reflexión

    .row.justify-content-center
      .col-xl-10
        .bloque-texto-f.color-acento-contenido.pt-4.px-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          .row.justify-content-center
            .col-lg-11
              p.bloque-texto-f__texto Medir con honestidad es el primer paso para mejorar con integridad, quien reconoce sus resultados, reconoce también su responsabilidad.




</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
