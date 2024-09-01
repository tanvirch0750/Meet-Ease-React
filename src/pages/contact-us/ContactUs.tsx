import ContactForm from '@/components/contact-form/ContactForm';
import { Faq } from '@/components/faq/Faq';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';

export default function ContactUsPage() {
  return (
    <div>
      <Header pageType="normal" />
      <ContactForm />
      <Faq />
      <Footer />
    </div>
  );
}
