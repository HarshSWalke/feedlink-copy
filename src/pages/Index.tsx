
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Users, ChefHat, ArrowRight, Utensils, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-golden/5 to-skyblue/5">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-teal mb-6 animate-fade-in">
              FeedLink
            </h1>
            <p className="text-2xl md:text-3xl text-teal/80 mb-4 animate-fade-in">
              Bridging Hunger with Kindness
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
              Connecting restaurants with people in need through leftover food sharing. 
              Every meal matters, every person counts.
            </p>
            
            {/* Main CTA Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Link to="/find-food" className="group">
                <Card className="card-hover bg-white/80 backdrop-blur-sm border-2 border-golden/30 hover:border-golden group-hover:bg-golden/5">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 gradient-golden rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-scale">
                      <MapPin className="w-10 h-10 text-teal" />
                    </div>
                    <h3 className="text-2xl font-bold text-teal mb-4">Find Food Near Me</h3>
                    <p className="text-teal/70 mb-6">
                      Locate nearby restaurants offering free leftover food
                    </p>
                    <Button className="btn-golden group-hover:shadow-xl">
                      Find Food
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
                    <h3 className="text-2xl font-bold text-teal mb-4">Register Your Restaurant</h3>
                    <p className="text-teal/70 mb-6">
                      Share your leftover food with those who need it most
                    </p>
                    <Button className="btn-teal group-hover:shadow-xl">
                      Register Now
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:animate-bounce-arrow" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/volunteer-dashboard" className="group">
                <Card className="card-hover bg-white/80 backdrop-blur-sm border-2 border-skyblue/30 hover:border-skyblue group-hover:bg-skyblue/5">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 gradient-sky rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-scale">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-teal mb-4">Volunteer to Help</h3>
                    <p className="text-teal/70 mb-6">
                      Join our community of volunteers making a difference
                    </p>
                    <Button className="btn-sky group-hover:shadow-xl">
                      Volunteer
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
          <h2 className="text-4xl font-bold text-center text-teal mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 gradient-golden rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-scale">
                <MapPin className="w-8 h-8 text-teal" />
              </div>
              <h3 className="font-semibold text-teal mb-2">Find Location</h3>
              <p className="text-sm text-teal/70">Allow location or select from map</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 gradient-teal rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-scale">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-teal mb-2">See Available Food</h3>
              <p className="text-sm text-teal/70">Browse nearby restaurant offerings</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 gradient-sky rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-scale">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-teal mb-2">Check Timing</h3>
              <p className="text-sm text-teal/70">View pickup windows and availability</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 gradient-golden rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-scale">
                <Heart className="w-8 h-8 text-teal fill-current" />
              </div>
              <h3 className="font-semibold text-teal mb-2">Get Your Meal</h3>
              <p className="text-sm text-teal/70">Visit restaurant and collect food</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
