"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { faqs } from "@/app/data/faq";

export default function Faq() {
  // Controlled state for single-open behavior
  const [openValue, setOpenValue] = useState<string[]>([]);

  const handleAccordionChange = (val: string[]) => {
    // toggle: close if already open
    setOpenValue(openValue[0] === val[0] ? [] : val);
  };

  return (
    <section className="py-20" id="faq">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-10">
          More About Me
        </h2>

        <Accordion
          value={openValue}
          onValueChange={handleAccordionChange}
          className="w-full"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b transition hover:bg-muted/50"
            >
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}