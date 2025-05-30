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
import Header from './header';
import Hero from './hero';
import Service from './service';
import Chose from './choose';
import Testimonials from './testimonials';
import Contact from './contact';
import Cta from './cta';
import { motion } from "framer-motion"


const About = () => {
    React.useEffect(() => {
    console.log('App cargado');
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <Header/>
      </div>

      <main>
        <Hero />

        <motion
          id="servicios"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Service />
        </motion>

        <motion
          id="nosotros"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Chose />
        </motion>

        <motion
          id="proyectos"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Testimonials />
        </motion>

        <motion
          id="contacto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Contact />
        </motion>

        <Cta />
      </main>


      {/* Footer */}
      <footer className="w-full py-12 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg">
                  <Truck className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold">GrúasEléctricas Pro</span>
              </div>
              <p className="text-gray-400">
                Líderes en servicios de grúas eléctricas con más de 10 años de experiencia brindando soluciones seguras
                y confiables.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Instalación de Aires</li>
                <li>Instalación de Letreros</li>
                <li>Elevación de Objetos</li>
                <li>Servicios de Emergencia</li>
                <li>Mudanzas Especializadas</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@gruaselectricas.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Servicio 24/7</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Certificaciones</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Operadores Certificados</li>
                <li>• Equipos Inspeccionados</li>
                <li>• Seguro de Responsabilidad</li>
                <li>• Licencias Vigentes</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} GrúasEléctricas Pro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default About;