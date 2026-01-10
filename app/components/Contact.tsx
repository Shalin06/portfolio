"use client"
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconPhone } from "@tabler/icons-react"
import { Button } from "./ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "./ui/field"
import { Input } from "./ui/input"
import Link from "next/link"
import { Textarea } from "./ui/textarea"
import React, { useState } from "react"
import { sendMail } from "@/lib/send-email"


type ContactValues = {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

function validateInput(contact: ContactValues): boolean {
    if (!/^\d+$/.test(contact.phone)) {
        alert("Phone must contain only numbers");
        return false;
    }
    return true;
}

function Contact() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })
    const [loading, setLoading] = useState(false)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!validateInput(values)) {
            return;
        }
        try {
            setLoading(true);
            await sendMail({
                email: values.email,
                subject: values.subject,
                text: `Name: ${values.name}\n Email: ${values.email} \n Phone: ${values.phone}\nMessage: ${values.message}`,
            });
        } catch (error) {
            alert(`Error in sending email`)
        } finally {
            alert('Message sent')
            setValues({
                name: "",
                email: "",
                subject: "",
                message: "",
                phone: ""
            })
            setLoading(false);
        }
    }
    return (
        <div
            id="contact-section"
            className="flex justify-center w-full px-4 sm:px-6 lg:px-8"
        >
            <Card
                className="
                    w-2/3 max-w-6xl
                    bg-transparent border-none shadow-none
                    grid grid-cols-1 md:grid-cols-[40%_60%]
                    gap-6 md:gap-10
                    "
            >
                {/* LEFT */}
                <CardContent className="text-white flex flex-col justify-center gap-4">
                    <CardTitle className="text-2xl sm:text-3xl">Contact Me</CardTitle>
                    <CardDescription className="text-white/80 leading-relaxed">
                        Currently looking to join as a full-stack developer focused on scalable
                        systems and accessible design.
                    </CardDescription>

                    <Card
                        className="
                        w-full
                        items-center
                        justify-center
                        bg-transparent
                        backdrop-blur-xl border border-white/10
                        rounded-xl p-4 flex flex-col gap-3
                        "
                    >
                        <div className="flex items-center gap-3">
                            <Link href="mailto:shalin6102003@gmail.com" className="text-white/90 flex gap-1">
                                <IconMail className="text-purple-500" />
                                Shalin Jain
                            </Link>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link href="tel:9328096484" className="text-white/90 flex gap-1">
                                <IconPhone className="text-purple-500" />
                                9328096484
                            </Link>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link href="https://www.linkedin.com/in/shalin-jain-88b761237/" className="text-white/90 flex gap-1">
                                <IconBrandLinkedin className="text-purple-500" />LinkedIn
                            </Link>
                        </div>

                        <div className="flex items-center gap-3">
                            <Link href="https://github.com/Shalin06/" className="text-white/90 flex gap-1">
                                <IconBrandGithub className="text-purple-500" />GitHub
                            </Link>
                        </div>
                    </Card>
                </CardContent>

                {/* RIGHT */}
                <CardContent className="text-white">
                    <form onSubmit={handleSubmit}>
                        <Card
                            className="text-white
            bg-transparent
            backdrop-blur-xl border border-white/10
            rounded-2xl p-5 sm:p-6
            flex flex-col gap-6
          "
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <Field>
                                    <FieldLabel>Name</FieldLabel>
                                    <Input name="name" required onChange={handleChange} className="text-shadow-white" placeholder="John Doe" />
                                </Field>
                                <Field>
                                    <FieldLabel>Phone</FieldLabel>
                                    <Input name="phone" type="tel" onChange={handleChange} className="text-shadow-white" placeholder="987654321" />
                                </Field>
                                <Field>
                                    <FieldLabel>Email</FieldLabel>
                                    <Input name="email" type="email" required onChange={handleChange} className="text-shadow-white" placeholder="John.Doe@example.com" />
                                </Field>
                                <Field>
                                    <FieldLabel>Subject</FieldLabel>
                                    <Input name="subject" required onChange={handleChange} className="text-shadow-white" placeholder="Subject for Message" />
                                </Field>
                            </div>

                            <Field>
                                <FieldLabel>Message</FieldLabel>
                                <Textarea name="message" rows={4} onChange={handleChange} className="text-shadow-white" placeholder="Your Message" />
                            </Field>

                            <Button
                                type="submit"
                                className="
              self-center w-full sm:w-1/2
              bg-purple-600 hover:bg-purple-700
              transition-all
            "
                                disabled={loading}
                            >
                                {loading && (
                                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                )}
                                {loading ? "Sending..." : "Send Message"}
                            </Button>
                        </Card>
                    </form>
                </CardContent>
            </Card>
        </div>

    )
}

export default Contact;