"use client"; 

import { Provider } from "@/components/ui/provider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      router.replace("/pages/Home"); 
    }
  }, []);
  return (
    <html suppressHydrationWarning>
      <body>
      
          <Provider>{children}</Provider>
        
      </body>
    </html>
  );
}