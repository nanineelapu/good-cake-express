"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Send, Calendar, Clock, MapPin, Cake, Phone, User, CheckCircle2, ChevronRight, ArrowRight, ShieldCheck, UserCheck } from 'lucide-react';

const cakeTypes = ["Bento Cake", "Specialty Cake", "Snack Box", "Wedding Custom", "Anniversary Special"];
const sectors = ["Sector 09", "Sector 10", "Sector 11", "Sector 15", "PU Campus", "PEC Campus", "Other TRICITY"];

export default function OrderPage() {
   const [step, setStep] = useState(1);
   const [formSubmitted, setFormSubmitted] = useState(false);

   const [formData, setFormData] = useState({
      name: "",
      phone: "",
      cakeType: "Bento Cake",
      date: "",
      time: "Evening (4PM - 8PM)",
      sector: "Sector 09",
      message: ""
   });

   const nextStep = () => setStep(prev => prev + 1);

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setFormSubmitted(true);
   };

   return (
      <div className="min-h-screen bg-white text-text pt-32 pb-40 overflow-hidden">

         {/* BACKGROUND DECOR (Kinetic) */}
         <div className="fixed inset-0 pointer-events-none opacity-[0.02] select-none">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[30vw] font-display font-black leading-none uppercase italic -translate-x-20">DISPATCH</div>
         </div>

         <main className="container mx-auto px-6 relative z-10">

            <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-20">

               {/* LEFT: THE TERMINAL (Form) */}
               <div className="lg:col-span-7">
                  <div className="flex flex-col gap-6 mb-12">
                     <div className="flex items-center gap-4">
                        <div className="h-px w-20 bg-primary" />
                        <span className="text-[10px] font-mono font-black uppercase tracking-[0.5em] text-primary">Order_Protocol_Initiated</span>
                     </div>
                     <h1 className="text-6xl md:text-8xl font-display font-black uppercase italic tracking-tighter leading-[0.8]">
                        INITIATE <br /> <span className="text-primary not-italic">DISPATCH.</span>
                     </h1>
                  </div>

                  <AnimatePresence mode='wait'>
                     {!formSubmitted ? (
                        <motion.form
                           key="form"
                           initial={{ opacity: 0, x: -20 }}
                           animate={{ opacity: 1, x: 0 }}
                           exit={{ opacity: 0, x: 20 }}
                           onSubmit={handleSubmit}
                           className="flex flex-col gap-10"
                        >
                           {/* Segment 01: Identity */}
                           <div className="flex flex-col gap-8 p-10 bg-[#F9F9F9] border border-black/5 rounded-[3rem]">
                              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-text/20">Segment_01 // Identity</span>
                              <div className="grid md:grid-cols-2 gap-6">
                                 <div className="flex flex-col gap-3">
                                    <label className="text-[10px] font-mono font-black uppercase tracking-widest text-text/40 ml-4">Full Name</label>
                                    <div className="relative group">
                                       <User className="absolute left-6 top-1/2 -translate-y-1/2 text-text/20 group-focus-within:text-primary transition-colors" size={18} />
                                       <input
                                          type="text"
                                          required
                                          className="w-full bg-white border border-black/5 rounded-full py-4 pl-16 pr-6 text-sm font-medium focus:border-primary focus:ring-0 transition-all outline-none"
                                          placeholder="Recipient Name"
                                          value={formData.name}
                                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                       />
                                    </div>
                                 </div>
                                 <div className="flex flex-col gap-3">
                                    <label className="text-[10px] font-mono font-black uppercase tracking-widest text-text/40 ml-4">Contact Logic</label>
                                    <div className="relative group">
                                       <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-text/20 group-focus-within:text-primary transition-colors" size={18} />
                                       <input
                                          type="tel"
                                          required
                                          className="w-full bg-white border border-black/5 rounded-full py-4 pl-16 pr-6 text-sm font-medium focus:border-primary focus:ring-0 transition-all outline-none"
                                          placeholder="+91 MOBILE"
                                          value={formData.phone}
                                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                       />
                                    </div>
                                 </div>
                              </div>
                           </div>

                           {/* Segment 02: Unit Spec */}
                           <div className="flex flex-col gap-8 p-10 bg-[#F9F9F9] border border-black/5 rounded-[3rem]">
                              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-text/20">Segment_02 // Unit Selection</span>
                              <div className="grid md:grid-cols-2 gap-6">
                                 <div className="flex flex-col gap-3">
                                    <label className="text-[10px] font-mono font-black uppercase tracking-widest text-text/40 ml-4">Cake Category</label>
                                    <div className="relative">
                                       <Cake className="absolute left-6 top-1/2 -translate-y-1/2 text-text/20" size={18} />
                                       <select
                                          className="w-full bg-white border border-black/5 rounded-full py-4 pl-16 pr-6 text-sm font-medium appearance-none outline-none focus:border-primary"
                                          value={formData.cakeType}
                                          onChange={(e) => setFormData({ ...formData, cakeType: e.target.value })}
                                       >
                                          {cakeTypes.map(type => <option key={type} value={type}>{type}</option>)}
                                       </select>
                                    </div>
                                 </div>
                                 <div className="flex flex-col gap-3">
                                    <label className="text-[10px] font-mono font-black uppercase tracking-widest text-text/40 ml-4">Target Sector</label>
                                    <div className="relative">
                                       <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-text/20" size={18} />
                                       <select
                                          className="w-full bg-white border border-black/5 rounded-full py-4 pl-16 pr-6 text-sm font-medium appearance-none outline-none focus:border-primary"
                                          value={formData.sector}
                                          onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                                       >
                                          {sectors.map(s => <option key={s} value={s}>{s}</option>)}
                                       </select>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           {/* Segment 03: Temporal */}
                           <div className="flex flex-col gap-8 p-10 bg-[#F9F9F9] border border-black/5 rounded-[3rem]">
                              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-text/20">Segment_03 // Temporal Data</span>
                              <div className="grid md:grid-cols-2 gap-6">
                                 <div className="flex flex-col gap-3">
                                    <label className="text-[10px] font-mono font-black uppercase tracking-widest text-text/40 ml-4">Arrival Date</label>
                                    <div className="relative group">
                                       <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 text-text/20 group-focus-within:text-primary transition-colors" size={18} />
                                       <input
                                          type="date"
                                          required
                                          className="w-full bg-white border border-black/5 rounded-full py-4 pl-16 pr-6 text-sm font-medium outline-none focus:border-primary"
                                          value={formData.date}
                                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                       />
                                    </div>
                                 </div>
                                 <div className="flex flex-col gap-3">
                                    <label className="text-[10px] font-mono font-black uppercase tracking-widest text-text/40 ml-4">Dispatch Slot</label>
                                    <div className="relative">
                                       <Clock className="absolute left-6 top-1/2 -translate-y-1/2 text-text/20" size={18} />
                                       <select
                                          className="w-full bg-white border border-black/5 rounded-full py-4 pl-16 pr-6 text-sm font-medium appearance-none outline-none focus:border-primary"
                                          value={formData.time}
                                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                       >
                                          <option>Morning (10AM - 1PM)</option>
                                          <option>Afternoon (1PM - 4PM)</option>
                                          <option>Evening (4PM - 8PM)</option>
                                          <option>Night (8PM - 11PM)</option>
                                       </select>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <button
                              type="submit"
                              className="w-full py-8 bg-black text-white rounded-full font-mono font-black text-xs uppercase tracking-[0.6em] hover:bg-primary transition-all shadow-3xl flex items-center justify-center gap-6 group"
                           >
                              EXECUTE DISPATCH PROTOCOL
                              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                           </button>
                        </motion.form>
                     ) : (
                        <motion.div
                           initial={{ scale: 0.9, opacity: 0 }}
                           animate={{ scale: 1, opacity: 1 }}
                           className="flex flex-col items-center text-center p-20 bg-primary/5 rounded-[4rem] border-2 border-primary/20"
                        >
                           <CheckCircle2 size={80} className="text-primary mb-10" />
                           <h2 className="text-5xl font-display font-black uppercase italic tracking-tighter mb-4">SUCCESSFUL <br /> DISPATCH.</h2>
                           <p className="text-sm font-mono font-bold uppercase tracking-widest text-text/60 leading-loose">
                              ORDER SERIAL: TGC-2024-XR9<br />
                              RECIPIENT: {formData.name}<br />
                              ESTIMATED SYNC: {formData.date}
                           </p>
                           <button
                              onClick={() => setFormSubmitted(false)}
                              className="mt-12 px-10 py-4 bg-black text-white rounded-full font-mono font-black text-[10px] uppercase tracking-widest"
                           >
                              INITIATE NEW PROTOCOL
                           </button>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </div>

               {/* RIGHT: THE SUMMARY (Technical Side) */}
               <div className="lg:col-span-5 h-fit lg:sticky lg:top-40">
                  <div className="p-10 border border-black/5 rounded-[4rem] bg-[#FBFBFB] relative overflow-hidden">
                     {/* Scanner decorative line */}
                     <div className="absolute top-0 left-0 w-full h-px bg-primary/30 animate-scan" />

                     <div className="flex flex-col gap-10 relative z-10">
                        <div className="flex items-center justify-between border-b border-black/5 pb-10">
                           <span className="text-[10px] font-mono font-black uppercase tracking-[0.5em] text-text/20">Summary_Audit</span>
                           <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary italic font-black font-display text-xl">
                              N
                           </div>
                        </div>

                        <div className="space-y-6">
                           <div className="flex justify-between items-end">
                              <span className="text-text/30 text-[10px] font-mono font-black uppercase">Unit Type</span>
                              <div className="flex-1 border-b border-dashed border-black/10 mx-4 h-1 mb-1" />
                              <span className="text-sm font-display font-black italic uppercase">{formData.cakeType}</span>
                           </div>
                           <div className="flex justify-between items-end">
                              <span className="text-text/30 text-[10px] font-mono font-black uppercase">Destination</span>
                              <div className="flex-1 border-b border-dashed border-black/10 mx-4 h-1 mb-1" />
                              <span className="text-sm font-display font-black italic uppercase">{formData.sector}</span>
                           </div>
                           <div className="flex justify-between items-end">
                              <span className="text-text/30 text-[10px] font-mono font-black uppercase">Sync Date</span>
                              <div className="flex-1 border-b border-dashed border-black/10 mx-4 h-1 mb-1" />
                              <span className="text-sm font-display font-black italic uppercase">{formData.date || "PENDING"}</span>
                           </div>
                        </div>

                        <div className="p-8 bg-black rounded-3xl mt-6 flex flex-col gap-4">
                           <div className="flex justify-between items-center text-white/40">
                              <span className="text-[9px] font-mono font-black uppercase tracking-widest">Base Dispatch Quote</span>
                              <span className="text-[9px] font-mono font-black uppercase italic tracking-widest">v.01</span>
                           </div>
                           <div className="flex justify-between items-center text-white">
                              <span className="text-xs font-mono font-black uppercase tracking-[0.2em]">Estimate</span>
                              <span className="text-2xl font-display font-black italic tracking-tighter uppercase text-primary">₹ TBD</span>
                           </div>
                           <div className="text-[8px] font-mono font-bold text-white/20 uppercase tracking-[0.3em] mt-4">
                              Final audit conducted via phone dispatch for exact customization metrics.
                           </div>
                        </div>

                        <div className="flex flex-col gap-4 pt-10">
                           <div className="flex items-center gap-4 text-text/20">
                              <ShieldCheck size={16} />
                              <span className="text-[9px] font-mono font-black uppercase tracking-widest">100% Eggless Security Clearance</span>
                           </div>
                           <div className="flex items-center gap-4 text-text/20">
                              <UserCheck size={16} />
                              <span className="text-[9px] font-mono font-black uppercase tracking-widest">Manual Dispatch Verification</span>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Architectural Quote */}
                  <p className="mt-12 text-[10px] font-mono font-bold text-text/20 uppercase tracking-widest leading-loose italic max-w-xs ml-auto text-right">
                     "Not just a cake. A technical dispatch of flavor density and architectural precision."
                  </p>
               </div>

            </div>

         </main>

      </div>
   );
}
