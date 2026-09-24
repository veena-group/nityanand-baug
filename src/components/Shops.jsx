import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from '../motion'

const SHOPS = [
  { name: 'Shop 1', size: 162 },
  { name: 'Shop 1A', size: 162 },
  { name: 'Shop 2', size: 300 },
  { name: 'Shop 3', size: 390 },
  { name: 'Shop 4', size: 162 },
  { name: 'Shop 5A', size: 120 },
  { name: 'Shop 5B', size: 120 },
  { name: 'Shop 6', size: 444 },
]

function Shops() {
  const total = SHOPS.reduce((sum, item) => sum + item.size, 0)

  return (
    <section className="section section--alt shops" id="shops">
      <div className="container">
        <motion.div
          className="section-head"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            <span className="eyebrow__index">03</span>
            <span className="eyebrow__rule"></span>
            Commercial Units
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Shops on the premises
          </motion.h2>
          <motion.p className="section-lede" variants={fadeUp}>
            8 commercial shops located on the ground level of the society.
          </motion.p>
        </motion.div>

        <motion.ul
          className="simple-list"
          variants={staggerContainer(0.04)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {SHOPS.map((shop) => (
            <motion.li className="simple-list__row" key={shop.name} variants={fadeUp}>
              <span className="simple-list__name">{shop.name}</span>
              <span className="simple-list__value">{shop.size} sq. ft.</span>
            </motion.li>
          ))}
          <motion.li className="simple-list__row simple-list__row--total" variants={fadeUp}>
            <span className="simple-list__name">Total Shop Area</span>
            <span className="simple-list__value">{total.toLocaleString('en-IN')} sq. ft.</span>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  )
}

export default Shops
