import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Badge,
} from "@nextui-org/react"
import {
  Building,
  Package,
  Zap,
  ArrowUp,
  Shield,
} from "lucide-react"

const services = [
  {
    icon: Building,
    bg: "bg-green-100",
    hoverBg: "group-hover:bg-green-600",
    color: "text-green-600",
    hoverColor: "group-hover:text-white",
    title: "Instalación de Letreros",
    description: "Montaje profesional de letreros publicitarios, señalización y elementos decorativos.",
    points: [
      "Letreros luminosos",
      "Señalización corporativa",
      "Elementos arquitectónicos",
    ],
  },
  {
    icon: Package,
    bg: "bg-purple-100",
    hoverBg: "group-hover:bg-purple-600",
    color: "text-purple-600",
    hoverColor: "group-hover:text-white",
    title: "Elevación de Objetos",
    description: "Servicio especializado para elevar equipos, muebles y objetos pesados de forma segura.",
    points: [
      "Equipos industriales",
      "Muebles y electrodomésticos",
      "Materiales de construcción",
    ],
  },
  {
    icon: Zap,
    bg: "bg-orange-100",
    hoverBg: "group-hover:bg-orange-600",
    color: "text-orange-600",
    hoverColor: "group-hover:text-white",
    title: "Servicios de Emergencia",
    description: "Disponibles 24/7 para situaciones de emergencia que requieran servicios de grúa inmediatos.",
    points: [
      "Respuesta rápida",
      "Servicio 24/7",
      "Equipo especializado",
    ],
  },
  {
    icon: ArrowUp,
    bg: "bg-red-100",
    hoverBg: "group-hover:bg-red-600",
    color: "text-red-600",
    hoverColor: "group-hover:text-white",
    title: "Mudanzas Especializadas",
    description: "Mudanzas que requieren elevación por ventanas o balcones cuando no es posible usar escaleras.",
    points: [
      "Pianos y instrumentos",
      "Muebles grandes",
      "Objetos frágiles",
    ],
  },
  {
    icon: Shield,
    bg: "bg-teal-100",
    hoverBg: "group-hover:bg-teal-600",
    color: "text-teal-600",
    hoverColor: "group-hover:text-white",
    title: "Mantenimiento Industrial",
    description: "Servicios de mantenimiento para equipos industriales ubicados en alturas o lugares de difícil acceso.",
    points: [
      "Equipos de ventilación",
      "Sistemas de iluminación",
      "Estructuras metálicas",
    ],
  },
];

const Service = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-4 mt-6 md:mt-20 2xl:mt:32 md:px-6">
      <div className="text-center space-y-4 mb-16">
        <Badge className="bg-blue-100 text-blue-800">Nuestros Servicios</Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Soluciones Completas de Elevación
        </h2>
        <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
          Ofrecemos servicios especializados con equipos de última generación y personal altamente capacitado
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card
            key={index}
            className="group rounded-lg transition-all duration-300 shadow-md hover:shadow-md p-4 max-w-md 2xl:max-w-lg mx-auto"
          >
          <CardHeader className="flex justify-center items-center space-x-2 pb-2 px-2">
            <div
              className={`w-10 h-10 ${service.bg} ${service.hoverBg} rounded-full flex items-center justify-center transition-colors`}
            >
              <service.icon className={`h-5 w-5 ${service.color} ${service.hoverColor}`} />
            </div>
            <h1 className="text-lg font-semibold">{service.title}</h1>
          </CardHeader>
            <CardBody className="text-center px-2">
              <p className="text-md text-gray-900 mb-2">{service.description}</p>
              <ul className="text-md text-gray-500 space-y-1">
                {service.points.map((point, idx) => (
                  <li key={idx}>• {point}</li>
                ))}
              </ul>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Service;
