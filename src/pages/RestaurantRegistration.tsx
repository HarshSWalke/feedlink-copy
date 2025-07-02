
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ChefHat, MapPin, Clock, Users, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const RestaurantRegistration = () => {
  const [formData, setFormData] = useState({
    restaurantName: "",
    address: "",
    contactPerson: "",
    phone: "",
    email: "",
    dailyQuantity: "",
    pickupTimeStart: "",
    pickupTimeEnd: "",
    foodTypes: "",
    walkInFriendly: false,
    specialInstructions: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.restaurantName || !formData.address || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      toast.success("Registration successful! Welcome to FeedLink family.");
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-golden/5 to-skyblue/5">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-golden/30">
              <CardContent className="p-12">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h1 className="text-3xl font-bold text-teal mb-4">Registration Successful!</h1>
                <p className="text-teal/70 mb-8">
                  Welcome to the FeedLink family! You're now part of our mission to bridge hunger with kindness.
                </p>
                <div className="bg-golden/10 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-teal mb-2">What's Next?</h3>
                  <ul className="text-left text-teal/70 space-y-2">
                    <li>• We'll review your registration within 24 hours</li>
                    <li>• You'll receive login credentials via email</li>
                    <li>• Start sharing your daily leftover food</li>
                    <li>• Track your impact in the dashboard</li>
                  </ul>
                </div>
                <Button 
                  onClick={() => window.location.href = '/'}
                  className="btn-golden"
                >
                  Return to Home
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-golden/5 to-skyblue/5">
      <Header />
      
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-20 h-20 gradient-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <ChefHat className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-teal mb-4">Register Your Restaurant</h1>
            <p className="text-teal/70 text-lg">
              Join our mission to reduce food waste and help those in need
            </p>
          </div>

          <Card className="bg-white/90 backdrop-blur-sm border-2 border-golden/30">
            <CardHeader>
              <CardTitle className="text-2xl text-teal">Restaurant Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="restaurantName" className="text-teal font-semibold">
                      Restaurant Name *
                    </Label>
                    <Input
                      id="restaurantName"
                      value={formData.restaurantName}
                      onChange={(e) => handleInputChange('restaurantName', e.target.value)}
                      placeholder="Enter restaurant name"
                      className="border-2 border-golden/30 focus:border-golden"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contactPerson" className="text-teal font-semibold">
                      Contact Person *
                    </Label>
                    <Input
                      id="contactPerson"
                      value={formData.contactPerson}
                      onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                      placeholder="Manager/Owner name"
                      className="border-2 border-golden/30 focus:border-golden"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-teal font-semibold flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Restaurant Address *
                  </Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Full address with landmarks"
                    className="border-2 border-golden/30 focus:border-golden min-h-20"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-teal font-semibold">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      className="border-2 border-golden/30 focus:border-golden"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-teal font-semibold">
                      Email (Optional)
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="restaurant@example.com"
                      className="border-2 border-golden/30 focus:border-golden"
                    />
                  </div>
                </div>

                {/* Food Information */}
                <div className="border-t border-golden/20 pt-8">
                  <h3 className="text-xl font-semibold text-teal mb-6 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Food Sharing Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="dailyQuantity" className="text-teal font-semibold">
                        Daily Leftover Quantity (Approx.)
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('dailyQuantity', value)}>
                        <SelectTrigger className="border-2 border-golden/30 focus:border-golden">
                          <SelectValue placeholder="Select quantity range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-5">1-5 portions</SelectItem>
                          <SelectItem value="5-10">5-10 portions</SelectItem>
                          <SelectItem value="10-20">10-20 portions</SelectItem>
                          <SelectItem value="20+">20+ portions</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="foodTypes" className="text-teal font-semibold">
                        Food Types
                      </Label>
                      <Input
                        id="foodTypes"
                        value={formData.foodTypes}
                        onChange={(e) => handleInputChange('foodTypes', e.target.value)}
                        placeholder="e.g., Indian, Chinese, Continental"
                        className="border-2 border-golden/30 focus:border-golden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="pickupTimeStart" className="text-teal font-semibold flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Pickup Time Start
                      </Label>
                      <Input
                        id="pickupTimeStart"
                        type="time"
                        value={formData.pickupTimeStart}
                        onChange={(e) => handleInputChange('pickupTimeStart', e.target.value)}
                        className="border-2 border-golden/30 focus:border-golden"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="pickupTimeEnd" className="text-teal font-semibold">
                        Pickup Time End
                      </Label>
                      <Input
                        id="pickupTimeEnd"
                        type="time"
                        value={formData.pickupTimeEnd}
                        onChange={(e) => handleInputChange('pickupTimeEnd', e.target.value)}
                        className="border-2 border-golden/30 focus:border-golden"
                      />
                    </div>
                  </div>
                </div>

                {/* Special Options */}
                <div className="border-t border-golden/20 pt-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Checkbox 
                      id="walkInFriendly"
                      checked={formData.walkInFriendly}
                      onCheckedChange={(checked) => handleInputChange('walkInFriendly', checked as boolean)}
                      className="border-2 border-golden data-[state=checked]:bg-golden data-[state=checked]:border-golden"
                    />
                    <Label htmlFor="walkInFriendly" className="text-teal font-semibold">
                      Walk-in friendly for people without ID?
                    </Label>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="specialInstructions" className="text-teal font-semibold">
                      Special Instructions (Optional)
                    </Label>
                    <Textarea
                      id="specialInstructions"
                      value={formData.specialInstructions}
                      onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
                      placeholder="Any specific instructions for pickup (e.g., back entrance, ask for manager)"
                      className="border-2 border-golden/30 focus:border-golden"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="btn-teal w-full text-lg py-6"
                >
                  Register Restaurant
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default RestaurantRegistration;
