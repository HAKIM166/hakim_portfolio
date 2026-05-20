"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const formspreeEndpoint = "https://formspree.io/f/xwvzloea";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+20 109 251 0794",
    href: "https://wa.me/201092510794",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ahmed.hakem2@yahoo.com",
    href: "mailto:ahmed.hakem2@yahoo.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Assiut, Egypt",
    href: null,
  },
];

export default function Contact() {
  const formRef = useRef(null);
  const [service, setService] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formRef.current) return;

    setStatus("sending");

    const formData = new FormData(formRef.current);
    formData.append("_subject", "New portfolio contact message");

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      formRef.current.reset();
      setService("");
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let’s work together</h3>

              <p className="text-white/60">
                Have a project or front-end role in mind? Share the details
                below and I’ll get back to you as soon as possible.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  type="text"
                  placeholder="Firstname"
                  required
                />
                <Input
                  name="lastname"
                  type="text"
                  placeholder="Lastname"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  required
                />
                <Input name="phone" type="tel" placeholder="Phone number" />
              </div>

              <input type="hidden" name="service" value={service} />

              <Select value={service} onValueChange={setService}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="Front-End Dashboard">
                      Front-End Dashboard
                    </SelectItem>
                    <SelectItem value="Restaurant Menu / Ordering UI">
                      Restaurant Menu / Ordering UI
                    </SelectItem>
                    <SelectItem value="Portfolio Website">
                      Portfolio Website
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
                required
              />

              {status === "success" && (
                <p className="text-sm text-green-400">
                  Message sent successfully. I’ll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong. Please try again or contact me by email.
                </p>
              )}

              <Button
                type="submit"
                size="md"
                className="max-w-40"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                const content = (
                  <li className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>

                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );

                return item.href ? (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
