"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      alert("Message sent successfully 🚀");
      e.target.reset();
    } else {
      alert("Something went wrong ❌");
    }
  };

  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-4"
      >
        <Input name="name" placeholder="Your Name" required />
        <Input name="email" placeholder="Your Email" required />
        <Textarea name="message" placeholder="Your Message" required />

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </section>
  );
}