import React from 'react'
import { Card, Button ,Badge , CardBody, CardHeader ,DateInput, Image, Link, Textarea } from "@nextui-org/react"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Truck,
  Zap,
  Shield,
  Users,
  Star,
  ArrowUp,
  Building,
  Wind,
  Package,
} from "lucide-react"

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 mt-6 md:mt-20 2xl:mt-12">
      <div className="text-center space-y-4 mb-16">
        <Badge className="bg-blue-100 text-blue-800">Testimonios</Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Lo Que Dicen Nuestros Clientes</h2>
      </div>

      <div className="flex flex-wrap gap-8 justify-center">
        <Card className="border-0 rounded-lg shadow-lg max-w-sm">
          <CardBody className="p-6">
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">
              "Excelente servicio para la instalación de nuestro aire acondicionado. Muy profesionales y
              puntuales. Lo recomiendo 100%."
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-blue-600">MC</span>
              </div>
              <div>
                <p className="font-semibold">María Contreras</p>
                <p className="text-sm text-gray-600">Propietaria de Casa</p>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className="border-0 rounded-lg shadow-lg max-w-sm">
          <CardBody className="p-6">
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">
              "Necesitábamos instalar un letrero en nuestro local y el trabajo fue impecable. Equipo muy
              capacitado y con todas las medidas de seguridad."
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-green-600">JR</span>
              </div>
              <div>
                <p className="font-semibold">José Rodríguez</p>
                <p className="text-sm text-gray-600">Dueño de Restaurante</p>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className="border-0 rounded-lg shadow-lg max-w-sm">
          <CardBody className="p-6">
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">
              "Servicio de emergencia excepcional. Llegaron rápido y solucionaron nuestro problema de elevación de
              equipos industriales."
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-purple-600">AL</span>
              </div>
              <div>
                <p className="font-semibold">Ana López</p>
                <p className="text-sm text-gray-600">Gerente de Fábrica</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
};



export default Testimonials;
