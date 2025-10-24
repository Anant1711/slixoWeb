import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Is Slixo free to use?",
      answer: "Yes! Slixo is completely free for customers to browse salons and book appointments. Salon owners can register and start with our free tier, with optional premium features available.",
    },
    {
      question: "How do I book an appointment?",
      answer: "Simply browse salons near you, select your preferred service and time slot, and confirm your booking. You'll receive an instant confirmation via email.",
    },
    {
      question: "Can I cancel or reschedule bookings?",
      answer: "Yes, you can easily cancel or reschedule your bookings through the app. Please check the salon's cancellation policy for any specific requirements.",
    },
    {
      question: "How does the rating system work?",
      answer: "After your appointment, you'll receive a prompt to rate your experience. All ratings are from verified customers to ensure authenticity and help others make informed decisions.",
    },
    {
      question: "What are the fees for salon owners?",
      answer: "We offer flexible pricing plans for salon owners. Start with our free tier and upgrade as your business grows. Contact us for detailed pricing information.",
    },
    {
      question: "How do I manage multiple staff members?",
      answer: "Salon owners can easily add staff members through the dashboard, assign them to specific services, and manage their individual schedules and availability.",
    },
    {
      question: "Is my payment information secure?",
      answer: "Absolutely! We use industry-standard encryption and secure payment gateways to protect all your personal and financial information.",
    },
    {
      question: "What cities/areas does Slixo cover?",
      answer: "Slixo is currently available in 50+ cities and expanding rapidly. Check the app to see if salons in your area are listed, and encourage your favorite salons to join!",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">Everything you need to know about Slixo</p>
        </div>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
              <AccordionTrigger className="text-left hover:text-primary transition-smooth py-5">
                <span className="font-semibold text-lg">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
