import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
      !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
      !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ) {
      toast.error("❌ EmailJS environment variables are missing!");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("✅ Message sent successfully!");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          toast.error("❌ Failed to send: " + error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="mt-20">
      <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="rounded-2xl p-6 bg-gray-900/40 border border-gray-800 flex flex-col gap-3"
      >
        <input
          name="name"
          placeholder="Your name"
          className="bg-transparent border border-gray-700 rounded px-3 py-2 outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="bg-transparent border border-gray-700 rounded px-3 py-2 outline-none"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          className="bg-transparent border border-gray-700 rounded px-3 py-2 outline-none"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className={`mt-2 px-4 py-2 rounded bg-primary text-black font-medium flex items-center justify-center gap-2 ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send"
          )}
        </button>
      </form>
    </section>
  );
}
