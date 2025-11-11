import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import femaleExec from "@assets/generated_images/Female_executive_testimonial_photo_7183b69f.png";
import maleDirector from "@assets/generated_images/Male_tech_director_photo_a09d0e05.png";

const testimonials = [
  {
    quote: "OLEV transformed our data pipeline from a bottleneck into a competitive advantage. Their automation reduced deployment time by 80%.",
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechCorp",
    avatar: femaleExec,
    initials: "SC"
  },
  {
    quote: "Working with OLEV felt like adding a senior architect to our team. They understood our stack immediately and delivered solutions we didn't know were possible.",
    name: "Michael Rodriguez",
    role: "CTO",
    company: "DataFlow Systems",
    avatar: maleDirector,
    initials: "MR"
  },
];

const partners = [
  { name: "AWS", logo: "AWS" },
  { name: "Snowflake", logo: "Snowflake" },
  { name: "Databricks", logo: "Databricks" },
  { name: "MongoDB", logo: "MongoDB" },
];

export default function SocialProof() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Trusted by technical leaders
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full" data-testid={`card-testimonial-${index}`}>
                <p className="text-lg leading-relaxed mb-6 text-foreground">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-wide text-muted-foreground mb-8 font-medium">
            Integrated with leading platforms
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="text-muted-foreground/60 hover:text-muted-foreground transition-colors font-mono text-xl font-semibold"
                data-testid={`partner-${partner.name.toLowerCase()}`}
              >
                {partner.logo}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
