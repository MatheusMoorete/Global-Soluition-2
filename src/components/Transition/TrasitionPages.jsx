import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const transitions = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const TransitionPages = ({ children }) => {
  return (
    <motion.div
      variants={transitions}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

TransitionPages.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TransitionPages;
