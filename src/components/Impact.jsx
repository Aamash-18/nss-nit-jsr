import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

export default function Impact() {
    return (
        <section className="text-white py-16 px-4 md:px-20 bg-gradient-to-b from-teal-950 to-slate-950">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* Left - Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                        Creating Lasting Change<br />
                        <span className="text-blue-400">Through Collective Action</span>
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Since our journey began, NSS NIT Jamshedpur has been a beacon of hope, empowering communities
                        through compassionate service and impactful initiatives.
                    </p>
                    <p className="text-gray-400 mt-4">
                        From promoting education and healthcare to championing sustainability and disaster relief,
                        our dedicated volunteers work tirelessly to make a meaningful difference.
                    </p>
                </motion.div>

                {/* Right - Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center"
                >
                    <StatBox number={50} label="Events Held" />
                    <StatBox number={200} label="Volunteers Engaged" />
                    <StatBox number={10000} label="Lives Touched" suffix="+" />
                </motion.div>
            </div>
        </section>
    );
}

function StatBox({ number, label, suffix }) {
    return (
        <div className="bg-teal-900 hover:bg-teal-800 transition-colors p-6 rounded-xl shadow-lg">
            <h3 className="text-4xl font-bold text-white mb-1">
                <CountUp end={number} duration={2} suffix={suffix || '+'} />
            </h3>
            <p className="text-blue-300 text-sm tracking-wide">{label}</p>
        </div>
    );
}
