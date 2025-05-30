
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
const Contact = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 bg-gray-50 min-h-screen flex flex-col items-center py-10">
      <div className="text-center space-y-4 mb-12 max-w-lg mx-auto">
        <Badge className="bg-blue-100 text-blue-800">Contacto</Badge>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">¿Necesitas Nuestros Servicios?</h2>
        <p className="text-base sm:text-xl text-gray-600 max-w-[600px] mx-auto">
          Contáctanos para una cotización gratuita. Estamos disponibles 24/7 para atender tus necesidades.
        </p>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Columna izquierda */}
        <div className="flex flex-col space-y-6 max-w-sm w-full mx-auto lg:mx-0">
          <Card className="border-0 rounded-lg shadow-lg flex-1 flex flex-col">
            <CardBody className="p-6 text-center flex flex-col justify-center flex-grow">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg">Teléfono</h3>
              </div>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-500">Disponible 24/7</p>
            </CardBody>
          </Card>

          <Card className="border-0 rounded-lg shadow-lg flex-1 flex flex-col">
            <CardBody className="p-6 text-center flex flex-col justify-center flex-grow">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg">Email</h3>
              </div>
              <p className="text-gray-600">info@gruaselectricas.com</p>
              <p className="text-sm text-gray-500">Respuesta en 2 horas</p>
            </CardBody>
          </Card>
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col space-y-6 max-w-sm w-full mx-auto lg:mx-0">
          <Card className="border-0 rounded-lg shadow-lg flex-1 flex flex-col">
            <CardBody className="p-6 flex flex-col justify-center flex-grow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Área de Servicio</h3>
                  <p className="text-gray-600">
                    Cubrimos toda el área metropolitana y zonas aledañas. Consulta disponibilidad para tu ubicación específica.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="border-0 rounded-lg shadow-lg flex-1 flex flex-col">
            <CardBody className="p-6 flex flex-col justify-center flex-grow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Horarios</h3>
                  <div className="space-y-1 text-gray-600">
                    <p>Lunes - Viernes: 7:00 AM - 8:00 PM</p>
                    <p>Sábados: 8:00 AM - 6:00 PM</p>
                    <p>Domingos: Emergencias únicamente</p>
                    <p className="text-blue-600 font-medium">Servicio de emergencia 24/7</p>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};


export default Contact;
