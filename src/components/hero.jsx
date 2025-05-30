import {
  Phone,
  CheckCircle,
} from "lucide-react"
import { Button, Badge, Image } from "@nextui-org/react"

const Hero = () => {
  return (
      <div className="w-full flex flex-col justify-center items-center 2xl:h-[60vh] px-4 sm:px-6 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Columna izquierda - Texto */}
        <div className="space-y-6 2xl:space-y-10 text-left">
          <div className="space-y-4 2xl:space-y-8">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 w-fit">
              ⚡ Servicio 24/7 Disponible
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight 2xl:leading-[1.2]">
              Servicios de <span className="text-blue-600">Grúas Eléctricas</span> Profesionales
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-prose 2xl:leading-relaxed">
              Especialistas en elevación e instalación de equipos, estructuras, letreros industriales y más. Servicio seguro, rápido y confiable.
            </p>
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 2xl:gap-6">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-lg flex text-white text-base sm:text-lg px-6 sm:px-8 py-5">
              <Phone className="h-5 w-5 mr-2" />
              Solicitar Cotización
            </Button>
          </div>

          {/* Características */}
          <div className="flex flex-wrap gap-4 pt-4 2xl:pt-6">
            {[
              "Servicio 24/7",
              "Totalmente Asegurado",
              "Equipo Certificado",
            ].map((text, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

          {/* Columna derecha - Imagen */}
          <div className="relative mt-12 w-full">
            <div className="relative bg-white w-full h-64 sm:h-80 md:h-[450px] 2xl:w-[30vw]  rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://maquinariapesadanegocios.com.co/wp-content/uploads/2020/11/2-135.jpg"
                alt="Grúa"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>

            {/* Tarjeta flotante */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0 bg-white rounded-xl shadow-lg p-4 border w-72 sm:w-80">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">+500 Proyectos</p>
                  <p className="text-sm text-gray-600">Completados exitosamente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
};

export default Hero;
