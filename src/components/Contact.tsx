import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  function ContactForm() {
    const [state, handleSubmit] = useForm("xyzdpjek");

    if (state.succeeded) {
      return <p className="py-10 text-center font-medium text-emerald-600">Thanks for reaching out. We’ll be in touch soon.</p>;
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Input type="text" name="name" placeholder="Your name" required className="h-12 rounded-xl border-slate-200 bg-slate-50/70" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div>
          <Input type="email" name="email" placeholder="Work email" required className="h-12 rounded-xl border-slate-200 bg-slate-50/70" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <Textarea name="message" placeholder="Tell us what you're looking to build..." required rows={5} className="rounded-xl border-slate-200 bg-slate-50/70" />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <Button type="submit" disabled={state.submitting} size="lg" className="h-12 w-full rounded-xl bg-blue-600 text-white hover:bg-blue-700">
          Send enquiry <Send className="ml-2 h-4 w-4" />
        </Button>
      </form>
    );
  }

  const contactInfo = [
    { icon: Mail, title: "Email", content: "havstechsolutions@gmail.com" },
    { icon: Phone, title: "Phone", content: "9952533149" },
    { icon: MapPin, title: "Based in", content: "Namakkal, Tamil Nadu, India" },
  ];

  return (
    <section id="contact" className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Let's build</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Have a challenge in mind?</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Tell us what you're trying to achieve. We'll help you shape the right technology approach.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <Card className="rounded-[2rem] border-slate-200 bg-white shadow-xl shadow-slate-900/5">
            <CardHeader className="p-7 sm:p-9"><CardTitle className="text-2xl text-slate-950">Start a conversation</CardTitle></CardHeader>
            <CardContent className="p-7 pt-0 sm:p-9 sm:pt-0"><ContactForm /></CardContent>
          </Card>

          <div className="rounded-[2rem] bg-[#07111f] p-8 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">HAVS Tech Solutions</p>
            <h3 className="mt-5 text-3xl font-semibold tracking-tight">Let's turn your requirement into something that works.</h3>
            <p className="mt-5 leading-7 text-slate-400">Whether you need an Amazon Connect implementation, AI voice solution, n8n automation, custom software, a website, or technology talent, we're ready to understand the problem and help you move forward.</p>

            <div className="mt-9 space-y-5">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.title} className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-blue-300"><Icon className="h-5 w-5" /></div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-500">{info.title}</p>
                      {info.title === "Email" ? (
                        <a href={`mailto:${info.content}`} className="text-sm font-medium text-white hover:text-blue-300">{info.content}</a>
                      ) : info.title === "Phone" ? (
                        <a href={`tel:${info.content}`} className="text-sm font-medium text-white hover:text-blue-300">{info.content}</a>
                      ) : <p className="text-sm font-medium text-white">{info.content}</p>}
                    </div>
                  </div>
                );
              })}
            </div>

            <a href="mailto:havstechsolutions@gmail.com" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-white">Email us directly <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
