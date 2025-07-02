
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChefHat, Users, TrendingUp, Clock, Utensils } from "lucide-react";
import { toast } from "sonner";

const RestaurantDashboard = () => {
  const [todayFood, setTodayFood] = useState({
    foodType: "Indian Thali",
    quantity: "8",
    pickupTime: "19:00"
  });

  const mockStats = {
    totalMeals: 247,
    thisMonth: 45,
    activeDays: 32,
    topDay: "Saturday"
  };

  const mockRecentPickups = [
    { id: 1, time: "7:30 PM", quantity: "3 portions", status: "Completed" },
    { id: 2, time: "8:15 PM", quantity: "2 portions", status: "Completed" },
    { id: 3, time: "6:45 PM", quantity: "5 portions", status: "Completed" }
  ];

  const updateTodayFood = () => {
    // Simulate API call
    toast.success("Today's food offering updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-golden/5 to-skyblue/5">
      <Header />
      
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Welcome Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 gradient-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <ChefHat className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-teal mb-4">Restaurant Dashboard</h1>
            <p className="text-teal/70 text-lg">
              Welcome back, Maharaja Restaurant! Manage your daily food sharing here.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gradient-to-r from-golden/20 to-golden/10 border-2 border-golden/30">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-golden mx-auto mb-2" />
                <p className="text-3xl font-bold text-teal">{mockStats.totalMeals}</p>
                <p className="text-teal/70 font-medium">Total Meals Shared</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-teal/20 to-teal/10 border-2 border-teal/30">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-8 h-8 text-teal mx-auto mb-2" />
                <p className="text-3xl font-bold text-teal">{mockStats.thisMonth}</p>
                <p className="text-teal/70 font-medium">This Month</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-skyblue/20 to-skyblue/10 border-2 border-skyblue/30">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-skyblue mx-auto mb-2" />
                <p className="text-3xl font-bold text-teal">{mockStats.activeDays}</p>
                <p className="text-teal/70 font-medium">Active Days</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-green-500/20 to-green-400/10 border-2 border-green-400/30">
              <CardContent className="p-6 text-center">
                <Utensils className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-xl font-bold text-teal">{mockStats.topDay}</p>
                <p className="text-teal/70 font-medium">Most Active Day</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Today's Food Update */}
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-golden/30">
              <CardHeader>
                <CardTitle className="text-2xl text-teal flex items-center gap-2">
                  <Utensils className="w-6 h-6" />
                  Update Today's Food
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="foodType" className="text-teal font-semibold">
                    Food Type Available Today
                  </Label>
                  <Input
                    id="foodType"
                    value={todayFood.foodType}
                    onChange={(e) => setTodayFood({...todayFood, foodType: e.target.value})}
                    placeholder="e.g., Indian Thali, Chinese, Pizza"
                    className="border-2 border-golden/30 focus:border-golden"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="quantity" className="text-teal font-semibold">
                    Approximate Quantity
                  </Label>
                  <Select 
                    value={todayFood.quantity} 
                    onValueChange={(value) => setTodayFood({...todayFood, quantity: value})}
                  >
                    <SelectTrigger className="border-2 border-golden/30 focus:border-golden">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1-3 portions</SelectItem>
                      <SelectItem value="5">4-7 portions</SelectItem>
                      <SelectItem value="8">8-12 portions</SelectItem>
                      <SelectItem value="15">15+ portions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="pickupTime" className="text-teal font-semibold">
                    Pickup Time
                  </Label>
                  <Input
                    id="pickupTime"
                    type="time"
                    value={todayFood.pickupTime}
                    onChange={(e) => setTodayFood({...todayFood, pickupTime: e.target.value})}
                    className="border-2 border-golden/30 focus:border-golden"
                  />
                </div>
                
                <Button 
                  onClick={updateTodayFood}
                  className="btn-golden w-full"
                >
                  Update Today's Offering
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-teal/30">
              <CardHeader>
                <CardTitle className="text-2xl text-teal flex items-center gap-2">
                  <Clock className="w-6 h-6" />
                  Recent Pickups
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockRecentPickups.map((pickup) => (
                    <div key={pickup.id} className="flex items-center justify-between p-4 bg-teal/5 rounded-lg border border-teal/20">
                      <div>
                        <p className="font-semibold text-teal">{pickup.time}</p>
                        <p className="text-teal/70 text-sm">{pickup.quantity}</p>
                      </div>
                      <Badge className="bg-green-500 hover:bg-green-600">
                        {pickup.status}
                      </Badge>
                    </div>
                  ))}
                  
                  {mockRecentPickups.length === 0 && (
                    <div className="text-center py-8 text-teal/50">
                      <Clock className="w-12 h-12 mx-auto mb-4" />
                      <p>No recent pickups today</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Impact Summary */}
          <Card className="mt-8 bg-gradient-to-r from-golden/10 via-teal/10 to-skyblue/10 border-2 border-golden/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-teal mb-4">Your Impact Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-3xl font-bold text-golden">{mockStats.totalMeals}</p>
                  <p className="text-teal/70">Meals Provided</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-teal">{Math.round(mockStats.totalMeals * 0.5)}</p>
                  <p className="text-teal/70">Kg Food Saved</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-skyblue">{mockStats.activeDays}</p>
                  <p className="text-teal/70">Days Active</p>
                </div>
              </div>
              <p className="text-teal/70 mt-4 italic">
                "Thank you for being part of the FeedLink family and making a difference in our community!"
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default RestaurantDashboard;
