import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    ["What kinds of business problems do you solve?", "We help businesses improve customer conversations, automate repetitive operations, connect existing systems, and build practical digital products. Our core capabilities include Amazon Connect, Voice AI, n8n automation, custom software, web development, technology talent, and IT consulting."],
    ["Can you integrate with our existing systems?", "Yes. We can work with APIs, cloud services, business applications, databases, and existing workflows to connect new solutions with the systems you already use."],
    ["Do you support projects after launch?", "Yes. We provide implementation support, troubleshooting, optimization, enhancements, and ongoing technical assistance. Support can also be structured as an ongoing HAVS Care engagement."],
    ["Can you work with an existing development or IT team?", "Absolutely. Our technology talent and consulting services can complement your internal team, fill skill gaps, or support delivery during periods of increased demand."],
    ["Do you offer fixed packages or custom engagements?", "Both. We offer focused starting points for contact centers, Voice AI and workflow automation, while larger or unique requirements can be scoped as a custom engagement."],
    ["How do we get started?", "Send us a short overview of your requirement through the contact form or email. We'll start with a discovery conversation to understand the objective, current process and best next step."],
  ];

  return (
    <section id="faq" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">FAQ</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Questions, answered clearly.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">A few practical answers before we start working together.</p>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map(([question, answer], index) => (
            <AccordionItem key={question} value={`item-${index + 1}`} className="rounded-2xl border border-slate-200 px-6 data-[state=open]:border-blue-200 data-[state=open]:bg-blue-50/30">
              <AccordionTrigger className="py-6 text-left font-semibold text-slate-900 hover:no-underline">{question}</AccordionTrigger>
              <AccordionContent className="pb-6 leading-7 text-slate-600">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
