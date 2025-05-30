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

const Cta = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full py-16 sm:py-20 bg-blue-600 text-center">
      <div className="space-y-6 text-white px-4">
        <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
          ¿Necesitas Servicio de Grúa Eléctrica Ahora?
        </h2>
        <p className="text-base sm:text-xl text-blue-100 max-w-[600px] mx-auto">
          No esperes más. Contáctanos ahora y recibe atención inmediata para tu proyecto.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-lg flex items-center justify-center"
          >
            <Phone className="h-5 w-5 mr-2" />
            Llamar Ahora: (555) 123-4567
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-blue-600 hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-lg flex items-center justify-center"
          >
            <Mail className="h-5 w-5 mr-2" />
            Enviar WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};


export default Cta;
