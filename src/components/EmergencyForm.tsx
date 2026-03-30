import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, CheckCircle, Send, AlertTriangle, X } from 'lucide-react';

interface FormData {
  phone: string;
  location: string;
  notes: string;
}

// ⚠️ Replace this with your real webhook URL (Make.com, Zapier, etc.)
// Leave empty to skip the network call and just show success (useful for local dev)
const WEBHOOK_URL = '';

export default function EmergencyForm({ onClose }: { onClose?: () => void }) {
  const [formData, setFormData] = useState<FormData>({
    phone: '',
    location: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      if (WEBHOOK_URL) {
        const response = await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            phone: formData.phone,
            location: formData.location,
            notes: formData.notes,
            timestamp: new Date().toISOString(),
          }),
        });
        if (!response.ok) throw new Error(`Server error: ${response.status}`);
      }
      setIsSubmitted(true);
    } catch (err) {
      setSubmitError("We couldn't process your request. Please call us immediately.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-none border-4 border-black p-8 max-w-md mx-auto text-center shadow-[12px_12px_0px_var(--color-primary-container)]">
        <div className="w-20 h-20 bg-black text-white rounded-none border-4 border-black flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-primary-container" />
        </div>

        <h3 className="font-display text-4xl mb-2 uppercase">DISPATCH CONFIRMED</h3>
        <p className="text-black font-bold mb-6">
          We received your request. A technician will call you within 2 minutes to confirm your exact location.
        </p>

        <div className="bg-primary-container border-4 border-black p-4 mb-6">
          <div className="text-sm font-bold uppercase tracking-wider mb-1">Target Arrival</div>
          <div className="text-4xl font-display text-black">15 MINUTES</div>
        </div>

        <div className="space-y-4">
          <a
            href="tel:+12819890245"
            className="block w-full bg-black text-white border-4 border-black font-display tracking-widest text-xl py-4 flex items-center justify-center gap-3 transition-colors hover:bg-primary-container hover:text-black"
          >
            <Phone className="w-5 h-5 fill-current" />
            CALL NOW INSTEAD
          </a>
          {onClose && (
            <button
              onClick={onClose}
              className="w-full bg-white text-black border-4 border-black font-bold py-4 hover:bg-black hover:text-white transition-colors uppercase tracking-widest"
            >
              CLOSE
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-none overflow-hidden mx-auto w-full">
      {/* Header */}
      <div className="bg-black p-6 text-white border-b-4 border-black relative">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-none border-2 border-transparent hover:border-white transition-colors flex items-center justify-center"
          >
            <X className="w-6 h-6" />
          </button>
        )}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-primary-container text-black border-2 border-black rounded-none flex items-center justify-center">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <div>
            <h2 className="font-display text-4xl leading-none tracking-wide text-primary-container uppercase">
              EMERGENCY DISPATCH
            </h2>
            <p className="text-sm font-bold uppercase tracking-wider mt-2 opacity-90">
              Enter your details for immediate dispatch.
            </p>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="p-6 md:p-8 bg-surface">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Phone */}
          <div>
            <label className="block text-sm font-bold text-black uppercase tracking-widest mb-2">Your phone number *</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-black" />
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full pl-14 pr-4 py-4 rounded-none border-4 border-black focus:border-primary-container focus:ring-0 focus:outline-none transition-all placeholder:text-black/30 font-bold text-lg"
                placeholder="(281) 989-0245"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-bold text-black uppercase tracking-widest mb-2">Where are you? (Address or intersection) *</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-black" />
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full pl-14 pr-4 py-4 rounded-none border-4 border-black focus:border-primary-container focus:ring-0 focus:outline-none transition-all placeholder:text-black/30 font-bold text-lg"
                placeholder="123 Main St, College Station, TX"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-bold text-black uppercase tracking-widest mb-2">What needs opening? (e.g., 2018 Honda Civic)</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-4 rounded-none border-4 border-black focus:border-primary-container focus:ring-0 focus:outline-none transition-all resize-none font-bold"
              rows={2}
              placeholder="e.g. 2018 Honda Civic, keys in trunk"
            />
          </div>

          {/* Submit */}
          <div className="pt-2">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02, x: -2, y: -2, boxShadow: '8px 8px 0px #000' }}
              whileTap={{ scale: 0.98, x: 0, y: 0, boxShadow: '0px 0px 0px #000' }}
              className="w-full bg-primary-container text-black border-4 border-black font-display text-4xl py-6 flex items-center justify-center gap-4 disabled:opacity-50 transition-all rounded-none uppercase"
            >
              {isSubmitting ? (
                'SENDING...'
              ) : (
                <>
                  <Send className="w-8 h-8" />
                  DISPATCH NOW
                </>
              )}
            </motion.button>
          </div>

          {submitError && (
            <div className="mt-4 p-4 border-4 border-black bg-error text-white font-bold uppercase tracking-widest">
              <p className="mb-2">⚠️ {submitError}</p>
              <a href="tel:+12819890245" className="underline hover:text-black">
                Call (281) 989-0245
              </a>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
