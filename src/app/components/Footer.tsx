  "use client";

  import React, { useState, useEffect, useRef } from "react";
  import Link from "next/link";
  import {
    FaFacebookF,
    FaDribbble,
    FaSkype,
    FaLinkedinIn,
    FaYoutube,
    FaPaperPlane,
    FaEnvelope,
    FaPhone,
  } from "react-icons/fa";

  const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError("");
      setSuccess("");

      const submittedEmail = email.trim();
      setEmail("");

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(submittedEmail)) {
        setError("Please enter a valid email address.");
        return;
      }

      setLoading(true);
      try {
        const res = await fetch("/api/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: submittedEmail }),
        });

        const data = await res.json();

        if (res.ok) {
          setSuccess(data.message);
        } else {
          setError(data.message || "Something went wrong.");
        }
      } catch {
        setError("Something went wrong. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      if (success || error) {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setSuccess("");
          setError("");
        }, 5000);
      }
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }, [success, error]);

    return (
      <footer className="text-white">
        <div className="bg-gray-900 py-8 sm:py-12">
          <div className="max-w-8xl  mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Sister Concerns</h4>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li><Link href="#" className="hover:text-indigo-400">Baskota Dhuwani</Link></li>
                <li><a href="https://sriyog.com" target="_blank"  rel="noopener noreferrer" className="hover:text-indigo-400">Sriyog.Com</a></li>
                <li><a href="https://pfs.com.np" target="_blank"  rel="noopener noreferrer"className="hover:text-indigo-400">Pracas Infosys</a></li>
                <li><Link href="#"   rel="noopener noreferrer" className="hover:text-indigo-400">Media Gate</Link></li>
                <li><Link href="#" className="hover:text-indigo-400">Baskota Furniture</Link></li>
                <li><Link href="#" className="hover:text-indigo-400">Hardik Advertising</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Newsletter</h4>
              <p className="text-sm sm:text-base">Get latest updates about Finance &amp; Taxation.</p>

              <form
                className="mt-3 sm:mt-4 flex flex-col sm:flex-row gap-2 w-full"
                onSubmit={handleSubscribe}
              >
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:flex-1 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-gray-900 bg-white text-sm sm:text-base"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base disabled:opacity-60 cursor-pointer"
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>
              </form>

              {error && <p className="text-red-500 mt-2 text-sm sm:text-base">{error}</p>}
              {success && <p className="text-green-500 mt-2 text-sm sm:text-base">{success}</p>}

          
              <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6 text-lg sm:text-xl">
                <a title="facebook" href="https://www.facebook.com/baskota20236/" target="_blank" rel="noopener noreferrer"
                    className="hover:text-indigo-400"><FaFacebookF /></a>
                <a title="Fadribble" href="#" rel="noopener noreferrer" className="hover:text-indigo-400"><FaDribbble /></a>
                <a title="Skype" href="#" rel="noopener noreferrer" className="hover:text-indigo-400"><FaSkype /></a>
                <a title="Linkedin" href="#" rel="noopener noreferrer" className="hover:text-indigo-400"><FaLinkedinIn /></a>
                <a title="Youtube" href="#" rel="noopener noreferrer" className="hover:text-indigo-400"><FaYoutube /></a>
              </div>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">About Baskota Consulting</h4>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                Baskota Consulting is a Tax and Management Consulting Firm located in Biratnagar.
              </p>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li className="flex items-center gap-2"><FaPaperPlane /> Biratnagar-3, Pipal Chowk, Nepal</li>
                <li className="flex items-center gap-2"><FaEnvelope /> <a href="mailto:info@baskota.com" className="hover:text-indigo-400">info@baskotaconsulting.com.np</a></li>
                <li className="flex items-center gap-2"><FaPhone /> <a href="tel:+977-98520-20236" className="hover:text-indigo-400">+977-98520-20236</a></li>
              </ul>
            </div>

          </div>
        </div>

        <div className="bg-indigo-600 px-4 sm:px-10 py-3 sm:py-4 text-sm sm:text-base">
          <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <span>© {currentYear} Baskota Consulting Pvt. Ltd. | All Rights Reserved</span>
            <ul className="flex gap-3 sm:gap-4 mt-2 md:mt-0 text-sm sm:text-base">
              <li><Link href="/about" className="hover:text-gray-200">Site By</Link></li>
              <li><a href="https://pfs.com.np" target="_blank"  rel="noopener noreferrer"
                      className="hover:text-gray-200">Pracas Infosys</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;
