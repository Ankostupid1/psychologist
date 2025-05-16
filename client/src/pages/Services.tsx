
import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Video, Calendar, BookOpen, HeadphonesIcon } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      icon: Heart,
      title: "Individual Therapy",
      description:
        "One-on-one sessions tailored to your specific needs. Together, we'll address personal challenges, explore patterns of thinking and behavior, and develop strategies for growth and healing.",
      inclusions: [
        "Weekly 50-minute sessions",
        "Personalized treatment plan",
        "Evidence-based therapeutic techniques",
        "Safe, confidential environment",
        "Progress tracking and goal setting",
      ],
    },
    {
      icon: Users,
      title: "Couples Therapy",
      description:
        "Strengthen your relationship through improved communication, conflict resolution, and deeper emotional connection. Learn to navigate challenges together and rebuild trust and intimacy.",
      inclusions: [
        "60-80 minute sessions",
        "Joint and individual conversations",
        "Communication skill building",
        "Conflict resolution strategies",
        "Rebuilding trust and connection",
      ],
    },
    {
      icon: Video,
      title: "Online Sessions",
      description:
        "Receive the same quality therapy from the comfort of your own space via secure video conferencing. Perfect for busy schedules, limited mobility, or those who prefer remote sessions.",
      inclusions: [
        "Convenient scheduling options",
        "Secure, HIPAA-compliant platform",
        "Technical support available",
        "Same personalized approach as in-person",
        "Easily accessible from any location",
      ],
    },
    {
      icon: BookOpen,
      title: "Anxiety & Depression Treatment",
      description:
        "Specialized therapy for managing symptoms of anxiety and depression. Learn practical coping strategies, challenge negative thought patterns, and rebuild a sense of hope and purpose.",
      inclusions: [
        "Cognitive-behavioral techniques",
        "Mindfulness and relaxation training",
        "Emotional regulation strategies",
        "Lifestyle and self-care guidance",
        "Regular progress assessment",
      ],
    },
    {
      icon: HeadphonesIcon,
      title: "Trauma Recovery",
      description:
        "Compassionate support for healing from past trauma. Using evidence-based approaches, we'll work together to process difficult experiences and build resilience and emotional safety.",
      inclusions: [
        "Trauma-informed therapeutic approach",
        "Safety and stabilization techniques",
        "Nervous system regulation",
        "Integration of past experiences",
        "Building resilience and strength",
      ],
    },
    {
      icon: Calendar,
      title: "Life Transitions Support",
      description:
        "Guidance through significant life changes such as career shifts, relationship changes, becoming a parent, or adjusting to loss. Navigate uncertainty with confidence and clarity.",
      inclusions: [
        "Short or long-term support options",
        "Decision-making frameworks",
        "Identity exploration",
        "Stress management techniques",
        "Future planning and goal setting",
      ],
    },
  ];

  return (
    <PageLayout>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="My Services"
            subtitle="I offer a range of therapeutic services designed to support your mental health and personal growth."
            centered={true}
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <CardContent className="p-0">
                  <div className="p-6 space-y-4">
                    <div className="bg-robin/10 w-14 h-14 flex items-center justify-center rounded-full">
                      <service.icon className="w-7 h-7 text-robin" />
                    </div>
                    <h3 className="text-xl font-serif font-medium text-olive">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                    <div className="pt-4">
                      <h4 className="font-medium text-sm mb-2 text-olive">What's included:</h4>
                      <ul className="space-y-2">
                        {service.inclusions.map((item, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <span className="text-robin mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-gray-50 border-t border-gray-100">
                    <Button
                      asChild
                      className="w-full bg-robin hover:bg-robin/80 text-white"
                    >
                      <Link to="/contact">Book Consultation</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80"
                alt="Therapeutic Approach"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <span className="text-sm font-medium text-robin">My Approach</span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-olive mt-2 mb-6">
                How I Work With Clients
              </h2>
              <p className="text-muted-foreground mb-6">
                My therapeutic approach is collaborative, compassionate, and tailored to meet your unique needs. I integrate evidence-based practices from various therapeutic modalities, including:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-robin font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium text-olive">Cognitive-Behavioral Therapy (CBT)</span>
                    <p className="text-sm text-muted-foreground">Identifying and changing unhelpful thought patterns and behaviors</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-robin font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium text-olive">Mindfulness-Based Approaches</span>
                    <p className="text-sm text-muted-foreground">Developing present-moment awareness and emotional regulation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-robin font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium text-olive">Attachment-Based Therapy</span>
                    <p className="text-sm text-muted-foreground">Understanding relationship patterns and building secure connections</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-robin font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium text-olive">Solution-Focused Brief Therapy</span>
                    <p className="text-sm text-muted-foreground">Building on strengths and developing practical solutions</p>
                  </div>
                </li>
              </ul>
              <Button asChild className="bg-robin hover:bg-robin/80 text-white">
                <Link to="/contact">Schedule Your Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about therapy and my services."
            centered={true}
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does therapy typically last?",
                answer:
                  "The duration of therapy varies based on your specific needs and goals. Some clients benefit from short-term therapy (8-12 sessions), while others find longer-term work more beneficial. We'll regularly assess your progress and adjust our approach accordingly.",
              },
              {
                question: "Do you accept insurance?",
                answer:
                  "I am an out-of-network provider for most insurance plans. I can provide you with a superbill that you can submit to your insurance company for potential reimbursement. Please check with your insurance provider about out-of-network mental health benefits.",
              },
              {
                question: "How often will we meet?",
                answer:
                  "Most clients start with weekly sessions to build momentum in therapy. As you progress, we may adjust to biweekly or monthly sessions. Consistency is important, especially in the beginning stages of therapy.",
              },
              {
                question: "What can I expect in the first session?",
                answer:
                  "The initial session is primarily focused on understanding your concerns, gathering background information, and establishing goals for therapy. It's also an opportunity for you to ask questions and determine if we're a good fit to work together.",
              },
              {
                question: "Is everything I share confidential?",
                answer:
                  "Confidentiality is a cornerstone of therapy. With few exceptions (such as risk of harm to self or others or mandated reporting situations), everything you share remains private and confidential.",
              },
              {
                question: "How do I know if therapy is working?",
                answer:
                  "We'll establish clear goals at the beginning of therapy and regularly check in on your progress. Success might look like reduced symptoms, improved relationships, better coping skills, or a greater sense of well-being and satisfaction in life.",
              },
            ].map((faq, index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-lg font-medium text-olive">{faq.question}</h4>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-robin text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Take the first step toward positive change by scheduling your initial consultation. I'm here to support you every step of the way.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-robin hover:bg-white/90"
          >
            <Link to="/contact">Contact Me Today</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServicesPage;
