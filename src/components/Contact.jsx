import { motion } from 'framer-motion'
import { fadeUp, fadeInLeft, fadeInRight, staggerContainer, viewport, tapHover } from '../motion'

const DETAILS = [
  ['Email', 'nityanandchs@gmail.com', 'mailto:nityanandchs@gmail.com'],
  ['Address', 'Nityanand Baug, Plot No 80/83, R.C. Marg, Chembur, Mumbai - 400 074.', null],
  ['Registration', 'BOM / HSG / 942 / 1965', null],
  ['Office Hours', 'Mon – Sat, 10 am – 6 pm', null],
]

function Contact() {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <section className="contact" id="contact">
      <div className="contact__panel contact__panel--dark">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            <span className="eyebrow__index">07</span>
            <span className="eyebrow__rule"></span>
            Contact
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Reach the society office
          </motion.h2>
          <motion.p className="contact__lede" variants={fadeInLeft}>
            For maintenance queries, NOC requests, documentation or any other assistance,
            reach the society office using the details below.
          </motion.p>

          <dl className="contact__details">
            {DETAILS.map(([label, value, href]) => (
              <motion.div className="contact__detail-row" key={label} variants={fadeInLeft}>
                <dt>{label}</dt>
                <dd>{href ? <a href={href}>{value}</a> : value}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>

      <div className="contact__panel contact__panel--light">
        <motion.form
          className="contact__form"
          onSubmit={handleSubmit}
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h3 className="contact__form-title">Send an enquiry</h3>
          <div className="contact__row">
            <label className="contact__field">
              <span>Your name *</span>
              <input type="text" placeholder="Full name" required />
            </label>
            <label className="contact__field">
              <span>Email address *</span>
              <input type="email" placeholder="you@example.com" required />
            </label>
          </div>
          <label className="contact__field">
            <span>Flat / Shop no.</span>
            <input type="text" placeholder="e.g. 10B-3" />
          </label>
          <label className="contact__field">
            <span>Message *</span>
            <textarea rows="4" placeholder="How can the society office help you?" required></textarea>
          </label>
          <motion.button type="submit" className="btn btn--accent contact__submit" {...tapHover}>
            Send Enquiry
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
