import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="flex justify-center items-center py-8">
        <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader>
            <CardTitle className="font-headline text-3xl text-primary">Contact Us</CardTitle>
            <CardDescription>
            Have a question or feedback? Fill out the form below to get in touch with our team.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <ContactForm />
        </CardContent>
        </Card>
    </div>
  );
}
