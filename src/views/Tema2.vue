<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Acciones de mercadeo

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema2/1.png", alt="Imagen decorativa")

    .row.justify-content-center.mb-4
      .col-lg-10.col-xl-8(data-aos="fade-down")
        div.banner-text.bg-white
          p.mb-0 Las acciones de mercadeo son el motor operativo de toda estrategia comercial, representan las decisiones tácticas que se ejecutan para alcanzar objetivos específicos, influir en el comportamiento del consumidor y posicionar la marca en el mercado.

    .row.justify-content-center
      .col-lg-10.col-xl-8
        .p-4.bg-color-acento-contenido-ac20.rounded-4
          p.text-center.mb-0 Este capítulo explora los tipos de acciones, sus características, objetivos y cómo se articulan con el plan de mercadeo, ofreciendo ejemplos reales y herramientas para su análisis y seguimiento.
    Separador

    .row.justify-content-center
      .col-xl-10    
        #t_2_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido
          h3 2.1 Tipos de acciones

    .row.justify-content-center.mb-4
      .col-xl-10
        p Las acciones de mercadeo pueden clasificarse según su propósito, canal o enfoque estratégico, entre las más comunes se encuentran:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.col-xl-4.mb-4.mb-lg-0
        .ms-5.p-4.ps-5.bg-color-primario-p5.rounded-3.d-flex.align-items-center.justify-content-between.position-relative.flex-wrap.h-100
          img.links-image(src='@/assets/curso/temas/tema2/2.svg', alt='Imagen decorativa')
          h5 Promocionales
          p.mb-0 Buscan incentivar la compra mediante descuentos, concursos o muestras gratis
      .col-lg-6.col-xl-4
        .ms-5.p-4.ps-5.bg-color-primario-p5.rounded-3.d-flex.align-items-center.justify-content-between.position-relative.flex-wrap
          img.links-image(src='@/assets/curso/temas/tema2/3.svg', alt='Imagen decorativa')
          h5 Comunicativas
          p.mb-0 Se enfocan en transmitir mensajes clave a través de medios tradicionales o digitales

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-lg-6.col-xl-4.mb-4.mb-lg-0
        .ms-5.p-4.ps-5.bg-color-primario-p5.rounded-3.d-flex.align-items-center.justify-content-between.position-relative.flex-wrap
          img.links-image(src='@/assets/curso/temas/tema2/4.svg', alt='Imagen decorativa')
          h5 Relacionales
          p.mb-0 Fortalecen el vínculo con el cliente mediante programas de fidelización, atención personalizada o eventos.
      .col-lg-6.col-xl-4
        .ms-5.p-4.ps-5.bg-color-primario-p5.rounded-3.d-flex.align-items-center.justify-content-between.position-relative.flex-wrap
          img.links-image(src='@/assets/curso/temas/tema2/5.svg', alt='Imagen decorativa')
          h5 Digitales
          p.mb-0 Incluyen campañas en redes sociales, <em>email marketing</em>, SEO, SEM y contenido multimedia.

    p.mb-5 Cada tipo tiene características particulares, las promocionales son de corto plazo y alto impacto, las comunicativas requieren claridad y coherencia, las relacionales se basan en la confianza y continuidad, y las digitales permiten segmentación precisa y medición inmediata.

    .fullwidth-bg.fullwidth-bg--2
    .titulo-sexto.color-acento-contenido.z-2
      h5 Tabla 2.
      span Técnicas de medición y sus características
    .tabla-a.color-secundario.z-2
      table
        caption <strong>Fuente:</strong> Adaptado de Lamb, Hair & McDaniel, 2020.
        thead(style="background-color: #FFF3EF;")
          tr
            th Tipo de acción
            th(colspan="2") Características principales
            th(colspan="2") Ejemplo empresarial
        tbody
          tr
            td <strong>Promocionales.</strong>
            td(colspan="2") Temporales, atractivas, orientadas a conversión rápida.
            td(colspan="2") Descuentos del 50 % en temporada escolar.
          tr
            td <strong>Comunicativas.</strong>
            td(colspan="2") Informativas, persuasivas, alineadas con identidad de marca.
            td(colspan="2") Campaña de valores institucionales en TV. 
          tr
            td <strong>Relacionales.</strong>
            td(colspan="2") Personalizadas, sostenibles, centradas en experiencia del cliente.
            td(colspan="2") Programa de puntos por compras frecuentes.
          tr
            td <strong>Digitales.</strong>
            td(colspan="2") Segmentadas, medibles, interactivas.
            td(colspan="2") Publicidad en Instagram con influencers.

    Separador
    .row.justify-content-center
      .col-xl-10    
        #t_2_2(data-aos='zoom-in-left').titulo-segundo.color-acento-contenido
          h3 2.2 objetivos

    .row.justify-content-center
      .col-xl-10  
        p.mb-5 Toda acción de mercadeo debe responder a objetivos definidos en el plan estratégico, estos objetivos pueden ser:

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span Ejemplos de objetivos en acciones de mercadeo 
        img.mb-2.d-sm-none(data-aos="fade-up", src='@/assets/curso/temas/tema2/8-mob.svg', alt='en la figura se muestra como es el layout tipo Grid (rejilla), desarrollado en un supermercado, supentienda o tienda.')
        img.mb-2.d-none.d-lg-block(data-aos="fade-up", src='@/assets/curso/temas/tema2/8.svg', alt='en la figura se muestra como es el layout tipo Grid (rejilla), desarrollado en un supermercado, supentienda o tienda.')
        figcaption <strong>Fuente:</strong> Adaptado de Kotler & Keller, 2016.

    .row.justify-content-center.align-items-center
      .col-10.col-md-5.col-xl-4
        figure
          img.mb-3.mb-lg-0(data-aos="fade-up", src='@/assets/curso/temas/tema2/9.png', alt='Imagen decorativa')
      .col-md-7.col-xl-6
        p Los objetivos deben ser específicos, medibles, alcanzables, relevantes y temporales (SMART). Por ejemplo, una empresa de tecnología puede plantear como objetivo aumentar en un 20 % las ventas de su nuevo dispositivo móvil en el primer trimestre, mediante una campaña digital dirigida a jóvenes profesionales.
        p.mb-0 La alineación entre acciones y objetivos garantiza coherencia estratégica y facilita la evaluación posterior, si las acciones no responden a los objetivos del plan, se corre el riesgo de dispersar recursos y perder impacto.

    Separador
    #t_2_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.text-center
      h3 2.3 Relación con el plan de mercadeo

    .row.justify-content-center.mb-5
      .d-none.d-lg-block.col-lg-3.col-xl-2
        figure
          img.mb-3.mb-lg-0(data-aos="fade-up", src='@/assets/curso/temas/tema2/10.png', alt='Imagen decorativa')
      .col-lg-9.col-xl-8
        p Las acciones de mercadeo deben diseñarse considerando los segmentos del mercado (grupos de consumidores con características comunes) y los escenarios (contextos económicos, sociales, tecnológicos, etc.), esta articulación permite que las estrategias sean pertinentes, efectivas y adaptables con el plan de mercadeo.
        p.mb-0 Por ejemplo, una empresa de productos orgánicos puede segmentar su mercado en consumidores conscientes de la salud y diseñar acciones comunicativas que resalten los beneficios nutricionales, en escenarios urbanos con alta conectividad digital.

    .row.justify-content-center
      .col-xl-10
        p.mb-4 La articulación implica:

    .row.justify-content-center.align-items-center.mb-5 
      .col-10.col-lg-5.col-xl-4
        figure
          img.mb-3.mb-lg-0(data-aos="fade-up", src='@/assets/curso/temas/tema2/11.png', alt='Imagen decorativa')

      .col-lg-7.col-xl-5
        .p-1.bg-color-primario-p20.rounded-5.shadow-sm.mb-2
          .row.align-items-center
            .col-2
              img.w-37(src='@/assets/curso/temas/tema2/12.svg', alt='Icono decorativo')
            .col-10
              <strong>Conocer profundamente al público objetivo.</strong>
        .p-1.bg-color-primario-p20.rounded-5.shadow-sm.mb-2
          .row.align-items-center
            .col-2
              img.w-37(src='@/assets/curso/temas/tema2/12.svg', alt='Icono decorativo')
            .col-10
              <strong>Identificar oportunidades y riesgos del entorno.</strong>
        .p-1.bg-color-primario-p20.rounded-5.shadow-sm.mb-2
          .row.align-items-center
            .col-2
              img.w-37(src='@/assets/curso/temas/tema2/12.svg', alt='Icono decorativo')
            .col-10
              <strong>Adaptar el mensaje, canal y formato de la acción.</strong>
        .p-1.bg-color-primario-p20.rounded-5.shadow-sm.mb-2
          .row.align-items-center
            .col-2
              img.w-37(src='@/assets/curso/temas/tema2/12.svg', alt='Icono decorativo')
            .col-10
              <strong>Validar la pertinencia con datos y retroalimentación.</strong>

    .fullwidth-bg.fullwidth-bg--2
    .titulo-sexto.color-acento-contenido.z-2
      h5 Tabla 3.
      span Ejemplo de articulación entre acción, segmento y escenario
    .tabla-a.color-secundario.z-2.mb-5
      table
        caption <strong>Fuente:</strong> Elaboración propia con base en Kotler & Keller, 2016.
        thead(style="background-color: #FFF3EF;")
          tr
            th Segmento objetivo
            th(colspan="2") Escenario de mercado
            th(colspan="2") Acción de mercadeo propuesta
        tbody
          tr
            td <strong>Jóvenes universitarios.</strong>
            td(colspan="2") Alta conectividad, consumo digital.
            td(colspan="2") Campaña en TikTok con retos virales.
          tr
            td <strong>Adultos mayores.</strong>
            td(colspan="2") Bajo uso de tecnología, confianza en marcas.
            td(colspan="2") Publicidad en radio y eventos locales.
          tr
            td <strong>Emprendedores sostenibles.</strong>
            td(colspan="2") Interés en productos ecológicos.
            td(colspan="2") Alianzas con ferias verdes y contenido educativo.

    .row.align-items-center.z-2.mb-5
      .d-none.d-lg-block.col-lg-2
        figure
          img.mb-3.mb-lg-0(data-aos="fade-up", src='@/assets/curso/temas/tema2/13.png', alt='Imagen decorativa')
      .col-lg-10
        p.mb-0 Registrar las acciones ejecutadas dentro del plan de mercadeo, permite hacer seguimiento, evaluar impacto y generar aprendizajes, la trazabilidad facilita la rendición de cuentas, la mejora continua y la replicabilidad de acciones exitosa e implica documentar, entre muchos otros aspectos los siguientes:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.col-xl-4.mb-4
        .ms-5.p-4.ps-5.bg-color-primario-p20.rounded-5.d-flex.align-items-center.justify-content-between.position-relative.flex-wrap.h-100
          img.links-image(src='@/assets/curso/temas/tema2/14.svg', alt='Imagen decorativa')
          p.my-2 <strong>Fecha y duración de la acción.</strong>
      .col-lg-6.col-xl-4.mb-4
        .ms-5.p-4.ps-5.bg-color-acento-contenido-ac20.rounded-5.d-flex.align-items-center.justify-content-between.position-relative.flex-wrap
          img.links-image(src='@/assets/curso/temas/tema2/15.svg', alt='Imagen decorativa')
          p.my-2 <strong>Responsable de ejecución.</strong>
      .col-lg-6.col-xl-4.mb-4
        .ms-5.p-4.ps-5.bg-color-primario-p20.rounded-5.d-flex.align-items-center.justify-content-between.position-relative.flex-wrap
          img.links-image(src='@/assets/curso/temas/tema2/16.svg', alt='Imagen decorativa')
          p.my-2 <strong>Recursos utilizados.</strong>
      .col-lg-6.col-xl-4.mb-4
        .ms-5.p-4.ps-5.bg-color-primario-p20.rounded-5.d-flex.align-items-center.justify-content-between.position-relative.flex-wrap
          img.links-image(src='@/assets/curso/temas/tema2/17.svg', alt='Imagen decorativa')
          p.my-2 <strong>Resultados preliminares.</strong>
      .col-lg-6.col-xl-4.mb-4
        .ms-5.p-4.ps-5.bg-color-acento-contenido-ac20.rounded-5.d-flex.align-items-center.justify-content-between.position-relative.flex-wrap
          img.links-image(src='@/assets/curso/temas/tema2/18.svg', alt='Imagen decorativa')
          p.my-2 <strong>Observaciones y ajustes.</strong>

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
              p.bloque-texto-f__texto Toda acción que busca influir en otros debe partir de la autenticidad, el mercadeo ético no vende ilusiones, sino construye relaciones basadas en verdad y respeto.


</template>

<script>
export default {
  name: 'Tema2',
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
