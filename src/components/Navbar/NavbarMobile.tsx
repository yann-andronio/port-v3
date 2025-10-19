import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from "react-scroll";
import type { NavigationMenuesI } from './Navbar'; 

interface NavbarMobileI{
    NavigationMenues: NavigationMenuesI[]
    closeMenu: () => void 
}

export default function NavbarMobile({ NavigationMenues, closeMenu }: NavbarMobileI) {

     const { t } = useTranslation();
  return (
     <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }} 
          className="md:hidden mt-2 mx-4 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-xl border border-white/10 overflow-hidden max-h-[80vh] overflow-y-auto"
        >
          <ul className="flex flex-col items-center gap-3 py-3">
            {NavigationMenues.map((item, index) => (
              <ScrollLink
                key={index}
                to={item.link}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={closeMenu} 
                className="text-gray-800 dark:text-gray-200 text-base font-medium hover:text-blue-600 dark:hover:text-yellow-400 transition-colors duration-300 py-1 w-full text-center"
              >
                {t(item.name)}
              </ScrollLink>
            ))}
          </ul>
        </motion.nav>
  )
}