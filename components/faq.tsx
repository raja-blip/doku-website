import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="digilocker">
        <AccordionTrigger>Why not just use DigiLocker?</AccordionTrigger>
        <AccordionContent>
          DigiLocker is useful as a government vault. doku is your daily operating layer:
          it understands what each document means, what is expiring next, and helps you
          retrieve the exact page instantly.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="organized">
        <AccordionTrigger>I&apos;m already organized in folders. Why switch?</AccordionTrigger>
        <AccordionContent>
          Manual folder hygiene breaks the second life gets busy. doku removes the repetitive
          work by auto-labeling, linking context across files, and surfacing action items
          before they become urgent.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="privacy">
        <AccordionTrigger>What about privacy and security?</AccordionTrigger>
        <AccordionContent>
          Private by design is non-negotiable. Sensitive document data is encrypted, access is
          tightly scoped, and every design choice is made to keep control with you.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
