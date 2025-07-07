import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Users, ChefHat, ArrowRight, Utensils, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/lib/utils.tsx";

const Index = () => {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-golden/5 to-skyblue/5">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated SVG Wave Background */}
        <div className="absolute inset-0 -z-10 pointer-events-none select-none">
          <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-wave-slow">
            <path fill="#E0F7FA" fillOpacity="0.6" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,186.7C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            <path fill="#B2EBF2" fillOpacity="0.5" d="M0,224L60,208C120,192,240,160,360,154.7C480,149,600,171,720,186.7C840,203,960,213,1080,197.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Animated Site Name */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-golden via-teal to-skyblue mb-6 animate-pop-bounce drop-shadow-lg flex items-center justify-center gap-4">
              <span className="inline-block animate-gradient-move">{t('siteName')}</span>
              <span className="inline-block animate-spin-slow">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" stroke="#FFD700" strokeWidth="4" fill="#E0F7FA" />
                  <path d="M20 8v8l6 3" stroke="#00BFAE" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-teal/80 mb-4 animate-fade-in">
              {t('siteTagline')}
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
              {t('siteDescription')}
            </p>
            
            {/* Main CTA Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <Link to="/find-food" className="group">
                <Card className="card-hover bg-white/80 backdrop-blur-sm border-2 border-golden/30 hover:border-golden group-hover:bg-golden/5">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 gradient-golden rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-scale">
                      <MapPin className="w-10 h-10 text-teal" />
                    </div>
                    <h3 className="text-2xl font-bold text-teal mb-4">{t('findFood')}</h3>
                    <p className="text-teal/70 mb-6">
                      {t('findFoodDesc')}
                    </p>
                    <Button className="btn-golden group-hover:shadow-xl">
                      {t('findFoodBtn')}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:animate-bounce-arrow" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/restaurant-registration" className="group">
                <Card className="card-hover bg-white/80 backdrop-blur-sm border-2 border-teal/30 hover:border-teal group-hover:bg-teal/5">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 gradient-teal rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-scale">
                      <ChefHat className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-teal mb-4">{t('registerRestaurant')}</h3>
                    <p className="text-teal/70 mb-6">
                      {t('registerRestaurantDesc')}
                    </p>
                    <Button className="btn-teal group-hover:shadow-xl">
                      {t('registerRestaurantBtn')}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:animate-bounce-arrow" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-teal mb-12">{t('howItWorks')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 gradient-golden rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-scale">
                <MapPin className="w-8 h-8 text-teal" />
              </div>
              <h3 className="font-semibold text-teal mb-2">{t('findLocation')}</h3>
              <p className="text-sm text-teal/70">{t('findLocationDesc')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 gradient-teal rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-scale">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-teal mb-2">{t('seeAvailableFood')}</h3>
              <p className="text-sm text-teal/70">{t('seeAvailableFoodDesc')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 gradient-sky rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-scale">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-teal mb-2">{t('checkTiming')}</h3>
              <p className="text-sm text-teal/70">{t('checkTimingDesc')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 gradient-golden rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-scale">
                <Heart className="w-8 h-8 text-teal fill-current" />
              </div>
              <h3 className="font-semibold text-teal mb-2">{t('getYourMeal')}</h3>
              <p className="text-sm text-teal/70">{t('getYourMealDesc')}</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
