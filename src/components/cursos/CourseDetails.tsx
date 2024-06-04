'use client'

import { useState } from 'react'

const course = {
  urlName: 'iotr4',
  id: '1',
  // srcImage: "https://i.imgur.com/CXequk7.png",
  srcImage: 'https://i.imgur.com/MIm14ZA.jpg',
  name: 'Programacion en Arduino UNO R4 y aplicaciones en IoT',
  description:
      'En este curso aprenderás a programar en la plataforma arduino de cero a experto conociendo las características del nuevo Arduino UNO R4 WiFi así como las aplicaciones IoT con esta tarjeta',
  professor: 'Denilson Trujillo Salazar',
  profeImg: 'https://i.imgur.com/5a2Nduf.jpeg',
  duration: '30',
  level: 'Básico',
  whatYourLearn: [
    'Programar de manera escalable',
    'Integrar IoT a tus proyectos',
    'Crear tus propias librerías',
    'Prototipar tus proyectos de manera rápida'
  ],
  forWhoIs: [
    'Ingenieros y técnicos',
    'Entusiastas y autodidactas',
    'Amantes del hardware'
  ],
  proyects: [
    {
      name: 'Proyecto 1',
      materials: [
        'Arduino UNO R4',
        'Modulo Bluetooth',
        'Sensor de temperatura',
        'Protoboard',
        'Jumpers'
      ]
    },
    {
      name: 'Proyecto 2',
      materials: [
        'Arduino UNO R4',
        'Modulo Bluetooth',
        'Sensor de temperatura',
        'Protoboard',
        'Jumpers'
      ]
    }
  ],
  materials: [
    'Arduino UNO R4',
    'Modulo Bluetooth',
    'Sensor de temperatura',
    'Protoboard',
    'Jumpers'
  ],
  temario: [
    {
      tema: 'Tema 1',
      contenido: [
        'Características de las tarjetas Arduino',
        'Descripción de la tarjeta R4 (Minima y WiFi) a profundidad sobre sus recursos y qué significa',
        'Arduino IDE, Instalación',
        'Variables y tipos de datos en Arduino',
        'Estructura de datos Arrays y Matrices en Arduino',
        'Operadores aritméticos en Arduino',
        'Salidas digitales (Leds, 7 segmentos)'
      ]
    },
    {
      tema: 'Tema 2',
      contenido: [
        'Circuitos combinacionales',
        'Sumador de 4 bits',
        'Creación de componentes personalizados',
        'Multiplexores y Demux',
        'Buses de transferencias'
      ]
    },
    {
      tema: 'Tema 3',
      contenido: [
        'Ciclos en programación (Bucles for, while, do while)',
        'Entrada analógica, ADC de 14 bits en Arduino UNO R4',
        'Salida PWM (Motores DC, Led, Servomotores)',
        'DAC vs PWM y sus diferencias diferencias'
      ]
    },
    {
      tema: 'Tema 4',
      contenido: [
        'Desarrollo de funciones en Arduino',
        'Procesamiento de cadenas en Arduino',
        'Uso de la matriz led del Arduino R4',
        'Manejo de tramas (concatenación, eliminación, separación, etc.)',
        'Lectura de sensores analógicos y digitales'
      ]
    },
    {
      tema: 'Tema 5',
      contenido: [
        'Protocolo de comunicación I2C en Arduino R4',
        'Protocolo de comunicación SPI en Arduino R4',
        'Aplicaciones del protocolo de comunicación UART',
        'Protocolo de comunicación CAN en Arduino R4'
      ]
    },
    {
      tema: 'Tema 6',
      contenido: [
        'Configuración y usos de los periféricos timers e interrupts del Arduino R4',
        'Máquina de estado Mealy',
        'Máquina de estado Moore',
        'Desarrollo de máquina de estados Mealy y Moore en Arduino'
      ]
    },
    {
      tema: 'Tema 7',
      contenido: [
        'Estrategias de lectura de datasheets',
        'Desarrollo de nuestra propia librería de Arduino'
      ]
    },
    {
      tema: 'Tema 8',
      contenido: [
        'Comunicaciones inalámbricas',
        'Módulo Bluetooth en Arduino UNO R4',
        'Transmisión y recepción a través de Bluetooth en Arduino UNO R4',
        'Introducción a App Inventor',
        'Módulos de radiofrecuencia NRF14L01'
      ]
    },
    {
      tema: 'Tema 9',
      contenido: [
        'Stack de capas OSI y TCP/IP',
        'Comunicación WiFi',
        'Modo de estación y acces point con arduino R4 WIFI',
        'Protocolo HTTP -- Modelo cliente - servidor',
        'Protocolo MQTT -- Modelo publicación - subscripción',
        'Comunicación de Arduino R4 con ThingSpeak'
      ]
    },
    {
      tema: 'Tema 10',
      contenido: [
        'Aplicación del protocolo MQTT con Arduino R4',
        'Uso del bróker MQTTX',
        'Aplicación de Node Red con Arduino',
        'Creación de dashboard para el envío de datos y el control de actuadores con Arduino y MQTT'
      ]
    }
  ]
}

