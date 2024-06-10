export function customFunction() {
  console.log('Diese Funktion wurde aus dem benutzerdefinierten Skript aufgerufen.')
  console.log('DOM wurde geladen.')

  const rectMask1 = document.getElementById('rect-mask1')
  const rectMask2 = document.getElementById('rect-mask2')

  const windowHeight = window.innerHeight
  const maxScroll = 800 // Maximales Scrollen, bei dem die Breite des Rechtecks vollständig ist
  const startScroll = 0 // Startposition, bei der die Breite des Rechtecks beginnt zu ändern

  rectMask1.setAttribute('width', '200px')
  rectMask2.setAttribute('width', '200px')

  window.addEventListener('scroll', function () {
    // Aktuellen Scrollwert abrufen
    const scrollY = window.scrollY || window.pageYOffset

    // Berechnen Sie den Prozentsatz des gescrollten Bereichs, beginnend bei der Startposition
    const scrollPercentage = Math.max((scrollY - startScroll) / (maxScroll - startScroll), 0)

    // Berechnen Sie die neue Breite der Masken basierend auf dem gescrollten Bereich
    const newWidth = 200 + scrollPercentage * (windowHeight - 1) // -1, um die 1px Lücke zu kompensieren

    // Setzen Sie die neue Breite der Masken
    rectMask1.setAttribute('width', newWidth)
    rectMask2.setAttribute('width', newWidth)
  })

  // Definiere Observer-Funktion für Fade-In-Animation
  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-animation')
      }
    })
  })

  // Definiere Observer-Funktion für Scale-Up-Animation
  const scaleUpObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scale-animation')
      }
    })
  })

  // Elemente für Fade-In-Animation
  const fadeInElements = ['brief', 'image', 'colors', 'cursor', 'visitenkarte', 'programming', 'dev', 'window-2-bg-yellow', 'window-1-bg-pink']
  fadeInElements.forEach((id) => {
    const element = document.getElementById(id)
    if (element) {
      fadeInObserver.observe(element)
    }
  })

  const kugel = document.getElementById('gruene-kugel')
  const webdesignSection = document.querySelector('#webdesign')
  let lastScrollTop = 0

  window.addEventListener('scroll', () => {
    const rect = kugel.getBoundingClientRect()

    // Ensure the animation only happens when the section is visible
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const st = window.pageYOffset || document.documentElement.scrollTop

      // Calculate the movement based on the scroll direction
      const movement = (st - lastScrollTop) * 0.05 // Adjust the multiplier as needed for the desired speed
      const currentTransform = kugel.style.transform.match(/translateX\((-?\d+\.?\d*)px\)/)
      const currentX = currentTransform ? parseFloat(currentTransform[1]) : 0

      kugel.style.transform = `translateX(${currentX + movement}px)`

      lastScrollTop = st
    }
  })

  // Elemente für Scale-Up-Animation
  const scaleUpElements = ['schrift']
  scaleUpElements.forEach((id) => {
    const element = document.getElementById(id)
    if (element) {
      scaleUpObserver.observe(element)
    }
  })

  // Event-Listener für Mouseover-Ereignis auf dem SVG-Element hinzufügen
  const svgElement = document.getElementById('cursor')
  if (svgElement) {
    svgElement.addEventListener('mouseover', function (event) {
      // Mausposition relativ zum SVG-Element erhalten
      const mouseX = event.clientX - svgElement.getBoundingClientRect().left
      const mouseY = event.clientY - svgElement.getBoundingClientRect().top

      // Position des Cursor-Elements aktualisieren
      const cursorElement = document.getElementById('cursor')
      if (cursorElement) {
        cursorElement.setAttribute('transform', 'scale(10)')
      }
    })
  }

  // Farbzuweisungen für Mouseover-Interaktionen
  const colorMappings = [
    { color: 'green', offset: -100, elements: ['image-bg-green', 'window-1-bg-green', 'window-2-bg-green'] },
    { color: 'pink', offset: -50, elements: ['image-bg-pink', 'window-1-bg-pink', 'window-2-bg-pink'] },
    { color: 'yellow', offset: 0, elements: ['image-bg-yellow', 'window-1-bg-yellow', 'window-2-bg-yellow'] }
  ]

  // Funktion zum Zurücksetzen der Farben
  function resetColors() {
    colorMappings.forEach((mapping) => {
      mapping.elements.forEach((elementId) => {
        const element = document.getElementById(elementId)
        if (element) {
          element.style.opacity = '0.01'
        }
      })
      const colorBox = document.getElementById(`${mapping.color}-color`)
      if (colorBox) {
        colorBox.style.transform = 'scale(1)'
      }
    })
  }

  // Mouseover-Events für Farbwechsel
  colorMappings.forEach((mapping) => {
    const colorBox = document.getElementById(`${mapping.color}-color`)
    if (colorBox) {
      colorBox.addEventListener('mouseover', () => {
        resetColors()
        mapping.elements.forEach((elementId) => {
          const element = document.getElementById(elementId)
          if (element) {
            element.style.opacity = '1'
          }
        })
        colorBox.style.transform = 'scale(1.2)'
        const cursor = document.getElementById('corsor-color')
        if (cursor) {
          cursor.style.transform = `translateX(${mapping.offset}px)`
        }
      })
    }
  })

  // Linien und Wörter für die "writeIn"-Animation
  const lines = [
    ['word-1_5', 'word-2_5'],
    ['word-1_4', 'word-2_4', 'word-3_2'],
    ['word-1_3', 'word-2_3'],
    ['word-1_2', 'word-2_2', 'word3'],
    ['word-1', 'word-2', 'word-3']
  ]

  const developElement = document.getElementById('develop')

  const textObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          lines.forEach((line, lineIndex) => {
            line.forEach((wordId, wordIndex) => {
              const word = document.getElementById(wordId)
              if (word) {
                word.classList.add('hidden')
                setTimeout(() => {
                  word.classList.remove('hidden')
                  word.style.animation = `writeIn 0.3s ease-out forwards`
                  word.style.transformOrigin = 'left'
                }, lineIndex * 600 + wordIndex * 300) // Zeitversatz zwischen den Zeilen und Wörtern
              }
            })
          })
          textObserver.unobserve(developElement) // Stop observing after the animation starts
        }
      })
    },
    { threshold: 0.1 }
  )

  textObserver.observe(developElement)

  // Balken für die "growUp"-Animation
  const balken = ['purple-color', 'pink-balken', 'yellow-balken', 'green-balken']
  const balkenContainer = document.getElementById('balken')

  const balkenObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          balken.forEach((balkenId, index) => {
            const balkenElement = document.getElementById(balkenId)
            if (balkenElement) {
              setTimeout(() => {
                balkenElement.style.animation = `growUp 0.5s ease-out forwards`
              }, index * 500) // Zeitversatz zwischen den Balken
            }
          })
          balkenObserver.unobserve(balkenContainer) // Stop observing after the animation starts
        }
      })
    },
    { threshold: 0.1 }
  )

  balkenObserver.observe(balkenContainer)

  // Lupe movement
  const lupe = document.getElementById('lupe')
  const seo = document.getElementById('seo')

  document.addEventListener('mousemove', function (event) {
    const rect = seo.getBoundingClientRect()
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0

    if (isVisible) {
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Calculate the offset for the lupe
      const offsetX = (event.clientX - centerX) * 0.1 // Adjust multiplier for sensitivity
      const offsetY = (event.clientY - centerY) * 0.1 // Adjust multiplier for sensitivity

      lupe.style.transform = `translate(${offsetX}px, ${offsetY}px)`
    }
  })

  const linieElement = document.getElementById('linie')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          linieElement.style.visibility = 'visible' // Machen Sie die Linie sichtbar
          linieElement.style.animation = 'drawLine 3s ease-in-out forwards' // Fügen Sie die Animation hinzu
          observer.unobserve(linieElement) // Stoppen Sie die Beobachtung
        }
      })
    },
    { threshold: 0.1 }
  )

  observer.observe(linieElement)
}
