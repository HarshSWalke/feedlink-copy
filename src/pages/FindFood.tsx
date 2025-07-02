
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Utensils, Navigation, Phone, ArrowRight } from "lucide-react";
import { toast } from "sonner";

// Mock data for demonstration
const mockRestaurants = [
  {
    id: 1,
    name: "Maharaja Restaurant",
    distance: "0.2 km",
    foodType: "Indian Thali",
    quantity: "5 portions",
    pickupTime: "7:00 PM - 8:30 PM",
    status: "Available Now",
    statusType: "available",
    address: "MG Road, Pune",
    phone: "+91 98765 43210",
    walkInFriendly: true
  },
  {
    id: 2,
    name: "Pizza Corner",
    distance: "0.5 km",
    foodType: "Pizza & Bread",
    quantity: "3 portions",
    pickupTime: "8:00 PM - 9:00 PM",
    status: "Expires in 45 min",
    statusType: "expiring",
    address: "FC Road, Pune",
    phone: "+91 98765 43211",
    walkInFriendly: true
  },
  {
    id: 3,
    name: "South Tadka",
    distance: "0.8 km",
    foodType: "South Indian",
    quantity: "8 portions",
    pickupTime: "6:30 PM - 8:00 PM",
    status: "Available Now",
    statusType: "available",
    address: "Koregaon Park, Pune",
    phone: "+91 98765 43212",
    walkInFriendly: false
  }
];

const FindFood = () => {
  const [location, setLocation] = useState<string>("");
  const [restaurants, setRestaurants] = useState(mockRestaurants);
  const [locationGranted, setLocationGranted] = useState(false);

  const requestLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation("Current Location");
          setLocationGranted(true);
          toast.success("Location accessed successfully!");
        },
        (error) => {
          toast.error("Unable to access location. Please enable location services.");
        }
      );
    } else {
      toast.error("Geolocation is not supported by this browser.");
    }
  };

  const getDirections = (address: string) => {
    const encoded = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/${encoded}`, '_blank');
  };

  const callRestaurant = (phone: string) => {
    window.open(`tel:${phone}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-golden/5 to-skyblue/5">
      <Header />
      
      {/* Tutorial Bar */}
      <div className="bg-golden/20 border-b border-golden/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 flex-wrap text-center">
            <div className="flex items-center gap-2 text-teal font-medium">
              <MapPin className="w-5 h-5" />
              Find Location
            </div>
            <ArrowRight className="w-4 h-4 text-teal animate-bounce-arrow" />
            <div className="flex items-center gap-2 text-teal font-medium">
              <Utensils className="w-5 h-5" />
              See Food
            </div>
            <ArrowRight className="w-4 h-4 text-teal animate-bounce-arrow" />
            <div className="flex items-center gap-2 text-teal font-medium">
              <Navigation className="w-5 h-5" />
              Walk to Restaurant
            </div>
            <ArrowRight className="w-4 h-4 text-teal animate-bounce-arrow" />
            <div className="flex items-center gap-2 text-teal font-medium">
              <Clock className="w-5 h-5" />
              Get Your Meal
            </div>
          </div>
        </div>
      </div>

      {/* Location Section */}
      {!locationGranted && (
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-golden/30">
              <CardContent className="p-8">
                <MapPin className="w-16 h-16 text-golden mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-teal mb-4">Find Food Near You</h2>
                <p className="text-teal/70 mb-6">
                  Allow location access to find the nearest restaurants with available food
                </p>
                <Button 
                  onClick={requestLocation}
                  className="btn-golden text-lg py-6 px-8"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Allow Location Access
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Restaurant Listings */}
      {locationGranted && (
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-teal mb-2">Food Available Near You</h2>
              <p className="text-teal/70 flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                Current Location • {restaurants.length} restaurants found
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {restaurants.map((restaurant) => (
                <Card key={restaurant.id} className="card-hover bg-white/90 backdrop-blur-sm border-2 border-golden/30 hover:border-golden">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-teal">{restaurant.name}</h3>
                      <Badge 
                        variant={restaurant.statusType === 'available' ? 'default' : 'destructive'}
                        className={restaurant.statusType === 'available' 
                          ? 'bg-green-500 hover:bg-green-600' 
                          : 'bg-orange-500 hover:bg-orange-600'
                        }
                      >
                        {restaurant.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-teal/70">
                        <Utensils className="w-4 h-4" />
                        <span className="font-medium">{restaurant.foodType}</span>
                        <span className="text-golden font-bold">• {restaurant.quantity}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-teal/70">
                        <Clock className="w-4 h-4" />
                        <span>{restaurant.pickupTime}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-teal/70">
                        <MapPin className="w-4 h-4" />
                        <span>{restaurant.address} • {restaurant.distance}</span>
                      </div>
                      
                      {restaurant.walkInFriendly && (
                        <Badge variant="outline" className="border-green-300 text-green-700">
                          Walk-in Friendly (No ID Required)
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button 
                        onClick={() => getDirections(restaurant.address)}
                        className="btn-golden flex-1"
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        Get Directions
                      </Button>
                      
                      <Button 
                        onClick={() => callRestaurant(restaurant.phone)}
                        variant="outline" 
                        size="sm"
                        className="border-2 border-teal text-teal hover:bg-teal hover:text-white"
                      >
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {restaurants.length === 0 && locationGranted && (
              <div className="text-center py-12">
                <Utensils className="w-16 h-16 text-teal/30 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-teal mb-2">No Food Available Right Now</h3>
                <p className="text-teal/70">Check back later or try expanding your search area.</p>
              </div>
            )}
          </div>
        </section>
      )}
      
      <Footer />
    </div>
  );
};

export default FindFood;
