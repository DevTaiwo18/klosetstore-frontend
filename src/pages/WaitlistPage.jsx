import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setSubmitted(true);
      // Handle API call to save email
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#ff6b6b] to-[#3b82f6] p-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-lg w-full text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight">
          KlosetStore is Almost Here! 🚀
        </h1>
        <p className="mt-3 text-lg">
          Sign up now for early access to exclusive drops! 🛍️🔥
        </p>

        <Card className="mt-6 bg-white/10 backdrop-blur-md border-none">
          <CardContent className="p-6">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white text-black p-3 rounded-md border-none focus:ring-2 focus:ring-white"
                />
                <Button type="submit" className="bg-black hover:bg-gray-900 flex items-center gap-2">
                  Join the Waitlist <ArrowRight size={18} />
                </Button>
              </form>
            ) : (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg font-medium"
              >
                🎉 You’re on the list! Stay tuned for updates.
              </motion.p>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
