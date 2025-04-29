function Navbar({ visible }) {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      <div
        className={`fixed top-0 left-0 w-full z-50 bg-white text-black font-encode transition-all duration-500 shadow-md
          ${visible ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}
        `}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div
            onClick={scrollToTop}
            className="text-xl font-bold text-black cursor-pointer hover:text-color_green4 transition-colors duration-300"
          >
            Artificial Nature
          </div>
          <nav className="space-x-4 ">
            <a href="#albums" className="text-black hover:text-color_green4 transition-colors duration-300">Albums</a>
            <a href="#about" className="text-black hover:text-color_green4 transition-colors duration-300">Store</a>
            <a href="#about" className="text-black hover:text-color_green4 transition-colors duration-300">Events</a>
            <a href="#about" className="text-black hover:text-color_green4 transition-colors duration-300">About</a>
          </nav>
        </div>
      </div>
    );
  }
  
  export default Navbar;
  