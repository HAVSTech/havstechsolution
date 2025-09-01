import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {

    return(<>
    
      {/* FAQ Section */}
<section className="pt-10 pb-20 bg-gradient-section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  How long does a typical consulting engagement last?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Project duration varies based on scope and complexity, typically ranging from 3-12 months. We provide detailed timelines during the initial consultation phase.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  What industries do you specialize in?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                        As a growing IT startup, we focus on delivering technology solutions across core sectors such as software development, cloud services, digital solutions, and professional services. While our primary expertise is in IT and digital transformation, we are continuously expanding into areas like healthcare, finance, and retail to support businesses with modern, scalable, and cost-effective solutions.                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  How do you measure project success?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Success metrics are defined collaboratively at project start, including KPIs like revenue growth, cost reduction, efficiency gains, and other objectives specific to your business goals.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  Do you provide ongoing support after project completion?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we offer various post-project support options including quarterly reviews, implementation assistance, and additional training to ensure sustained success.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  What is your pricing structure?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We offer flexible pricing models including fixed-fee projects, retainer arrangements, and performance-based pricing. All costs are transparent with no hidden fees.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    
    </>);
}