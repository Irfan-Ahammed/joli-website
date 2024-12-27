import React from 'react'
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    Hello Joli!
  </motion.div>
  )
}

export default App