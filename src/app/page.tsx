"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TICKER_PHRASES = [
  "LOS BUGS BAJAN CUANDO SUBE EL CAFE",
  "NO ES UN BUG, ES UNA FEATURE OCULTA",
  "DEPLOY EN VIERNES SOLO PARA VALIENTES",
  "MIENTE EL TEST O MIENTE EL CODIGO?",
  "SI COMPILA A LA PRIMERA, SOSPECHA",
  "CONSOLE.LOG ES MI TERAPEUTA",
] as const;

export default function Home() {
  const [now, setNow] = useState<Date>(new Date());
  const [phraseIndex, setPhraseIndex] = useState(0);

  // Reloj en tiempo real
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  // Rotación de frases del ticker
  useEffect(() => {
    const id = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % TICKER_PHRASES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const formatDate = (date: Date) => {
    const dayNames = [
      "DOM",
      "LUN",
      "MAR",
      "MIE",
      "JUE",
      "VIE",
      "SAB",
    ] as const;
    const dayName = dayNames[date.getDay()];
    const dayNumber = String(date.getDate()).padStart(2, "0");
    const months = [
      "ENE",
      "FEB",
      "MAR",
      "ABR",
      "MAY",
      "JUN",
      "JUL",
      "AGO",
      "SEP",
      "OCT",
      "NOV",
      "DIC",
    ] as const;
    const month = months[date.getMonth()];
    return `${dayName}-${dayNumber}-${month}`;
  };

  const formatTime = (date: Date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <main className="h-screen bg-black text-white flex flex-col items-center justify-start">
      <div className="w-[90vw] h-[90vh] flex flex-col items-stretch justify-start">
        {/* Cabecera superior negra con info principal y fecha/hora */}
        <div className="bg-black text-white px-4 py-3 flex items-center justify-between text-xl md:text-3xl tracking-[0.12em] uppercase">
          <span>
            DAVID MONTALBA | DVDMONTALBA@GMAIL.COM
          </span>
          <span className="flex items-center gap-3">
            <span>{formatDate(now)}</span>
            <span className="text-yellow-500">
              {formatTime(now)}
            </span>
          </span>
        </div>

        {/* Banda azul de bienvenida estilo teletexto */}
        <div className="bg-blue-500 text-white px-4 py-3 flex flex-col items-start justify-center text-left">
          <span className="teletext-text text-2xl md:text-3xl mb-1 self-start pl-[15rem] text-left">
            EDICION 9.200 (C)
          </span>
          <div className="w-full flex items-end justify-between">
            <span
              className="teletext-text tracking-[0.4em]"
              style={{
                fontSize: "10rem",
                lineHeight: "5rem",
                paddingBottom: "1rem",
                paddingLeft: "3rem",
              }}
            >
              PORTFOLIO
            </span>

            {/* QR real que enlaza a LinkedIn */}
            <a
              href="https://www.linkedin.com/in/david-montalba-gonzalez-2a069319a/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn de David Montalba"
              className="mr-6 mb-4 inline-block"
            >
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fdavid-montalba-gonzalez-2a069319a%2F"
                alt="Código QR LinkedIn David Montalba"
                className="h-16 w-16 border-4 border-white bg-white"
              />
            </a>
          </div>
        </div>

        {/* Sección de dos columnas (roja y verde) */}
        <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Columna roja: información tipo listado teletexto */}
          <div className="bg-red-500 text-white px-10 py-4 flex flex-col justify-start teletext-text text-2xl md:text-3xl">
            <div className="text-yellow-500 mb-4 text-center text-3xl md:text-4xl">
              INFORMACION
            </div>
            <div className="mt-1 normal-case">
              <div className="flex justify-between">
                <span>Nombre....................</span>
                <span className="text-yellow-500">David J. Montalba</span>
              </div>
              <div className="flex justify-between">
                <span>Rol.......................</span>
                <span className="text-yellow-500">Full Stack Dev</span>
              </div>
              <div className="flex justify-between">
                <span>Ubicación.................</span>
                <span className="text-yellow-500">Madrid</span>
              </div>
              <div className="flex justify-between">
                <span>Experiencia..............</span>
                <span className="text-yellow-500">4 años</span>
              </div>
            </div>
          </div>

          {/* Columna verde: experiencia tipo listado teletexto */}
          <div className="bg-green-500 text-blue-500 px-10 py-4 flex flex-col justify-start teletext-text text-2xl md:text-3xl">
            <div className="text-red-500 mb-4 text-center text-3xl md:text-4xl">
              EXPERIENCIA
            </div>
            <div className="mt-1 normal-case">
              <div className="flex justify-between">
                <span>Empresa...................</span>
                <span>Hawkins (Agencia)</span>
              </div>
              <div className="flex justify-between">
                <span>Periodo...................</span>
                <span>10/2021 - 02/2026</span>
              </div>
              <div className="flex justify-between">
                <span>Rol.......................</span>
                <span>Backend / Full Stack</span>
              </div>
              <div className="flex justify-between">
                <span>Stack....</span>
                <span className="whitespace-nowrap">
                  PHP · Laravel · REST · Angular · React · Nest
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Banda inferior estilo titular teletexto */}
        <div className="mt-4 bg-white text-blue-500 px-6 py-4 teletext-text text-xl md:text-2xl flex items-center justify-between overflow-hidden min-h-[3rem]">
          <div className="relative flex-1 overflow-hidden">
            <AnimatePresence initial={false} mode="wait">
              <motion.span
                key={phraseIndex}
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="inline-block whitespace-nowrap"
              >
                {TICKER_PHRASES[phraseIndex]}............................
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="ml-4 text-blue-500">404-JS</span>
        </div>

        {/* Sección de dos columnas (amarilla y celeste) */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Columna amarilla: formación / servicios */}
          <div className="bg-yellow-500 text-black px-10 py-4 flex flex-col justify-start teletext-text text-2xl md:text-3xl">
            <div className="text-black mb-4 text-center text-2xl md:text-3xl font-bold">
              FORMACION
            </div>
            <div className="mt-1 text-blue-500 space-y-1 normal-case">
              <div className="flex justify-between">
                <span>Keepcoding Bootcamp.....</span>
                <span>Full Stack · 06/2022</span>
              </div>
              <div className="flex justify-between">
                <span>Node de cero a exp......</span>
                <span>Udemy · 03/2026</span>
              </div>
              <div className="flex justify-between">
                <span>Javascript moderno......</span>
                <span>Udemy · 01/2021</span>
              </div>
              <div className="flex justify-between">
                <span>Laravel / PHP...........</span>
                <span>Arq. backend</span>
              </div>
              <div className="flex justify-between">
                <span>React / Angular........</span>
                <span>Frontend</span>
              </div>
            </div>
          </div>

          {/* Columna celeste: contacto */}
          <div className="bg-cyan-300 text-blue-500 px-10 py-4 flex flex-col justify-start teletext-text text-2xl md:text-3xl">
            <div className="text-red-500 mb-4 text-center text-2xl md:text-3xl font-bold">
              CONTACTO
            </div>
            <div className="mt-1 text-blue-500 space-y-1 normal-case">
              <div className="flex justify-between">
                <span>Email....................</span>
                <span>dvdmontalba@gmail.com</span>
              </div>
              <div className="flex justify-between">
                <span>Teléfono................</span>
                <span>+34 622 44 09 84</span>
              </div>
              <div className="flex justify-between">
                <span>Ubicación..............</span>
                <span>Madrid, España</span>
              </div>
              <div className="flex justify-between">
                <span>Linkedin................</span>
                <span>/in/david-montalba</span>
              </div>
            </div>
          </div>
        </div>

        {/* Banda inferior de secciones estilo menú teletexto */}
        <div className="mt-[10px] teletext-text text-2xl md:text-3xl flex justify-between px-8">
          <span className="text-red-500">INFORMACION</span>
          <span className="text-green-500">EXPERIENCIA</span>
          <span className="text-yellow-500">FORMACION</span>
          <span className="text-cyan-500">CONTACTO</span>
        </div>
      </div>
    </main>
  );
}
