import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from '../motion'

const COMMITTEE = [
  { name: 'Haresh R. Hinduja', role: 'Chairman', flat: '10B-3' },
  { name: 'Harpreet Singh Sethi', role: 'Hon. Secretary', flat: '8C-2' },
  { name: 'Vinay Kumar Agarwal', role: 'Treasurer', flat: '7A-2' },
  { name: 'Jaspal Singh Sethi', role: 'Committee Member', flat: '7B-2' },
  { name: 'Akshay Dilip Hinduja', role: 'Committee Member', flat: '10B-2' },
  { name: 'Sanjay Vinod Chopra', role: 'Committee Member', flat: '4A-7' },
  { name: 'Prasadrao M. Kona', role: 'Committee Member', flat: '1B-4' },
  { name: 'Pradeep Wadhwa', role: 'Committee Member', flat: '8B-1' },
  { name: 'Naresh Bangia', role: 'Committee Member', flat: '7C-8' },
  { name: 'Mamta Vilas Gupta', role: 'Committee Member', flat: '7C-2' },
  { name: 'Reshmi Haresh Dasani', role: 'Committee Member', flat: '9B-2' },
  { name: 'Santosh Rajguru', role: 'Committee Member', flat: '1B-7' },
  { name: 'Smita Vijay Pawar', role: 'Committee Member', flat: '3B-9' },
  { name: 'Dinesh Chang', role: 'Committee Member', flat: '5C-5' },
  { name: 'Sanjay K Gupta', role: 'Committee Member', flat: '9C-10' },
]

function Committee() {
  return (
    <section className="section committee" id="committee">
      <div className="container">
        <motion.div
          className="section-head"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            <span className="eyebrow__index">05</span>
            <span className="eyebrow__rule"></span>
            Our Team
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Managing Committee
          </motion.h2>
          <motion.p className="section-lede" variants={fadeUp}>
            The elected Managing Committee overseeing the society&rsquo;s affairs.
          </motion.p>
        </motion.div>

        <motion.ul
          className="directory"
          variants={staggerContainer(0.03)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {COMMITTEE.map((member, i) => (
            <motion.li className="directory__row" key={member.flat} variants={fadeUp}>
              <span className="directory__index">{String(i + 1).padStart(2, '0')}</span>
              <span className="directory__name">{member.name}</span>
              <span className="directory__role">{member.role}</span>
              <span className="directory__flat">Flat {member.flat}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default Committee
