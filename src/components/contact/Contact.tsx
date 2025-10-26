import { DataContact } from "../../data/DataContact";
import ContactActionsBtn from "./ContactActionsBtn";
import ContactCard from "./ContactCard";
import ContactTitle from "./ContactTitle";

export default function Contact() {
  return (
    <section id="contact" className="py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <ContactTitle/>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {DataContact.map((item , index) => (
            <ContactCard
              key={index}
              label={item.label}
              value={item.value}
              icon={item.icon}
              link={item.link}
            />
          ))}
        </div>

        <ContactActionsBtn />

      
      </div>
    </section>
  );
}