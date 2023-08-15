import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

import Header from './Header';
import Footer from './Footer';


type LayoutProps = {
  children: ReactNode;
};

const pageTransitionVariants = {
  initial: {
    opacity: 0,
    y: -10,
  },
  enter: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 10,
  },
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box transition="0.5s ease-out">
      <Box height="100vh">
        <Header />
        <Box as="main">
          <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageTransitionVariants}
          >
            {children}
          </motion.div>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
