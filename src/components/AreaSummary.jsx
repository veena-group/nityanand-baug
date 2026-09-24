import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from '../motion'

const COLUMNS = [
  { range: 'CTS 294/A, 294/1 – 294/36', total: 12474.1 },
  { range: 'CTS 294/37 – 294/71', total: 1462.8 },
  { range: 'CTS 294/72 – 294/106', total: 1411.9 },
]

function AreaSummary() {
  const grandTotal = COLUMNS.reduce((sum, item) => sum + item.total, 0)

  return (
    <section className="section registration" id="registration">
      <div className="container">
        <motion.div
          className="section-head"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            <span className="eyebrow__index">04</span>
            <span className="eyebrow__rule"></span>
            Property Registration Card
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Summary of registered plot area
          </motion.h2>
          <motion.p className="section-lede" variants={fadeUp}>
            Consolidated from the official Property Registration Card across CTS Nos.
            294/A and 294/1 to 106, Village Wadvali.
          </motion.p>
        </motion.div>

        <motion.div
          className="reg-card"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="reg-card__columns">
            {COLUMNS.map((col) => (
              <motion.div className="reg-card__col" key={col.range} variants={fadeUp}>
                <span className="reg-card__col-total">{col.total.toLocaleString('en-IN')}</span>
                <span className="reg-card__col-label">{col.range}</span>
              </motion.div>
            ))}
          </div>
          <motion.div className="reg-card__grand" variants={fadeUp}>
            <span className="reg-card__grand-num">{grandTotal.toLocaleString('en-IN')}</span>
            <span className="reg-card__grand-label">Total Area as per PRC (sq. yards)</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AreaSummary
