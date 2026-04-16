import Section from './Section';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Github, Linkedin, Whatsapp } from './Icons';
import { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(form);
    formData.append("access_key", "9f066feb-df70-4f02-82f1-9c35703c3681");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        form.reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" title="Contact Me" subtitle="Establishing connection protocols...">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="space-y-8"
        >
          <div className="glow-card glass-dark p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              Contact Details
            </h3>
            <div className="space-y-6">
              {[
                { icon: <Mail className="text-blue-500" />, label: "Email", val: "lihini0511@gmail.com", href: "mailto:lihini0511@gmail.com" },
                { icon: <Phone className="text-blue-500" />, label: "Phone", val: "+94 71 387 3172", href: "tel:+94713873172" },
                { icon: <MapPin className="text-blue-500" />, label: "Location", val: "Gampaha, Sri Lanka" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-blue-500/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white font-medium hover:text-blue-400 transition-colors">
                        {item.val}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{item.val}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 pt-10 border-t border-white/5 flex gap-4">
               <a href="https://github.com/LihiniAthukorala" className="p-4 bg-white/5 rounded-2xl hover:bg-blue-500/10 transition-all text-white/50 hover:text-blue-400">
                 <Github size={24} />
               </a>
               <a href="https://www.linkedin.com/in/lihini-athukorala-759803347/" className="p-4 bg-white/5 rounded-2xl hover:bg-blue-500/10 transition-all text-white/50 hover:text-blue-400">
                 <Linkedin size={24} />
               </a>
               <a href="https://wa.me/94713873172" className="p-4 bg-white/5 rounded-2xl hover:bg-blue-500/10 transition-all text-white/50 hover:text-blue-400">
                 <Whatsapp size={24} />
               </a>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <form onSubmit={onSubmit} className="glow-card glass-dark p-8 rounded-3xl space-y-6">
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                   <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Name</label>
                   <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 outline-none transition-all placeholder:text-slate-800" 
                      placeholder="IDENTIFY..." 
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Email</label>
                   <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 outline-none transition-all placeholder:text-slate-800" 
                      placeholder="ADDR..." 
                   />
                </div>
             </div>
             <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Message</label>
                <textarea 
                   rows={4} 
                   name="message"
                   required
                   className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 outline-none transition-all resize-none placeholder:text-slate-800" 
                   placeholder="TRANSMISSION DATA..." 
                />
             </div>
             
             {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3 text-green-400 text-sm">
                   <CheckCircle size={18} />
                   <span>Mission accomplished! Your message was sent successfully.</span>
                </div>
             )}

             {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 text-sm">
                   <AlertCircle size={18} />
                   <span>Connection error! Please check your keys or try again later.</span>
                </div>
             )}

             <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-black text-sm uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-95 flex items-center justify-center gap-2"
             >
                {isSubmitting ? (
                   <>
                      Sending...
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                         <Send size={16} />
                      </motion.div>
                   </>
                ) : (
                   <>
                      Send
                      <Send size={16} />
                   </>
                )}
             </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
