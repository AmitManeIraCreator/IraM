import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import logo from '@/assets/logo.jpg';

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'About Company', path: '/about-company' },
    { title: 'Features', path: '/features' },
    { title: 'Contact', path: '/contact' },
    { title: 'FAQ', path: '/faq' },
    { title: 'Terms & Conditions', path: '/terms' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="IRAM Logo" className="h-12 w-auto" />
        </Link>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button 
              className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </SheetTrigger>
          
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`text-lg py-3 px-4 rounded-lg transition-all hover:bg-accent/20 hover:translate-x-1 ${
                    location.pathname === item.path
                      ? 'bg-accent/30 text-primary font-medium'
                      : 'text-foreground/80'
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
