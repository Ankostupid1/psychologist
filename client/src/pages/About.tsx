
import React from "react";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileDown, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <PageLayout>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="About Dr. Imamaculate"
            subtitle="Clinical Psychologist"
            className="mb-12"
          />

          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Profile Image Column */}
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-2/3 h-2/3 bg-robin/20 rounded-xl -z-10" />
                <img
                  src="./images/kui.jpg"
                  alt="Dr. Immaculate"
                  className="rounded-xl shadow-lg w-full h-auto object-cover aspect-[3/4]"
                />
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-serif mb-3">Credentials</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-robin mr-2">•</span>
                    <span>Diploma in Counseling Psychology, KCA University</span>
                  </li>
                  {/* <li className="flex items-start">
                    <span className="text-robin mr-2">•</span>
                    <span>Licensed Clinical Psychologist (License #12345)</span>
                  </li> */}
                  {/* <li className="flex items-start">
                    <span className="text-robin mr-2">•</span>
                    <span>Certified in Cognitive Behavioral Therapy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-robin mr-2">•</span>
                    <span>Member, American Psychological Association</span>
                  </li> */}
                </ul>
                {/* <Button asChild className="w-full mt-4 gap-2" variant="outline">
                  <a href="#" download>
                    <FileDown size={16} />
                    Download CV
                  </a>
                </Button> */}
              </div>
            </div>

            {/* Biography Column */}
            <div className="md:col-span-2 space-y-8">
              <div className="prose prose-olive max-w-none">
                <p className="text-lg leading-relaxed">
                  I am a clinical psychologist with great experience in helping individuals and couples navigate life's challenges and improve their mental well-being.
                </p>
                
                <h3 className="text-2xl font-serif text-olive mt-8 mb-4">My Background</h3>
                <p>
                  After completing my diploma at KCA university, I specialized in all ares of psychology. My clinical experience includes work in hospital settings, community mental health centers, and private practice, allowing me to develop a versatile approach to therapy that draws from multiple evidence-based methods.
                </p>
                
                <h3 className="text-2xl font-serif text-olive mt-8 mb-4">My Therapeutic Approach</h3>
                <p>
                  I believe in creating a collaborative therapeutic relationship based on trust, empathy, and respect. My approach integrates cognitive-behavioral therapy, mindfulness practices, and attachment theory to address the unique needs of each client.
                </p>
                <p>
                  Rather than offering one-size-fits-all solutions, I work with you to develop personalized strategies that honor your experiences, values, and goals. Together, we'll explore patterns that may be holding you back and develop practical tools for creating positive change in your life.
                </p>
                
                <h3 className="text-2xl font-serif text-olive mt-8 mb-4">Areas of Expertise</h3>
                <ul className="space-y-2 list-disc pl-6">
                  <li>Anxiety and panic disorders</li>
                  <li>Depression and mood disorders</li>
                  <li>Relationship challenges and conflicts</li>
                  <li>Trauma recovery and PTSD</li>
                  <li>Life transitions and personal growth</li>
                  <li>Grief and loss</li>
                  <li>Stress management</li>
                  <li>Drug and substance abuse</li>
                </ul>
                
                <h3 className="text-2xl font-serif text-olive mt-8 mb-4">Personal Note</h3>
                <p>
                  Outside of my clinical work, I enjoy hiking in nature, practicing meditation, and spending time with my family. I believe that maintaining balance in my own life enhances my ability to support others in their journey toward wellness and fulfillment.
                </p>
                
                <p className="mt-8">
                  I look forward to working with you and supporting your path to healing and growth.
                </p>
              </div>

              {/* CTA Cards */}
              <div className="grid sm:grid-cols-2 gap-6 mt-12">
                <Card className="border-robin/20">
                  <CardContent className="pt-6">
                    <h4 className="text-lg font-serif font-medium mb-2">Ready to Start?</h4>
                    <p className="text-muted-foreground mb-4">
                      Take the first step toward healing by scheduling your initial consultation.
                    </p>
                    <Button asChild className="w-full bg-robin hover:bg-robin/80 text-white">
                      <Link to="/contact">Schedule a Session</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="border-robin/20">
                  <CardContent className="pt-6">
                    <h4 className="text-lg font-serif font-medium mb-2">Learn More</h4>
                    <p className="text-muted-foreground mb-4">
                      Explore the range of therapeutic services I offer to support your well-being.
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/services" className="inline-flex items-center">
                        <BookOpen size={16} className="mr-2" />
                        View Services
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
