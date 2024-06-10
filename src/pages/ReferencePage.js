import React from 'react'
import { useParams } from 'react-router-dom'
import references from '../components/references.json'
import Header from '../components/Header'
import Footer from '../components/Footer'

// Manually import all images
import silberweissImage from '../assets/referenz-bilder/silberweiss/flyer-design-flugblatt-druck-programm-dresden.jpg'
import gartentraumImage from '../assets/referenz-bilder/silberweiss/flyer-design-flugblatt-druck-programm-dresden.jpg'

const images = {
  'silberweiss/flyer-design-flugblatt-druck-programm-dresden.jpg': silberweissImage,
  'gartentraum/image2.jpg': gartentraumImage
}

const ReferencePage = ({ isDarkMode, toggleDarkMode }) => {
  const { id } = useParams()
  const reference = references.find((ref) => ref.id === id)

  if (!reference) {
    return <div>Reference not found</div>
  }

  const ImageSrc = images[reference.image]

  return (
    <div className={`main ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="reference-content">
        <h1>{reference.title}</h1>
        <img src={ImageSrc} alt={reference.title} />
        <p>{reference.description}</p>
      </div>
    </div>
  )
}

export default ReferencePage
