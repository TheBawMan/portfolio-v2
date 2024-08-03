"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 84204 48228",
  },
  {
    icon: <FaEnvelope />,
    title: "E-Mail",
    description: "agdipc9@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description:
      "Dongabhanga, Narayanchak, Daspur, Paschim Medinipur, West Bengal - 721154",
  },
];

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [why, setWhy] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  function checkParams() {
    if (!email || !firstName || !lastName || !phone || !message) {
      toast.error("Enter All Required Fields");
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);
    try {
      await addDoc(collection(db, "contacts"), {
        firstName,
        lastName,
        phone,
        email,
        why,
        message,
      });
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setMessage("");
      toast.success("Message Sent");
      setDisableBtn(false);
    } catch (error) {
      toast.error("Error");
      console.log(error);
      setDisableBtn(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.2, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] xl:flex-row">
          {/* form  */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <motion.form
              onSubmit={submitHandler}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let&apos;s Work</h3>
              <p className="text-white/60">
                You can contact me directly through any medium. All my personal
                details are there but if want to test that the form is working
                or not then you can definately try it out.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  required
                />
                <Input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                />
                <Input
                  type="email"
                  placeholder="E-Mail"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                />
              </div>
              <Select value={why} onValueChange={setWhy}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Sevice</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* text area  */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your Messege Here"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <motion.button
                size="md"
                disabled={disableBtn}
                className={
                  disableBtn
                    ? "disableBtn"
                    : "border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary rounded-md py-2 w-[50%] ml-[25%]"
                }
                type="submit"
                onClick={checkParams}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
          {/* info  */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <button onClick={async ()=>{
                        await navigator.clipboard.writeText(item.description)
                        toast.success("Copied")
                      }}>
                      <div className="text-[28px]">{item.icon}</div></button>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <button onClick={async ()=>{
                        await navigator.clipboard.writeText(item.description)
                        toast.success("Copied")
                      }}><h3 className="text-xl">{item.description}</h3></button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <Toaster />
    </motion.section>
  );
};

export default Contact;
