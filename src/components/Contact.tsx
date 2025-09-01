import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  function ContactForm() {
    const [state, handleSubmit] = useForm("xyzdpjek"); // <-- replace with your Formspree form ID

    if (state.succeeded) {
      return (
        <p className="text-green-600 font-medium text-center">
          ✅ Thanks for your message! We’ll get back to you soon.
        </p>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div>
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <Textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="w-full"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <Button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-gradient-brand text-white hover:opacity-90 group"
          size="lg"
        >
          Send Message
          <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </form>
    );
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "havstechsolutions@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "9952533149"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "Namakkal, Tamil Nadu, India"
    }
  ];

  return (
    <section id="contact" className="py-18 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business? Contact us today to discuss your project 
            and discover how we can help you achieve your digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-8">
                We're here to help you transform your business with innovative 
                technology solutions. Reach out to us through any of the following channels.
              </p>
            </div>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>

                      {info.title === "Email" ? (
                        <a
                          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${info.content}&su=Service%20Enquiry`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-blue-600 no-underline"
                        >
                          {info.content}
                        </a>
                      ) : info.title === "Phone" ? (
                        <a
                          href={`tel:${info.content}`}
                          className="text-gray-600 hover:text-blue-600 no-underline"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
