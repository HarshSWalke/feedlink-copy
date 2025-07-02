
import { Link, useLocation } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { Heart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-golden/20 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {!isHomePage && (
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-teal hover:text-golden hover:bg-golden/10">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
            )}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 gradient-golden rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-6 h-6 text-teal fill-current" />
              </div>
              <h1 className="text-2xl font-bold text-teal group-hover:text-golden transition-colors duration-300">
                FeedLink
              </h1>
            </Link>
          </div>
          
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
};

export default Header;
