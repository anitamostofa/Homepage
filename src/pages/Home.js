import React, { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'

import { ReactComponent as WebDesign } from '../assets/webdesign.svg'
import { ReactComponent as LogoScetch } from '../assets/logo-grid.svg'
import { ReactComponent as Branding } from '../assets/branding.svg'
import { ReactComponent as Develop } from '../assets/develop.svg'
import { ReactComponent as Seo } from '../assets/seo.svg'
import { ReactComponent as Animation } from '../assets/animation.svg'
import ReferenceSlider from '../components/ReferenceSlider'
import { customFunction } from '../script'
import PulsatingHeart from '../components/PulsatingHeart'
import ErrorBoundary from '../components/ErrorBoundary'
import { Helmet } from 'react-helmet'

const Home = ({ isDarkMode, toggleDarkMode }) => {
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    customFunction()
  }, [])

  return (
    <div className={`main ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Helmet>
        <title>Professionelles Design & Webentwicklung | Ihr Partner für CI & Branding</title>
        <meta
          name="description"
          content="Erleben Sie maßgeschneiderte Lösungen für Logo Design, CI & Branding, Webdesign, Web Development, SEO und Animation. Jetzt anfragen und Ihre Marke stärken!"
        />
      </Helmet>
      <div className="container">
        <div className="titel">Hallo & </div>
        <Canvas
          className="herz-canvas"
          shadows
          frameloop="demand"
          camera={{ position: [0, 0, 4] }}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}>
          <ErrorBoundary></ErrorBoundary>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow shadow-mapSize={[100, 100]} />
          <pointLight position={[-10, -10, 0]} intensity={0.5} />
        </Canvas>
        <div className="titel">lich </div>
        <div className="titel">Willkommen auf meiner Homepage :)</div>
      </div>

      <div className="container leistungen">
        <div className="leistung logobox">
          <div className="leistung-text">
            <span className="leistung-number">01</span>
            <h2 className="leistung-titel">Logo Design</h2>
            <p>
              Ich spezialisiere mich auf die Gestaltung einzigartiger und einprägsamer Logos, die die Identität Ihres Unternehmens widerspiegeln und einen
              bleibenden Eindruck hinterlassen.
            </p>
          </div>
          <LogoScetch className="logo-grid-img" />
        </div>

        <div className="leistung logobox">
          <div className="leistung-text">
            <span className="leistung-number">02</span>
            <h2 className="leistung-titel">CI & Branding</h2>
            <p>
              Erleben Sie eine konsistente Markenauftritt-Gestaltung. Ich entwickle Typografie, Briefpapier und Geschäftsmaterialien, die ein einheitliches und
              professionelles Erscheinungsbild gewährleisten.
            </p>
          </div>
          <Branding className="logo-grid-img" />
        </div>

        <div className="leistung logobox">
          <div className="leistung-text">
            <span className="leistung-number">03</span>
            <h2 className="leistung-titel">Webdesign</h2>
            <p>
              Ich entwerfe benutzerfreundliche und ansprechende Screendesigns. Mit dem Fokus auf UI/UX Design entwerfe ich Websites und Apps, die Ihre Nutzer
              begeistern und zur Interaktion einladen.
            </p>
          </div>
          <WebDesign className="logo-grid-img" />
        </div>

        <div className="leistung logobox">
          <div className="leistung-text">
            <span className="leistung-number">04</span>
            <h2 className="leistung-titel">Development</h2>
            <p>
              Von der Entwicklung maßgeschneiderter CMS-Lösungen wie WordPress bis hin zur individuellen Programmierung - ich realisiere Websites, die Ihren
              Anforderungen und Zielen gerecht werden.
            </p>
          </div>
          <Develop className="logo-grid-img" />
        </div>

        <div className="leistung logobox">
          <div className="leistung-text">
            <span className="leistung-number">05</span>
            <h2 className="leistung-titel">SEO</h2>
            <p>
              Optimierung von Websites, um die Sichtbarkeit in Suchmaschinen zu verbessern, den organischen Traffic zu steigern und die Zielgruppen effektiv zu
              erreichen.
            </p>
          </div>
          <Seo className="logo-grid-img" />
        </div>

        <div className="leistung logobox">
          <div className="leistung-text">
            <span className="leistung-number">06</span>
            <h2 className="leistung-titel">Animation</h2>
            <p>
              Erstellung von ansprechenden Animationen, die Inhalte zum Leben erwecken und die Benutzererfahrung auf Websites oder in anderen digitalen Medien
              verbessern.
            </p>
          </div>
          <Animation className="logo-grid-img" />
        </div>
      </div>

      <section id="references">
        <h2>Unsere Referenzen</h2>
        <ReferenceSlider />
      </section>
    </div>
  )
}

export default Home
