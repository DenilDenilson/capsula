export interface ICourse {
  urlName: string
  id: string
  srcImage: string
  name: string
  description: string
  professor: string
  profeImg: string
  duration: string
  level: string
  whatYourLearn: string[]
  forWhoIs: string[]
  temario: Array<{ tema: string, contenido: string[] }>
}

export const courses: ICourse[] = [
  {
    urlName: 'iotr4',
    id: '1',
    srcImage: 'https://i.imgur.com/vOAxjOz.jpeg',
    name: 'Programacion en Arduino UNO R4 WiFi desde cero hasta aplicaciones IoT',
    description:
      'En este curso aprenderás a programar en la plataforma arduino de cero a experto conociendo las características del nuevo Arduino UNO R4 WiFi así como las aplicaciones IoT con esta tarjeta',
    professor: 'David Alexis Castillo',
    profeImg: 'https://i.imgur.com/1tSwTYf.jpeg',
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
          'Introducción a App Inventor'
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
  },
  {
    urlName: 'fpga1',
    id: '2',
    srcImage: 'https://i.imgur.com/q4ZMasQ.jpeg',
    name: 'Diseño de hardware con FPGA usando VHDL y HDL coder de Simulink Mod 1',
    description:
      'Aprende a programar una FPGA desde cero usando el lenguaje de descripción de hardware VHDL y matlab con HDL coder de Simulink',
    professor: 'David Alexis Castillo',
    profeImg: 'https://i.imgur.com/1tSwTYf.jpeg',
    duration: '30',
    level: 'Básico',
    whatYourLearn: [
      'Lógica programable con FPGA',
      'Desarrollar proyectos de hardware',
      'Describir hardware con VHDL',
      'Aprender a usar HDL coder de Simulink'
    ],
    forWhoIs: [
      'Ingenieros y técnicos',
      'Entusiastas y autodidactas',
      'Amantes del hardware'
    ],
    temario: [
      {
        tema: 'Tema 1: Arquitectura en sistemas embebidos',
        contenido: [
          'Sistemas embebidos clásicos',
          'Arquitectura de 8,16 y 32 bits',
          'FPGA familia Terasic',
          'FPGA familia xilinx',
          '¿Ques es una GAL,PLD,CPLD?',
          'Diferencias entre VHDL y Verilog',
          '¿Por qué usar HDL?',
          'Arquitectura en la FPGA',
          'Conociendo la tarjeta Cyclone IV EP4CE10E22C8N',
          'Descarga e instalación de Quartus'
        ]
      },
      {
        tema: 'Tema 2: Elementos léxicos y formato del programa en VHDL',
        contenido: [
          'Uso del Block Diagram/Esquematic File',
          'Uso del Universal Program VWF',
          'VHDL en flujo de desarrollo y descripción estructural',
          'Declaración de entidad y cuerpo de la arquitectura',
          'Diseño VHDL con compuertas lógicas básicas, AND,OR,NOT,NAND,etc.',
          'Elementos léxicos',
          'Formato de programa VHDL',
          'Tipos de datos predefinidos VHDL',
          'Tipos de datos en el paquete IEEE std_logic_1164',
          'Operadores sobre un tipo de dato vector',
          'Tipo de datos IEEE numeric_std',
          'Paquete std_logic_arith',
          'Tipos de datos hdl code',
          'Compuertas primitvas HDL coder'
        ]
      },
      {
        tema: 'Tema 3: Declaraciones de asignación de señales simutáneas',
        contenido: [
          'Tratamiento de cadenas hdl coder',
          'Operaciones matemáticas enteras hdl coder',
          'Circuitos combinacionales vs Circuitos secuenciales',
          'Declaración de asignación de señal simple',
          'Declaración de asignación de señal condicional',
          'Declaración de asignación de señal condicional versus asignación de señal seleccionada',
          'Circuito sumador y restador de n bits',
          'Circuito multiplicador',
          'Simple ALU',
          'Circuito comparador completo',
          'Comparador de modo dual con signo y sin signo',
          'Multiplicador combinado basado en sumador',
          'Codificadores',
          'Decodificadores 7 segmentos y 16 segmentos',
          'Multiplexores y demultiplexores'
        ]
      },
      {
        tema: 'Tema 4: Diseño de circuitos secuenciales',
        contenido: [
          'Descripción general de circuitos secuenciales',
          'Elementos básicos de la memoria',
          'Circuitos síncronos vs asíncronos',
          'Inferencia de elementos básicos de la memoria.',
          'Flip Flop RS y SR',
          'Flip Flop D',
          'Registro',
          'RAM',
          'Registro de desplazamiento',
          'Contador de secuencia arbitraria',
          'Contador binario',
          'Contador de décadas',
          'Contador mod-m programable',
          'Temporización de un circuito secuencial síncrono',
          'Configuración y frecuencia de reloj máxima',
          'Condicional y bucles hdl coder',
          'Subsitemas y encapsulamientos con hdl coder'
        ]
      },
      {
        tema: 'Tema 5: Máquina de estados finitos',
        contenido: [
          'Representación FSM',
          'Diagrama de estado',
          'Operación de un FSM síncrono',
          'Máquina Moore versus máquina Mealy',
          'Circuito de detección de bordes',
          'Estilo de codificación multisegmento',
          'Descripción general de la asignación de estados',
          'Manejo de los estados no utilizados',
          'Almacenamiento en búfer mediante asignación de estado inteligente',
          'Almacenamiento en búfer de salida de Moore',
          'Contador binario basado en FSM',
          'Implementaciones con stateflow de simulink',
          'Generación de código hdl con maquinas de estados'
        ]
      }
    ]
  },
  {
    urlName: 'fpga2',
    id: '3',
    srcImage: 'https://i.imgur.com/q4ZMasQ.jpeg',
    name: 'Diseño de hardware con FPGA usando VHDL y HDL coder de Simulink Mod 2',
    description:
      'En este módulo 2 aprenderás el desarrollo de periféricos enfocados en la comunicación serial y paralela con otros dispositivos',
    professor: 'David Alexis Castillo',
    profeImg: 'https://i.imgur.com/1tSwTYf.jpeg',
    duration: '30',
    level: 'Intermedio',
    whatYourLearn: [
      'Programar de manera escalable',
      'Desarrolo de periféricos de comunicación',
      'Crear tus propias librerías',
      'Pruebas de hardware con FPGA'
    ],
    forWhoIs: [
      'Ingenieros y técnicos',
      'Entusiastas y autodidactas',
      'Amantes del hardware'
    ],
    temario: [
      {
        tema: 'Tema 1',
        contenido: [
          'Eliminador efecto rebote',
          'Creacion de funciones y diseño de paquete lcd 16x2,20x4',
          'Creación de caracteres personalizados',
          'Tipos de Registros en Sistemas Digitales',
          'Representación de Registros y Transferencias',
          'Operaciones de Transferencia',
          'Diseño y Aplicaciones de Registros de Transferencia'
        ]
      },
      {
        tema: 'Tema 2',
        contenido: [
          'Ciclo de Trabajo y Frecuencia en PWM',
          'Resolución y Precisión en PWM',
          'Uso de Temporizadores y Contadores para PWM',
          'Aplicaciones con l298n y motores DC',
          'Aplicaciones con servomotores '
        ]
      },
      {
        tema: 'Tema 3',
        contenido: [
          'Introducción a la Comunicación Serial',
          'Características y Parámetros de la Transmisión UART',
          'Formato de un Paquete de Datos UART (Start bit, Data bits,',
          'Parity bit, Stop bits)',
          'Configuración de Baud Rate',
          'Rutinas de UART: Transmisión y Recepción',
          'Aplicaciones gsm',
          'Aplicaciones bluetooth'
        ]
      },
      {
        tema: 'Tema 4',
        contenido: [
          'Principios Básicos de la Comunicación SPI',
          'Arquitectura y Topología de SPI (Maestro/Esclavo)',
          'Líneas de Comunicación SPI: MISO, MOSI, SCK, SS',
          'Modos de Operación y Conguraciones de Reloj',
          'Formato de los Datos y Protocolo de Transmisión',
          'Diseño de Interfaces SPI en Dispositivos Periféricos',
          'Herramientas y Técnicas de Depuración para SPI',
          'SPI en Sensores y Actuadores'
        ]
      },
      {
        tema: 'Tema 5',
        contenido: [
          'Fundamentos de I2C',
          'Arquitectura de Comunicación I2C (Maestro/Esclavo)',
          'Señales y Líneas de Comunicación I2C: SDA y SCL',
          'Protocolo de Transmisión I2C: Inicio, Dirección, ACK/NACK, Parada',
          'Direcciones y Asignación de Direcciones en I2C',
          'Diseño de Circuitos con I2C',
          'Herramientas de Simulación y Depuración para I2C',
          'I2C en Sensores, Actuadores y Dispositivos Periféricos '
        ]
      }
    ]
  },
  {
    urlName: 'fpga3',
    id: '4',
    srcImage: 'https://i.imgur.com/q4ZMasQ.jpeg',
    name: 'Integración Avanzada y Aplicaciones de Sistemas FPGA y Procesadores Nios II',
    description:
      'Aprende a integrar sistemas complejos con FPGA y procesadores Nios II, aplicaciones de sistemas embebidos y sistemas de tiempo real',
    professor: 'David Alexis Castillo',
    profeImg: 'https://i.imgur.com/1tSwTYf.jpeg',
    duration: '30',
    level: 'Avanzado',
    whatYourLearn: [
      'Integración de sistemas complejos',
      'Desarrollo de sistemas embebidos',
      'Crear sistemas de tiempo real',
      'Diseño de sistemas de control'
    ],
    forWhoIs: [
      'Ingenieros y técnicos',
      'Entusiastas y autodidactas',
      'Amantes del hardware'
    ],
    temario: [
      {
        tema: 'Tema 1: Exploración de gráficos en FPGA',
        contenido: [
          'Importancia de FPGA en la simulación de hardware y aplicaciones de gráficos.',
          'Explicación de la señalización VGA: sincronización horizontal y vertical.',
          'Resoluciones comunes y configuraciones de color en VGA.',
          'Diagrama de bloques de un controlador VGA simple.',
          'Descripción de las señales y su generación utilizando lógica programable.',
          'Carga del diseño en un FPGA y conexión con un monitor VGA.',
          'Análisis de los resultados y ajuste de parámetros para modificar la resolución y el color.',
          'Transformación pixel de una imagen por Matlab',
          'Libreria posicion y color de una imagen.'
        ]
      },
      {
        tema: 'Tema 2: Diseño y programación de sistemas embebidos con procesadores NiosII',
        contenido: [
          'Qué es un procesador soft-core y cómo se compara con los procesadores hard-core.',
          'Visión general de la familia de procesadores Nios II y sus características principales.',
          'Descripción de la arquitectura de Nios II: registros, unidades de ejecución, y opciones de personalización.',
          'Variantes del procesador Nios II (e, s, f) y sus aplicaciones.',
          'Introducción a Quartus Prime y al Nios II SBT.',
          'Configuración del entorno de desarrollo y requisitos del sistema.',
          'Utilización del Platform Designer (anteriormente Qsys) para diseñar un sistema embebido completo.',
          'Exploración de la arquitectura GPIO disponible en Nios II.',
          'Configuración de pines como entradas o salidas usando Platform Designer y Quartus Prime.',
          'Programación en lenguaje de alto nivel (C/C++)'
        ]
      },
      {
        tema: 'Tema 3: Comunicación y temporización en sistemas embebidos',
        contenido: [
          'Descripción de la interfaz UART disponible en Nios II.',
          'Diseño del hardware: configuración del módulo UART y sus conexiones con Nios II.',
          'Desarrollo de software en C para manejar la UART: inicialización, recepción y transmisión de datos.',
          'Arquitectura de temporizadores disponibles en Nios II .',
          'Configuración de temporizadores usando Platform Designer.',
          'Desarrollo de software en C para configurar y manejar eventos de temporización.',
          'Ejemplos de código para iniciar, detener, y reiniciar temporizadores, y para manejar interrupciones'
        ]
      },
      {
        tema: 'Tema 4: Avances en procesadores multinúcleo y fundamentos de programación de dispositos FPGA',
        contenido: [
          'Definición y evolución de los procesadores multinúcleo.',
          'Comparación entre arquitecturas de un solo núcleo y multinúcleo.',
          'Ventajas de los procesadores multinúcleo en términos de rendimiento y eficiencia energética.',
          'Desafíos en la programación paralela y la gestión de recursos.',
          'Explicación del formato de archivo .hex y su estructura.',
          'Diferencias entre los formatos de archivo más comunes utilizados en programación de dispositivos (.bin, .elf, .hex).',
          'Proceso de conversión de código fuente y archivos binarios a formato .hex.',
          'Programación de un dispositivo usando el archivo .hex y métodos no volátiles'
        ]
      },
      {
        tema: 'Tema 5: Integración de VHDL em sistemas FPGA',
        contenido: [
          'Creación de un módulo VHDL.',
          'Cómo convertir el módulo VHDL en un componente reutilizable mediante el Component Editor.',
          'Definición de interfaces y parámetros del componente.',
          'Configuración de un sistema en Platform Designer que incluya el procesador Nios II y el componente VHDL.',
          'Interconexión del componente VHDL con Nios II y otros componentes del sistema.',
          'Carga del diseño en FPGA y pruebas en hardware real.'
        ]
      }
    ]
  }
]
