function Footer() {
    return (
      <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white text-center p-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Pyxs Jastip. All rights reserved.
        </p>
      </footer>
    );
  }
  
  export default Footer;
