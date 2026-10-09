import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, wordReveal, wordRevealChild, tapHover } from '../motion'
import MotionLink from './MotionLink'
import CountUp from './CountUp'

const TITLE_WORDS = ['Nityanand', 'Baug']

const STATS = [
  { num: 1964, label: 'Established' },
  { num: 316, label: 'Flats' },
  { num: 8, label: 'Shops' },
  { num: 4, label: 'Floors (G+3)' },
]

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <img className="hero__bg-photo" src="/images/gallery/building-3.jpg" alt="" />
        <div className="hero__bg-overlay"></div>
      </div>
      <div className="container hero__inner">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero__eyebrow" variants={fadeUp}>
            <span className="hero__eyebrow-rule"></span>
            Est. 1964 &nbsp;&middot;&nbsp; Chembur, Mumbai
            <span className="hero__eyebrow-rule"></span>
          </motion.p>

          <motion.h1 className="hero__title" variants={wordReveal} initial="hidden" animate="visible">
            {TITLE_WORDS.map((word, i) => (
              <span key={i} className="hero__word-wrap">
                <motion.span variants={wordRevealChild}>{word}</motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p className="hero__subtitle" variants={fadeUp}>
            Co-operative Housing Society Ltd.
          </motion.p>

          <motion.p className="hero__regn" variants={fadeUp}>
            Reg. No. BOM / HSG / 942 / 1965 &nbsp;&middot;&nbsp; CTS Nos. 294/A, 294/1&ndash;106,
            Village Wadvali
          </motion.p>

          <motion.p className="hero__text" variants={fadeUp}>
            Plot No. 80/83, R.C. Marg — an RCC-frame residence of Ground + 3 upper floors,
            built in 1964 and home to 316 flats and 8 commercial shops in the heart of Chembur.
          </motion.p>

          <motion.div className="hero__actions" variants={fadeUp}>
            <MotionLink className="btn btn--accent" to="/login" {...tapHover}>
              Member Login
            </MotionLink>
            <motion.a className="btn btn--ghost-dark" href="#about" {...tapHover}>
              Read More
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>

        <motion.div
          className="hero__stats"
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate="visible"
        >
          {STATS.map((stat) => (
            <motion.div key={stat.label} className="hero__stat" variants={fadeUp}>
              <span className="hero__stat-num">
                <CountUp end={stat.num} duration={stat.num > 100 ? 2000 : 1200} />
              </span>
              <span className="hero__stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
