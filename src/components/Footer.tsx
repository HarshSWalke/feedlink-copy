
import { Heart, Mail, Shield, Info } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-teal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="w-8 h-8 gradient-golden rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-teal fill-current" />
              </div>
              <h3 className="text-xl font-bold">FeedLink</h3>
            </div>
            <p className="text-teal-200">
              Bridging hunger with kindness, one meal at a time.
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="flex items-center justify-center gap-2 text-teal-200 hover:text-golden transition-colors">
                <Info className="w-4 h-4" />
                About Us
              </a>
              <a href="#contact" className="flex items-center justify-center gap-2 text-teal-200 hover:text-golden transition-colors">
                <Mail className="w-4 h-4" />
                Contact
              </a>
              <a href="#privacy" className="flex items-center justify-center gap-2 text-teal-200 hover:text-golden transition-colors">
                <Shield className="w-4 h-4" />
                Privacy Policy
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4">Impact</h4>
            <div className="space-y-2">
              <p className="text-teal-200">
                <span className="text-golden font-bold text-lg">1,247</span><br />
                Meals Shared
              </p>
              <p className="text-teal-200">
                <span className="text-golden font-bold text-lg">156</span><br />
                Restaurants Registered
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-teal-600 mt-8 pt-8 text-center text-teal-200">
          <p>&copy; 2024 FeedLink. Made with ❤️ for a better tomorrow.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
