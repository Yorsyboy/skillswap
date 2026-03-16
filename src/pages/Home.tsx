import { motion } from "framer-motion"

const Home = () => {
  return (
    <div className="p-10 text-center">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold"
      >
        Welcome to SkillSwap
      </motion.h1>

      <p className="mt-4 text-gray-600">
        Exchange skills with people around the world.
      </p>
    </div>
  )
}

export default Home