import ContactForm from '@/components/contact-form/ContactForm';
import { Faq } from '@/components/faq/Faq';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import MaxWidthWrapper from '@/components/ui/max-width-wrapper';

export default function ContactUsPage() {
  return (
    <>
      <Header pageType="normal" />
      <MaxWidthWrapper>
        <ContactForm />
      </MaxWidthWrapper>
      <Faq />
      <Footer />
    </>
  );
}
