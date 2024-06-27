'use server';
import { Resend } from 'resend';
import EmailTemplate from './components/EmailTemplate';
import { z } from 'zod';
import { contactFormSchema } from '@/components/ui/DialogContactMe';

export const sendEmail = async (formData: z.infer<typeof contactFormSchema>) => {
  const name = formData.name;
  const email = formData.email;
  const message = formData.message;

  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

  await resend.emails.send({
    from: `${name} <${process.env.NEXT_PUBLIC_RESEND_EMAIL}>`,
    to: `${process.env.NEXT_PUBLIC_EMAIL}`,
    subject: 'Form Submission',
    react: EmailTemplate({ name, email, message }),
  });
};
