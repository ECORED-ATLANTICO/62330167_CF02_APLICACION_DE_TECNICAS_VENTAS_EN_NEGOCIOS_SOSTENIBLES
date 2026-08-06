<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'
import imagen1 from '@/assets/actividad/imagen1.png'
import imagen2 from '@/assets/actividad/imagen2.png'
import imagen3 from '@/assets/actividad/imagen3.png'
import imagen4 from '@/assets/actividad/imagen4.png'
import imagen5 from '@/assets/actividad/imagen5.png'
export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Conceptos en comercialización sostenible',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión de los conceptos fundamentales relacionados con comercialización sostenible.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué propósito tiene el biocomercio en los mercados sostenibles?',
          imagen: imagen1,
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Promover el aprovechamiento sostenible de la biodiversidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar la explotación indiscriminada de recursos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir las normas ambientales existentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la participación de comunidades locales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué caracteriza principalmente al comercio justo?',
          imagen: imagen1,
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Competencia basada únicamente en precios bajos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Relaciones comerciales equitativas y transparentes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminación de acuerdos con productores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exclusividad para mercados internacionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué función cumple la certificación FLO?',
          imagen: imagen1,
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar únicamente la productividad agrícola.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir la responsabilidad social empresarial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Verificar el cumplimiento de estándares de comercio justo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar procesos de trazabilidad comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué fortalece la responsabilidad social empresarial?',
          imagen: imagen1,
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuir la confianza de los grupos interesados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la transparencia organizacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Limitar las relaciones con la comunidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Integrar impactos económicos, sociales y ambientales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué riesgo genera el greenwashing para las organizaciones?',
          imagen: imagen2,
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Deteriorar la credibilidad frente al consumidor.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar automáticamente la fidelización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fortalecer certificaciones ambientales oficiales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la necesidad de evidencia verificable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué característica identifica una práctica de greenwashing?',
          imagen: imagen2,
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de certificaciones verificables internacionalmente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comunicación ambiental engañosa sin evidencia comprobable.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Transparencia en la información corporativa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Divulgación de indicadores ambientales auditados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué aportan los sellos ambientales al consumidor?',
          imagen: imagen2,
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducen la necesidad de información verificable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituyen completamente las normas legales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Facilitan decisiones sustentadas en confianza y evidencia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Garantizan exclusivamente precios más bajos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué diferencia existe entre sello y certificación ambiental?',
          imagen: imagen2,
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ambos representan exactamente el mismo proceso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ninguno requiere criterios de evaluación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ambos sustituyen la legislación ambiental vigente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La certificación verifica mediante auditorías requisitos establecidos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué fortalece el <em>storytelling</em> en la comunicación comercial?',
          imagen: imagen3,
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La conexión emocional con el consumidor.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La eliminación de objetivos comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La sustitución del análisis de mercado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La reducción del posicionamiento empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué función cumple un <em>brief</em> en comunicación comercial?',
          imagen: imagen3,
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la planificación de campañas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Orientar estratégicamente el desarrollo de la comunicación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir el análisis del público objetivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplazar los objetivos organizacionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué elementos integra una propuesta comercial?',
          imagen: imagen3,
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Objetivos comerciales alineados con necesidades del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Información sin relación con el mercado objetivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mensajes ambiguos y sin diferenciación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Acciones comerciales sin planificación previa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué favorece una propuesta comercial bien estructurada?',
          imagen: imagen3,
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la incertidumbre del cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comunicar claramente el valor ofrecido.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la diferenciación competitiva.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar argumentos comerciales relevantes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué refleja la satisfacción del cliente después de comprar?',
          imagen: imagen4,
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Exclusivamente el precio del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente la cantidad de publicidad recibida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El grado de cumplimiento de sus expectativas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solamente el volumen de ventas empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Por qué medir la satisfacción del cliente es importante?',
          imagen: imagen4,
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permite eliminar los procesos de seguimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituye el análisis del mercado objetivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reduce la necesidad de mejorar procesos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Facilita identificar oportunidades de mejora continua.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué finalidad tiene controlar la información comercial?',
          imagen: imagen4,
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantizar información confiable para la toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Disminuir el acceso a datos relevantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar el seguimiento de indicadores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir los sistemas de información.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué herramienta facilita controlar información comercial?',
          imagen: imagen4,
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Manual impreso de procedimientos obsoletos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sistema de gestión de información empresarial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Catálogo físico de productos desactualizado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Organigrama institucional sin indicadores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué permiten evaluar los indicadores comerciales empresariales?',
          imagen: imagen5,
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente el tamaño de la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo la antigüedad de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El desempeño frente a objetivos establecidos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Exclusivamente el número de empleados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué propósito tiene un plan de mejora organizacional?',
          imagen: imagen5,
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar el análisis de resultados obtenidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir los objetivos estratégicos institucionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la participación de los equipos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Optimizar procesos mediante acciones correctivas planificadas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué fortalece el seguimiento continuo de indicadores comerciales?',
          imagen: imagen5,
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La toma de decisiones basada en evidencia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La eliminación de controles internos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La reducción del análisis empresarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La sustitución de los planes comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué resultado genera integrar comunicación, control y mejora continua?',
          imagen: imagen5,
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la incertidumbre estratégica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la competitividad organizacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fortalecer la gestión comercial sostenible.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Limitar la adaptación al mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
