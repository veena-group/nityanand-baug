import { motion } from 'framer-motion'
import { fadeUp, fadeInLeft, fadeInRight, staggerContainer, viewport } from '../motion'

const FACTS = [
  ['Registration No.', 'BOM / HSG / 942 / 1965'],
  ['Year of Construction', '1964'],
  ['Building Type', 'RCC Frame, G + 3, no lift'],
  ['CTS Nos.', '294/A, 294/1 to 106'],
  ['Village / Taluka', 'Wadvali, Kurla'],
  ['District', 'Mumbai'],
  ['GSTIN', '27AAAAN6410C1Z3'],
  ['PAN', 'AAAAN6410C'],
]

function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <motion.div
          className="section-head"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            <span className="eyebrow__index">01</span>
            <span className="eyebrow__rule"></span>
            About the Society
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            A well-established address in Chembur since 1964
          </motion.h2>
        </motion.div>

        <div className="about__grid">
          <motion.dl
            className="fact-list"
            variants={staggerContainer(0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {FACTS.map(([label, value]) => (
              <motion.div className="fact-list__row" key={label} variants={fadeInLeft}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </motion.div>
            ))}
          </motion.dl>

          <motion.div
            className="about__copy"
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.p className="about__para" variants={fadeInRight}>
              Nityanand Baug Co-operative Housing Society Ltd. stands at Plot No. 80/83,
              R.C. Marg, Chembur, Mumbai — 400 074, registered under BOM/HSG/942/1965 on CTS
              Nos. 294/A and 294/1 to 106 of Village Wadvali, Kurla Taluka.
            </motion.p>
            <motion.p className="about__para" variants={fadeInRight}>
              Built in 1964, the society is an RCC-frame structure of Ground + 3 upper floors
              without a lift facility. The residential complex comprises 316 flats spread
              across four wing types — 700, 556, 488 and 322 sq. ft., with 79 flats of each
              type — along with 8 commercial shops of varying sizes on the ground level.
            </motion.p>
            <motion.p className="about__para" variants={fadeInRight}>
              The society is a registered entity holding GSTIN 27AAAAN6410C1Z3 and PAN
              AAAAN6410C, and is governed by an elected Managing Committee that oversees
              day-to-day operations and upkeep of the premises.
            </motion.p>
            <motion.a className="about__link" href="#contact" variants={fadeInRight}>
              Contact the society office
              <svg viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
