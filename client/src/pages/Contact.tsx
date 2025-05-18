
import React from "react";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <PageLayout>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Contact Me"
            subtitle="Reach out to schedule a consultation or ask any questions about my services."
            centered={true}
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Form */}
            {/* <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-serif mb-6 text-olive">Send a Message</h3>
              <ContactForm />
            </div> */}

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 md:p-8 rounded-xl space-y-6">
                <h3 className="text-2xl font-serif mb-4 text-olive">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-robin/10 p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-robin" />
                    </div>
                    <div>
                      <h4 className="font-medium text-olive">Email</h4>
                      <a
                        href="mailto:contact.wanguiimmaculate@gmail.com"
                        className="text-muted-foreground hover:text-robin transition-colors"
                      >
                        contact.wanguiimmaculate@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-robin/10 p-3 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-robin" />
                    </div>
                    <div>
                      <h4 className="font-medium text-olive">Phone</h4>
                      <a
                        href="tel:+254792025453"
                        className="text-muted-foreground hover:text-robin transition-colors"
                      >
                        +254 792 025453
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-robin/10 p-3 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-robin" />
                    </div>
                    <div>
                      <h4 className="font-medium text-olive">Office Address</h4>
                      <address className="text-muted-foreground not-italic">
                      <a
                        href="https://maps.app.goo.gl/VTtevNhjYda8b3Ko6"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-robin transition-colors"
                      >
                        Kirigiti, Kiambu<br />
                        Kenya
                      </a>
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-robin/10 p-3 rounded-full mr-4">
                      <Clock className="h-5 w-5 text-robin" />
                    </div>
                    <div>
                      <h4 className="font-medium text-olive">Office Hours</h4>
                      <div className="text-muted-foreground">
                        <p>Monday - Friday: 8:00 AM - 5:30 PM</p>
                        <p>Saturday: Closed</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-lg h-[300px]">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37949.09162340956!2d36.86089745726704!3d-1.224704825692631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f0007d2dbe3%3A0x75290b5011d0d591!2sKirigiti!5e0!3m2!1sen!2ske!4v1746887843741!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about getting started with therapy."
            centered={true}
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            {[
              {
                question: "How do I schedule an appointment?",
                answer:
                  "You can schedule an appointment by filling out the contact form above, calling my office directly, or sending an email. I'll respond within 24 business hours to arrange an initial consultation.",
              },
              {
                question: "What are your fees?",
                answer:
                  "Session fees vary based on the type and length of service. I offer a sliding scale for clients with financial need. Please contact me directly for current fee information.",
              },
              {
                question: "Do you offer virtual sessions?",
                answer:
                  "Yes, I offer secure video sessions for clients who prefer teletherapy or who are unable to come to the office. Virtual sessions are conducted through a HIPAA-compliant platform.",
              },
              {
                question: "What should I bring to my first session?",
                answer:
                  "Please bring your insurance card (if applicable), a form of payment, and any previous mental health records you feel might be relevant. Most importantly, bring an open mind and willingness to engage in the process.",
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
    </PageLayout>
  );
};

export default Contact;
