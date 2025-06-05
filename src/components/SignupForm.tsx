import React, { useState } from "react";

interface FormData {
  email: string;
  isArtist: boolean;
  isBrand: boolean;
}

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    isArtist: true,
    isBrand: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.email) {
      setError("Email is required");
      return;
    }

    if (!formData.isArtist && !formData.isBrand) {
      setError("Please select at least one option");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after successful submission
      setFormData({
        email: "",
        isArtist: true,
        isBrand: false,
      });
    }, 1500);
  };

  return (
    <section id="signup" className="py-24 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-white">
              join the waitlist
            </span>
          </h2>

          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-12 text-center">
            If you are an artist or brand, be among the first to experience the
            future of the creative economy. Early access opens soon.
          </p>

          {isSubmitted ? (
            <div className="bg-gradient-to-r from-pink-500/40 via-purple-500/20 to-white/20 backdrop-blur-sm p-12 text-center">
              <h3 className="text-white text-2xl font-bold mb-4">YOU'RE IN!</h3>
              <p className="text-white/80 text-lg">
                Thank you for joining our waitlist. We'll be in touch soon with
                early access details.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/60 to-white/60"></div>
              <div className="relative border border-white/20 p-8 md:p-12">
                <div className="mb-8">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/30 text-white p-4 focus:outline-none focus:border-purple-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="mb-8">
                  <p className="block text-white text-lg font-bold mb-4">
                    I am a: (select all that apply)
                  </p>

                  <div className="flex flex-col space-y-4">
                    <label className="flex items-center text-white cursor-pointer">
                      <input
                        type="checkbox"
                        name="isArtist"
                        checked={formData.isArtist}
                        onChange={handleChange}
                        className="mr-3 h-5 w-5 text-purple-500"
                      />
                      Artist / Creator
                    </label>

                    <label className="flex items-center text-white cursor-pointer">
                      <input
                        type="checkbox"
                        name="isBrand"
                        checked={formData.isBrand}
                        onChange={handleChange}
                        className="mr-3 h-5 w-5 text-purple-500"
                      />
                      Brand / Agency
                    </label>
                  </div>
                </div>

                {error && (
                  <div className="mb-6 text-pink-500 font-bold">{error}</div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-white text-black px-8 py-4 text-lg font-bold uppercase tracking-wider transition-all ${
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:bg-opacity-90"
                  }`}
                >
                  {isSubmitting ? "SUBMITTING..." : "GET EARLY ACCESS"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
