import { useState } from "react";
import svgPaths from "../imports/svg-dit2hiklf0";
import imgLYRcMwNd02 from "figma:asset/ceb1ed6c484abef22100b895ae4ed78a70cf7510.jpeg";
import Frame1457 from "../imports/Frame1454-7-1028";

interface ContactPageProps {
  selectedProduct?: {
    image: string;
    title: string;
    price: string;
  } | null;
}

export function ContactPage({ selectedProduct }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [newsletter, setNewsletter] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", newsletter);
  };

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="aspect-[3/2] lg:aspect-[4/3] overflow-hidden bg-gray-100">
              <img
                src={selectedProduct?.image || imgLYRcMwNd02}
                alt={selectedProduct?.title || "Contact"}
                className="w-full h-full object-cover"
              />
            </div>
            {selectedProduct && (
              <div className="mt-4">
                <h3 className="capitalize text-sm mb-2 text-black">{selectedProduct.title}</h3>
                <p className="uppercase text-xs text-black">{selectedProduct.price}</p>
              </div>
            )}
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-1/2">
            <h1 className="uppercase mb-6 md:mb-8">Contact us</h1>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-black bg-white px-4 py-3 text-sm text-[#717171] focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-black bg-white px-4 py-3 text-sm text-[#717171] focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-black bg-white px-4 py-3 text-sm text-[#717171] focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full border border-black bg-white px-4 py-3 text-sm text-[#717171] resize-none focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white uppercase py-3 hover:bg-gray-800 transition-colors text-xs tracking-wider text-center"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Store Information Section */}
        <div className="mt-16 md:mt-24 max-w-6xl mx-auto border-t border-gray-200 pt-12 md:pt-16">
          <Frame1457 />
        </div>
      </div>
    </div>
  );
}
