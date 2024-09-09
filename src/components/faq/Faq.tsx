import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SectionHeader from '../section-header/SectionHeader';
import MaxWidthWrapper from '../ui/max-width-wrapper';

export function Faq() {
  return (
    <div className=" bg-gray-100 py-2">
      <MaxWidthWrapper>
        <SectionHeader
          className="pt-10 md:pt-16 pb-12 max-w-5xl"
          headingSpanOne="Frequently Asked Questions"
          headingSpanTwo="We’re Here to Help"
          description="Got questions? We’ve got answers. Explore our FAQ section to find quick solutions to common inquiries about our services, booking process, and more. If you can’t find what you’re looking for, our support team is always ready to assist you."
        />
      </MaxWidthWrapper>
      <MaxWidthWrapper className=" max-w-3xl pb-24">
        <Accordion
          type="single"
          collapsible
          className="w-full text-base text-gray-900"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I book a meeting room?</AccordionTrigger>
            <AccordionContent className=" text-base">
              Booking a meeting room is simple! Just navigate to the "Meeting
              Rooms" page, select your preferred room, choose your date and
              time, and confirm your booking. You'll receive instant
              confirmation via email.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Can I cancel or reschedule my booking?
            </AccordionTrigger>
            <AccordionContent className=" text-base">
              Yes, you can easily cancel or reschedule your booking through the
              "My Bookings" page. Please note that cancellation policies may
              vary depending on the room or booking time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              What payment methods are accepted?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              We accept a variety of payment methods, including credit/debit
              cards and online payment services like Amar Pay. All transactions
              are secure and encrypted for your protection.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              How do I know if a room is available?
            </AccordionTrigger>
            <AccordionContent className=" text-base">
              Our platform offers real-time availability updates. Simply select
              the room you’re interested in, and you’ll see all available dates
              and time slots instantly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Is there customer support available if I need help?
            </AccordionTrigger>
            <AccordionContent className=" text-base">
              Absolutely! Our customer support team is available 24/7 to assist
              you with any questions or issues. You can contact us via email,
              phone, or through the live chat on our website.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </MaxWidthWrapper>
    </div>
  );
}
