import { AuthForm } from "@/components/auth/auth-form"

export default function AuthPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center container px-4 relative">
       {/* Background */}
       <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-neutral-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(45,212,191,0.15),rgba(255,255,255,0))]" />
      </div>
      
      <AuthForm />
    </div>
  )
}
