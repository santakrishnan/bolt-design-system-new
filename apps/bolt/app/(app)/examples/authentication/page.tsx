import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { UserAuthForm } from "@/app/(app)/examples/authentication/components/user-auth-form"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/new-york-v4/ui/button"
import { FieldDescription } from "@/registry/new-york-v4/ui/field"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          alt="Authentication"
          className="block dark:hidden"
          height={843}
          priority
          src="/examples/authentication-light.png"
          width={1280}
        />
        <Image
          alt="Authentication"
          className="hidden dark:block"
          height={843}
          priority
          src="/examples/authentication-dark.png"
          width={1280}
        />
      </div>
      <div className="container relative hidden flex-1 shrink-0 items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute top-4 right-4 md:top-8 md:right-8"
          )}
          href="/examples/authentication"
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col p-10 text-primary lg:flex dark:border-r">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="relative z-20 flex items-center font-medium text-lg">
            <svg
              className="mr-2 h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Acme Inc
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="text-balance leading-normal">
              &ldquo;This library has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than ever
              before.&rdquo; - Sofia Davis
            </blockquote>
          </div>
        </div>
        <div className="flex items-center justify-center lg:h-[1000px] lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center gap-6 sm:w-[350px]">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="font-semibold text-2xl tracking-tight">
                Create an account
              </h1>
              <p className="text-muted-foreground text-sm">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />
            <FieldDescription className="px-6 text-center">
              By clicking continue, you agree to our{" "}
              <Link href="/terms">Terms of Service</Link> and{" "}
              <Link href="/privacy">Privacy Policy</Link>.
            </FieldDescription>
          </div>
        </div>
      </div>
    </>
  )
}
