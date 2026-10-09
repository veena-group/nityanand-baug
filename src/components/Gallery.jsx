import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from '../motion'

const PHOTOS = [
  { src: '/images/gallery/building-1.jpg', alt: 'Nityanand Baug building 7C, front view' },
  { src: '/images/gallery/building-2.jpg', alt: 'Nityanand Baug building, front elevation with balconies' },
  { src: '/images/gallery/building-3.jpg', alt: 'Nityanand Baug buildings along the internal road' },
  { src: '/images/gallery/building-4.jpg', alt: 'Nityanand Baug building 2A, front view' },
]

function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <motion.div
          className="section-head"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            <span className="eyebrow__index">06</span>
            <span className="eyebrow__rule"></span>
            Gallery
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Life at Nityanand Baug
          </motion.h2>
        </motion.div>

        <motion.div
          className="gallery__grid"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {PHOTOS.map((photo) => (
            <motion.figure className="gallery__photo" key={photo.src} variants={fadeUp}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
