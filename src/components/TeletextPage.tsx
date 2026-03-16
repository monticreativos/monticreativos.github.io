"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type TeletextPageProps = {
  page: number;
};

const pageGlitchVariants = {
  initial: {
    opacity: 0,
    x: -4,
    skewX: -4,
  },
  animate: {
    opacity: 1,
    x: 0,
    skewX: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: 6,
    skewX: 6,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

export const TeletextPage: React.FC<TeletextPageProps> = ({ page }) => {
  const renderContent = () => {
    switch (page) {
      case 100:
        return (
          <div className="space-y-2">
            {/* Cabecera sólida */}
            <div className="w-full bg-blue-500 text-black px-3 py-2 flex items-center justify-between text-lg md:text-2xl">
              <span className="text-yellow-500">
                DAVID JESUS MONTALBA GONZALEZ
              </span>
              <span className="text-white">
                P<span className="text-yellow-500">{page}</span>
              </span>
            </div>

            {/* Barra separadora blanca */}
            <div className="h-1 bg-white" />

            {/* Bloque central de bienvenida */}
            <div className="bg-green-500 text-black px-4 py-4 text-lg md:text-2xl">
              <p className="text-black">
                <span className="text-black font-bold">
                  FULL STACK DEVELOPER
                </span>{" "}
                <span className="text-blue-700 font-bold">- 4 AÑOS DE EXP</span>
              </p>
              <p className="mt-2 text-black">
                BIENVENIDO AL SISTEMA DE INFORMACION PROFESIONAL
              </p>
            </div>
          </div>
        );
      case 200:
        return (
          <div className="space-y-2">
            {/* Cabecera sólida */}
            <div className="w-full bg-red-500 text-black px-3 py-2 flex items-center justify-between text-lg md:text-2xl">
              <span className="text-white">P200 EXPERIENCIA LABORAL</span>
              <span className="text-yellow-500">
                P<span className="text-black bg-yellow-500 px-1">{page}</span>
              </span>
            </div>

            {/* Barra separadora blanca */}
            <div className="h-1 bg-white" />

            {/* Dos columnas sólidas: datos + funciones/logros */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base md:text-xl">
              <div className="bg-green-500 text-black px-3 py-3">
                <p className="font-bold">HAWKINS (AGENCIA)</p>
                <p className="mt-1">OCTUBRE 2021 - FEBRERO 2026</p>
                <p className="mt-1">4 AÑOS DE EXPERIENCIA</p>
                <p className="mt-2">
                  Rol: BACKEND / FULL STACK WEB DEVELOPER
                </p>
              </div>
              <div className="bg-cyan-500 text-black px-3 py-3">
                <p className="font-bold">LOGROS PRINCIPALES</p>
                <p className="mt-1">
                  - ESPECIALISTA EN ARQUITECTURA PHP/LARAVEL
                </p>
                <p>- DESARROLLO DE APIs REST</p>
                <p>- FRONTENDS CON REACT Y ANGULAR</p>
              </div>
            </div>
          </div>
        );
      case 300:
        return (
          <div className="space-y-2">
            {/* Cabecera sólida */}
            <div className="w-full bg-blue-500 text-black px-3 py-2 flex items-center justify-between text-lg md:text-2xl">
              <span className="text-white">P300 FORMACION Y CERTIFICADOS</span>
              <span className="text-yellow-500">
                P<span className="text-black bg-yellow-500 px-1">{page}</span>
              </span>
            </div>

            {/* Barra separadora blanca */}
            <div className="h-1 bg-white" />

            {/* Bloques de cursos en columnas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base md:text-xl">
              <div className="bg-green-500 text-black px-3 py-3">
                <p className="font-bold">KEEPcoding</p>
                <p>BOOTCAMP FULL STACK</p>
                <p className="mt-1">JUNIO 2022</p>
              </div>
              <div className="bg-cyan-500 text-black px-3 py-3">
                <p className="font-bold">UDEMY</p>
                <p>NODE: DE CERO A EXPERTO (29H)</p>
                <p className="mt-1">MARZO 2026</p>
              </div>
              <div className="bg-yellow-500 text-black px-3 py-3 md:col-span-2">
                <p className="font-bold">UDEMY</p>
                <p>JAVASCRIPT MODERNO (17.5H)</p>
                <p className="mt-1">ENERO 2021</p>
              </div>
            </div>
          </div>
        );
      case 400:
        return (
          <div className="space-y-2">
            {/* Cabecera sólida */}
            <div className="w-full bg-magenta-500 text-black px-3 py-2 flex items-center justify-between text-lg md:text-2xl">
              <span className="text-white">P400 SKILLS TECNICAS</span>
              <span className="text-yellow-500">
                P<span className="text-black bg-yellow-500 px-1">{page}</span>
              </span>
            </div>

            {/* Barra separadora blanca */}
            <div className="h-1 bg-white" />

            {/* Dos columnas: experto vs avanzado/mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base md:text-xl">
              <div className="bg-green-500 text-black px-3 py-3">
                <p className="font-bold">EXPERTO</p>
                <p>PHP</p>
                <p>LARAVEL</p>
                <p>JAVASCRIPT</p>
                <p>TYPESCRIPT</p>
              </div>
              <div className="bg-cyan-500 text-black px-3 py-3">
                <p className="font-bold">AVANZADO</p>
                <p>MYSQL / MARIADB</p>
                <p>NODE.JS</p>
                <p>REACT</p>
                <p>ANGULAR</p>
                <div className="mt-2 bg-yellow-500 text-black px-1 py-1 inline-block">
                  MOBILE: IONIC
                </div>
              </div>
            </div>
          </div>
        );
      case 500:
        return (
          <div className="space-y-2">
            {/* Cabecera sólida */}
            <div className="w-full bg-green-500 text-black px-3 py-2 flex items-center justify-between text-lg md:text-2xl">
              <span className="text-black font-bold">P500 CONTACTO</span>
              <span className="text-black bg-yellow-500 px-1">
                P{page}
              </span>
            </div>

            {/* Barra separadora blanca */}
            <div className="h-1 bg-white" />

            {/* Bloque de contacto */}
            <div className="bg-blue-500 text-white px-4 py-4 text-lg md:text-2xl space-y-3">
              <p>
                EMAIL:{" "}
                <span className="text-yellow-500">dvdmontalba@gmail.com</span>
              </p>
              <p>
                TELEFONO:{" "}
                <span className="text-yellow-500">+34 622 44 09 84</span>
              </p>
              <p>
                UBICACION:{" "}
                <span className="text-yellow-500">MADRID, ESPAÑA</span>
              </p>
            </div>
          </div>
        );
      default:
        return (
          <p className="text-red-500">
            P{page} NO DISPONIBLE - USE P100, 200, 300, 400 O 500
          </p>
        );
    }
  };

  return (
    <div className="w-full h-full bg-black px-6 py-4 md:px-10 md:py-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          variants={pageGlitchVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="mt-2 space-y-2"
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

