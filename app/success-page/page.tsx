// This file makes the /success-page route work in Next.js app directory routing.

import { SuccessPage } from "@/components/success-page";
import { useRouter } from "next/navigation";

// Dummy registration data for demonstration; replace with real data as needed
const registrationData = {
  name: "Guest",
  email: "guest@example.com",
  // ...add other fields as required by RegistrationData
};

export default function SuccessPageRoute() {
  const router = useRouter();
  return (
    <SuccessPage
      registrationData={registrationData}
      onBackToHome={() => router.push("/")}
    />
  );
}
