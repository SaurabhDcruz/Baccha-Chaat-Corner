import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Products', path: '/products' },
    {
      title: 'Categories',
      path: '/categories',
      submenu: [
        { title: 'Spicy', path: '/categories/spicy' },
        { title: 'Non-Spicy', path: '/categories/non-spicy' },
      ],
    },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-gradient-to-r from-orange-500 to-red-600"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-2xl font-bold text-white"
            >
              Baccha Chaat Corner
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <div 
                key={item.title} 
                className="relative group"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.title)}
              >
                <Link
                  to={item.path}
                  className="text-white hover:text-yellow-200 transition-colors flex items-center"
                >
                  {item.title}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
                {item.submenu && activeSubmenu === item.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2"
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    <div className="absolute -top-2 left-0 right-0 h-2" />
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.path}
                        className="block px-4 py-2 text-gray-800 hover:bg-orange-100"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden bg-orange-600"
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <div key={item.title}>
              <Link
                to={item.path}
                className="block px-3 py-2 text-white hover:bg-orange-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
              {item.submenu && (
                <div className="pl-4">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.title}
                      to={subItem.path}
                      className="block px-3 py-2 text-white hover:bg-orange-700 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;