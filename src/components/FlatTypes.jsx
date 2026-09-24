import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from '../motion'

const FLAT_TYPES = [
  { size: 700, count: 79, label: 'Type A', area: 'a', big: true },
  { size: 556, count: 79, label: 'Type B', area: 'b', big: false },
  { size: 488, count: 79, label: 'Type C', area: 'c', big: false },
  { size: 322, count: 79, label: 'Type D', area: 'd', big: false },
]

function FlatTypes() {
  const total = FLAT_TYPES.reduce((sum, item) => sum + item.count, 0)

  return (
    <section className="section flats" id="flats">
      <div className="container">
        <motion.div
          className="section-head"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            <span className="eyebrow__index">02</span>
            <span className="eyebrow__rule"></span>
            Residential Flats
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Type of flats
          </motion.h2>
          <motion.p className="section-lede" variants={fadeUp}>
            316 residential flats spread evenly across four wing types, 79 flats each.
          </motion.p>
        </motion.div>

        <motion.div
          className="bento"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {FLAT_TYPES.map((item) => (
            <motion.div
              className={`bento__card bento__card--${item.area}${item.big ? ' bento__card--big' : ''}`}
              key={item.label}
              variants={fadeUp}
            >
              <span className="bento__label">{item.label}</span>
              <span className="bento__size">
                {item.size}
                <em>sq. ft.</em>
              </span>
              <span className="bento__count">{item.count} flats</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="stamp"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className="stamp__ring">
            <span className="stamp__num">{total}</span>
            <span className="stamp__label">Total Flats</span>
          </span>
        </motion.div>
      </div>
    </section>
  )
}

export default FlatTypes
