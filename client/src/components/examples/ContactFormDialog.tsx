import { useState } from "react";
import ContactFormDialog from '../ContactFormDialog';
import { Button } from "@/components/ui/button";

export default function ContactFormDialogExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-center p-8">
      <Button onClick={() => setOpen(true)}>Open Contact Form</Button>
      <ContactFormDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}
