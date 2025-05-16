
import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Users, Video, Calendar } from "lucide-react";

const Index = () => {
  return (
    <PageLayout className="pt-0">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-start">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-olive/50" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-xl animate-fade-in">
            {/* <span className="block bg-robin bg-opacity-20 text-robin px-4 py-1 rounded-full text-sm font-medium mb-6 inline-block">
              Licensed Clinical Psychologist
            </span> */}
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Dr. Immaculate Wangui
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Helping you find balance, healing, and growth through compassionate therapy in a safe, supportive environment.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button asChild size="lg" className="bg-robin hover:bg-robin/80 text-white">
                <Link to="/contact">Book Your Session with me today.</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="text-sm font-medium text-robin">About Me</span>
              <SectionHeading
                title="Specialized Therapy for Your Mental Wellness"
                className="mb-6"
              />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With great years of experience, I specialize in helping individuals and couples navigate life's challenges through evidence-based therapeutic approaches tailored to 
                your unique needs.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                My practice is built on creating a safe, non-judgmental space where you can explore your thoughts, 
                feelings, and behaviors to foster personal growth and emotional healing.
              </p>
              <Button asChild className="bg-robin hover:bg-robin/80 text-white">
                <Link to="/about">More About My Approach</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute -right-4 -top-4 w-2/3 h-2/3 bg-robin/20 rounded-xl -z-10" />
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80"
                alt="Dr. Immaculate Wangui"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Services Offered"
            subtitle="I provide a range of therapeutic services designed to address various mental health needs and life challenges."
            centered={true}
            className="mb-16"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Individual Therapy",
                description:
                  "One-on-one sessions focused on personal growth, overcoming challenges, and improving mental wellness.",
                icon: Heart,
              },
              {
                title: "Couples Therapy",
                description:
                  "Helping partners improve communication, resolve conflicts, and strengthen their relationship bonds.",
                icon: Users,
              },
              {
                title: "Online Sessions",
                description:
                  "Convenient and effective therapy from the comfort of your own space via secure video conferencing.",
                icon: Video,
              },
            ].map((service, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="bg-robin/10 w-14 h-14 flex items-center justify-center rounded-full mb-6">
                    <service.icon className="w-7 h-7 text-robin" />
                  </div>
                  <h3 className="text-xl font-serif font-medium mb-3 text-olive">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-robin hover:text-robin/70 font-medium"
                  >
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="py-24 bg-robin text-white">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            title="Ready to Start Your Journey?"
            subtitle="Take the first step toward healing and growth by scheduling an initial consultation."
            centered={true}
            className="mb-12 text-white"
          />
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-robin hover:bg-white/90">
              <Link to="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-robin hover:bg-white/90">
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
