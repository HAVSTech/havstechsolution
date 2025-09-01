import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
export default function Clientstories() {

    return(<>
       <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Client Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from leaders who have transformed their businesses with our consulting services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The strategic insights and implementation support transformed our operations. We saw 40% efficiency gains within 6 months.",
                author: "Sarah Chen",
                title: "CEO, TechFlow Solutions",
                rating: 5
              },
              {
                quote: "Outstanding expertise and professionalism. Their process optimization recommendations saved us $2M annually.",
                author: "Michael Rodriguez", 
                title: "Operations Director, Global Manufacturing Inc.",
                rating: 5
              },
              {
                quote: "Best consulting experience we've had. The team was responsive, knowledgeable, and delivered exceptional results.",
                author: "Jennifer Park",
                title: "VP Strategy, Innovation Labs",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </>)
}