export default function CourseDetails () {
  const [isProyectsActive, setIsProyectsActive] = useState(false)
  const [isTemarioActive, setIsTemarioActive] = useState(false)
  const [isMaterialsActive, setIsMaterialsActive] = useState(true)

  return (
    <section className="flex flex-col items-center gap-4 px-4 py-12">
      <div
        id="optionsSection"
        className="mb-4 items-center gap-4 rounded"
      >
        <button
          className={`h-10 bg-[#192933] px-8 text-center text-xl font-bold leading-7 ${isProyectsActive ? 'border-t-2 border-[#FFBC42] text-gray-100' : 'text-gray-500'}`}
          onClick={() => {
            setIsProyectsActive(true)
            setIsTemarioActive(false)
            setIsMaterialsActive(false)
          }}
        >
          Proyectos
        </button>
        <button
          onClick={() => {
            setIsProyectsActive(false)
            setIsTemarioActive(true)
            setIsMaterialsActive(false)
          }}
          className={`h-10 bg-[#192933] px-8 text-center text-xl font-bold leading-7 ${isTemarioActive ? 'border-t-2 border-[#FFBC42] text-gray-100' : 'text-gray-500'}`}
        >
          Temario
        </button>
        <button
          onClick={() => {
            setIsProyectsActive(false)
            setIsTemarioActive(false)
            setIsMaterialsActive(true)
          }}
          className={`h-10 bg-[#192933] px-8 text-center text-xl font-bold leading-7 ${isMaterialsActive ? 'border-t-2 border-[#FFBC42] text-gray-100' : 'text-gray-500'}`}
        >
          Materiales
        </button>
      </div>
      {
        course.temario.map((tema, index) => {
          return (
            <div key={index} className={`min-h-32 w-full max-w-4xl rounded bg-[#192933] px-4 py-2 text-center shadow-sm shadow-[#FFBC42] md:mb-6 md:px-8 md:py-4 md:shadow-md md:shadow-[#FFBC42] ${isTemarioActive ? 'block' : 'hidden'}`}>
              <header className="mb-2 text-gray-100 border-b-[1px] text-start text-base font-bold leading-7 md:text-lg">
                {tema.tema}
              </header>
              <ul className="ml-2 list-disc text-start">
                {tema.contenido.map((clase, index) => (
                  <li key={index} className="mb-1 text-xs font-medium text-[#CACACA] md:text-sm">
                    {clase}
                  </li>
                ))}
              </ul>
            </div>
          )
        })
      }
      {
        course.proyects.map((proyecto, index) => {
          return (
            <div key={index} className={`min-h-32 w-full max-w-4xl rounded bg-[#192933] px-4 py-2 text-center shadow-sm shadow-[#FFBC42] md:mb-6 md:px-8 md:py-4 md:shadow-md md:shadow-[#FFBC42] ${isProyectsActive ? 'block' : 'hidden'}`}>
              <header className="mb-2 text-gray-100 border-b-[1px] text-start text-base font-bold leading-7 md:text-lg">
                {proyecto.name}
              </header>
              <ul className="ml-2 list-disc text-start">
                {proyecto.materials.map((material, index) => (
                  <li key={index} className="mb-1 text-xs font-medium text-[#CACACA] md:text-sm">
                    {material}
                  </li>
                ))}
              </ul>
            </div>
          )
        })
      }
      <div className={`min-h-32 w-full max-w-4xl rounded bg-[#192933] px-4 py-2 text-center shadow-sm shadow-[#FFBC42] md:mb-6 md:px-8 md:py-4 md:shadow-md md:shadow-[#FFBC42] ${isMaterialsActive ? 'block' : 'hidden'}`}>
        <header className="mb-2 text-gray-100 border-b-[1px] text-start text-base font-bold leading-7 md:text-lg">
          Materiales <span className='text-sm font-light text-gray-500 ml-4'>Puedes comprarlo con nosotros</span>
        </header>
        <ul className="ml-2 list-disc text-start">
          {course.materials.map((material, index) => (
            <li key={index} className="mb-1 text-base font-normal text-[#CACACA] md:text-lg">
              {material}
            </li>
          ))}
        </ul>
      </div>
    </section>

  )
}
