
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin, Clock, Navigation, Heart, Star } from "lucide-react";
import { toast } from "sonner";

const VolunteerDashboard = () => {
  const [availablePickups, setAvailablePickups] = useState([
    {
      id: 1,
      restaurant: "Maharaja Restaurant",
      address: "MG Road, Pune",
      foodType: "Indian Thali",
      quantity: "5 portions",
      pickupTime: "7:30 PM",
      distance: "1.2 km",
      urgency: "high"
    },
    {
      id: 2,
      restaurant: "Pizza Corner",
      address: "FC Road, Pune",
      foodType: "Pizza & Bread",
      quantity: "3 portions",
      pickupTime: "8:00 PM",
      distance: "2.1 km",
      urgency: "medium"
    }
  ]);

  const [volunteerStats] = useState({
    totalDeliveries: 23,
    thisWeek: 8,
    rating: 4.8,
    badges: ["Reliable Helper", "Speed Demon", "Community Champion"]
  });

  const assignPickup = (pickupId: number) => {
    setAvailablePickups(prev => prev.filter(pickup => pickup.id !== pickupId));
    toast.success("Pickup assigned to you! Check your assigned tasks.");
  };

  const planRoute = () => {
    toast.info("Opening route planner for multiple pickups...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-golden/5 to-skyblue/5">
      <Header />
      
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Welcome Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 gradient-sky rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-teal mb-4">Volunteer Dashboard</h1>
            <p className="text-teal/70 text-lg">
              Thank you for being a FeedLink hero! Help deliver food to those in need.
            </p>
          </div>

          {/* Volunteer Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gradient-to-r from-golden/20 to-golden/10 border-2 border-golden/30">
              <CardContent className="p-6 text-center">
                <Heart className="w-8 h-8 text-golden mx-auto mb-2 fill-current" />
                <p className="text-3xl font-bold text-teal">{volunteerStats.totalDeliveries}</p>
                <p className="text-teal/70 font-medium">Total Deliveries</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-teal/20 to-teal/10 border-2 border-teal/30">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-teal mx-auto mb-2" />
                <p className="text-3xl font-bold text-teal">{volunteerStats.thisWeek}</p>
                <p className="text-teal/70 font-medium">This Week</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-skyblue/20 to-skyblue/10 border-2 border-skyblue/30">
              <CardContent className="p-6 text-center">
                <Star className="w-8 h-8 text-skyblue mx-auto mb-2 fill-current" />
                <p className="text-3xl font-bold text-teal">{volunteerStats.rating}</p>
                <p className="text-teal/70 font-medium">Rating</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-green-500/20 to-green-400/10 border-2 border-green-400/30">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-xl font-bold text-teal">Hero</p>
                <p className="text-teal/70 font-medium">Current Level</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Available Pickups */}
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-golden/30">
              <CardHeader>
                <CardTitle className="text-2xl text-teal flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Available Pickups
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {availablePickups.map((pickup) => (
                    <div key={pickup.id} className="p-4 bg-white rounded-lg border-2 border-golden/20 hover:border-golden/50 transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-teal">{pickup.restaurant}</h4>
                        <Badge 
                          variant={pickup.urgency === 'high' ? 'destructive' : 'default'}
                          className={pickup.urgency === 'high' 
                            ? 'bg-orange-500 hover:bg-orange-600' 
                            : 'bg-green-500 hover:bg-green-600'
                          }
                        >
                          {pickup.urgency === 'high' ? 'Urgent' : 'Normal'}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-teal/70 text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{pickup.address} • {pickup.distance}</span>
                        </div>
                        <div className="flex items-center gap-2 text-teal/70 text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{pickup.pickupTime}</span>
                        </div>
                        <div className="text-teal font-medium">
                          {pickup.foodType} • {pickup.quantity}
                        </div>
                      </div>
                      
                      <Button 
                        onClick={() => assignPickup(pickup.id)}
                        className="btn-golden w-full"
                      >
                        Accept Pickup
                      </Button>
                    </div>
                  ))}
                  
                  {availablePickups.length === 0 && (
                    <div className="text-center py-8 text-teal/50">
                      <Users className="w-12 h-12 mx-auto mb-4" />
                      <p>No pickups available right now</p>
                      <p className="text-sm">Check back later or extend your area</p>
                    </div>
                  )}
                </div>
                
                {availablePickups.length > 1 && (
                  <Button 
                    onClick={planRoute}
                    variant="outline"
                    className="w-full mt-4 border-2 border-teal text-teal hover:bg-teal hover:text-white"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Plan Multi-Pickup Route
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Volunteer Profile & Badges */}
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-skyblue/30">
              <CardHeader>
                <CardTitle className="text-2xl text-teal flex items-center gap-2">
                  <Star className="w-6 h-6 fill-current" />
                  Your Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="w-20 h-20 gradient-sky rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-teal">Community Hero</h3>
                  <p className="text-teal/70">Volunteer since Jan 2024</p>
                </div>
                
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-golden">{volunteerStats.rating}</p>
                    <p className="text-teal/70">Average Rating</p>
                    <div className="flex justify-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(volunteerStats.rating) ? 'text-golden fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-teal mb-3">Earned Badges</h4>
                    <div className="flex flex-wrap gap-2">
                      {volunteerStats.badges.map((badge, index) => (
                        <Badge 
                          key={index}
                          variant="outline" 
                          className="border-2 border-skyblue text-skyblue bg-skyblue/10"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Impact Summary */}
          <Card className="mt-8 bg-gradient-to-r from-golden/10 via-teal/10 to-skyblue/10 border-2 border-golden/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-teal mb-4">Your Volunteer Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-3xl font-bold text-golden">{volunteerStats.totalDeliveries}</p>
                  <p className="text-teal/70">Successful Deliveries</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-teal">{Math.round(volunteerStats.totalDeliveries * 2.5)}</p>
                  <p className="text-teal/70">People Helped</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-skyblue">{Math.round(volunteerStats.totalDeliveries * 15)}</p>
                  <p className="text-teal/70">Km Traveled for Good</p>
                </div>
              </div>
              <p className="text-teal/70 mt-4 italic">
                "Every delivery you make creates ripples of kindness in our community. Thank you!"
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default VolunteerDashboard;
