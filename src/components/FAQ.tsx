import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    ["What kinds of projects do you take on?", "We work across Amazon Connect, AI voice, n8n automation, custom software, websites, technology talent, IT consulting, and HR solutions. Scope and engagement model are shaped around the requirement."],
    ["Can you integrate with our existing systems?", "Yes. We can work with APIs, cloud services, business applications, databases, and existing workflows to connect new solutions with the systems you already use."],
    ["Do you support projects after launch?", "Yes. We can provide implementation support, troubleshooting, optimization, enhancements, and ongoing technical assistance based on your needs."],
    ["Can you work with an existing development or IT team?", "Absolutely. Our technology talent and consulting services can complement your internal team, fill skill gaps, or support delivery during periods of increased demand."],
    ["How do we get started?", "Send us a short overview of your requirement through the contact form or email us. We can then understand the objective, discuss the best approach, and outline the next steps."],
  ];

  return (
    <section id="faq" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">FAQ</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Questions, answered clearly.</h2>
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
