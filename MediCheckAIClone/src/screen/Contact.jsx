import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Header";


export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col pt-12 bg-gradient-to-r from-blue-400 to-blue-500">
      <Navbar bgColor={"bg-gradient-to-r from-blue-400 to-blue-500"} />
      <ContactForm />
      <Footer />
    </main>
  );
}
