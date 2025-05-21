'use client';

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f4ff]">
      <div className="shadow-lg rounded-md border border-gray-200 w-[420px] bg-white">
        {/* Header */}
        <div className="flex bg-blue-900 text-white text-sm font-semibold rounded-t-md">
          <div className="flex items-center gap-2 w-1/2 px-4 py-3 border-r border-white/20">
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              width={25}
              height={25}
              className="rounded-sm"
            />
            <span className="text-red-400">Sample</span>
          </div>
          <div className="flex items-center justify-center w-1/2 px-2 py-3">
            RESET PASSWORD
          </div>
        </div>

        {/* Form */}
        <div className="p-6">
          <form className="space-y-4">
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">
                <i className="fa fa-user" />
              </span>
              <Input type="email" placeholder="Email" className="pl-10" />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-900 text-white font-semibold hover:bg-blue-800"
            >
              Reset Password
            </Button>

            <div className="text-right text-sm mt-2">
              <Link href="/" className="text-red-600 hover:underline">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
