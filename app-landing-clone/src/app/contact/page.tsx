import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 pt-28 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about our products, need help with an order, or want to provide feedback, we're here to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="shadow-md border-0 h-full">
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
                <CardDescription>
                  We're here to help and answer any questions you might have.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-gray-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">support@escactivewear.com</p>
                      <p className="text-gray-600">info@escactivewear.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-gray-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-600">Mon-Fri, 9am-5pm PST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gray-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-gray-600">
                        123 Athletic Street <br />
                        San Francisco, CA 94105 <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-gray-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Hours</h3>
                      <p className="text-gray-600">Monday-Friday: 9am-5pm</p>
                      <p className="text-gray-600">Saturday: 10am-4pm</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-medium mb-3">Follow Us</h3>
                    <div className="flex gap-4">
                      <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message..." className="min-h-[150px]" />
                  </div>

                  <Button type="submit" className="w-full bg-black hover:bg-black/80 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-gray-200 w-full h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Map will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
