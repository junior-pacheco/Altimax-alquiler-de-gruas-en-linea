// import React from 'react'
// import { Card, Button ,Badge , CardBody, CardHeader ,DateInput, Image, Link, Textarea } from "@nextui-org/react"
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   CheckCircle,
//   Truck,
//   Zap,
//   Shield,
//   Users,
//   Star,
//   ArrowUp,
//   Building,
//   Wind,
//   Package,
// } from "lucide-react"

// const Chose = () => {
//   return (
//         <section id="nosotros" className="w-full py-20 bg-gray-50">
//           <div className="container px-4 md:px-6">
//             <div className="grid gap-12 lg:grid-cols-2 items-center">
//               <div className="space-y-8">
//                 <div className="space-y-4">
//                   <Badge className="bg-blue-100 text-blue-800">¿Por Qué Elegirnos?</Badge>
//                   <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
//                     Experiencia y Profesionalismo que Garantiza Resultados
//                   </h2>
//                   <p className="text-lg text-gray-600">
//                     Con años de experiencia en el sector, nos hemos consolidado como líderes en servicios de grúas
//                     eléctricas, ofreciendo soluciones seguras y eficientes.
//                   </p>
//                 </div>

//                 <div className="grid gap-6 sm:grid-cols-2">
//                   <div className="flex items-start space-x-3">
//                     <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                       <Shield className="h-4 w-4 text-blue-600" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-gray-900">Totalmente Asegurados</h3>
//                       <p className="text-sm text-gray-600">Cobertura completa para tu tranquilidad</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-3">
//                     <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                       <Users className="h-4 w-4 text-green-600" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-gray-900">Equipo Certificado</h3>
//                       <p className="text-sm text-gray-600">Operadores con licencias vigentes</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-3">
//                     <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                       <Clock className="h-4 w-4 text-purple-600" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-gray-900">Servicio 24/7</h3>
//                       <p className="text-sm text-gray-600">Disponibles cuando nos necesites</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-3">
//                     <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                       <Zap className="h-4 w-4 text-orange-600" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-gray-900">Respuesta Rápida</h3>
//                       <p className="text-sm text-gray-600">Llegamos en tiempo récord</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-white rounded-xl p-6 shadow-lg border">
//                   <div className="grid grid-cols-3 gap-4 text-center">
//                     <div>
//                       <div className="text-2xl font-bold text-blue-600">500+</div>
//                       <div className="text-sm text-gray-600">Proyectos Completados</div>
//                     </div>
//                     <div>
//                       <div className="text-2xl font-bold text-green-600">24/7</div>
//                       <div className="text-sm text-gray-600">Servicio Disponible</div>
//                     </div>
//                     <div>
//                       <div className="text-2xl font-bold text-purple-600">100%</div>
//                       <div className="text-sm text-gray-600">Satisfacción</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="relative">
//                 <Image
//                   src="/placeholder.svg?height=600&width=500"
//                   alt="Equipo profesional de grúas eléctricas"
//                   width={500}
//                   height={600}
//                   className="rounded-2xl shadow-2xl"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>
//   )
// };

// export default Chose;
import React from 'react'
import {
  Card,
  Button,
  Badge,
  CardBody,
  CardHeader,
  DateInput,
  Image,
  Link,
  Textarea
} from "@nextui-org/react"
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
  Package
} from "lucide-react"


const Chose = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32 mt-6 md:mt-20 rounded-lg bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-10 lg:gap-20 2xl:gap-32 w-full  max-w-full">
        {/* Columna de texto */}
        <div className="space-y-8 2xl:space-y-12  max-w-prose">
          <Badge className="bg-blue-100 text-blue-800">¿Por Qué Elegirnos?</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            Experiencia y Profesionalismo que Garantiza Resultados
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600">
            Con años de experiencia en el sector, nos hemos consolidado como líderes en servicios de grúas
            eléctricas, ofreciendo soluciones seguras y eficientes.
          </p>

          {/* Características */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: <Shield className="h-4 w-4 text-blue-600" />,
                bg: "bg-blue-100",
                title: "Totalmente Asegurados",
                desc: "Cobertura completa para tu tranquilidad",
              },
              {
                icon: <Users className="h-4 w-4 text-green-600" />,
                bg: "bg-green-100",
                title: "Equipo Certificado",
                desc: "Operadores con licencias vigentes",
              },
              {
                icon: <Clock className="h-4 w-4 text-purple-600" />,
                bg: "bg-purple-100",
                title: "Servicio 24/7",
                desc: "Disponibles cuando nos necesites",
              },
              {
                icon: <Zap className="h-4 w-4 text-orange-600" />,
                bg: "bg-orange-100",
                title: "Respuesta Rápida",
                desc: "Llegamos en tiempo récord",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <div className={`w-8 h-8 ${item.bg} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Métricas */}
          <div className="bg-white rounded-xl p-6 shadow-lg border">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Proyectos Completados</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600">Servicio Disponible</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-gray-600">Satisfacción</div>
              </div>
            </div>
          </div>
        </div>

        {/* Columna de imagen */}
        <div className="relative mt-10 lg:mt-0 max-w-md mx-auto lg:max-w-full">
          <Image
            src="https://img.freepik.com/foto-gratis/foto-vertical-gruas-al-atardecer_1137-273.jpg?ga=GA1.1.1653515673.1712756887&semt=ais_items_boosted&w=740"
            alt="Equipo"
            width={500}
            height={600}
            className="w-full h-auto rounded-2xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};


export default Chose
