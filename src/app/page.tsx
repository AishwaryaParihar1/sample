'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };
  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/reset');
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f4ff]">
      <div className="shadow-lg rounded-md border border-gray-200 w-[420px] bg-white">
        <div className="flex bg-primary text-white text-sm font-semibold rounded-t-md">
          <div className="flex items-center gap-2 w-1/2 px-4 py-3 border-r border-white/20">
            <Image src="/images/logo.png" alt="Logo" width={32} height={32} className="rounded-sm" />
            <span className="text-red-400">Pointers Insurance <br /> Brokers</span>
          </div>
          <div className="flex items-center justify-center w-1/2 px-2 py-3">
            LOG-IN TO YOUR ACCOUNT
          </div>
        </div>
        <div className="p-6">
          <form className="space-y-4" onSubmit={handleLogin}>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">
                <i className="fa fa-user" />
              </span>
              <Input type="text" placeholder="Username" className="pl-10" defaultValue="AKS" />
            </div>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">
                <i className="fa fa-lock" />
              </span>
              <Input type="password" placeholder="Password" className="pl-10" />
            </div>
            <Button type="submit" className="w-full bg-primary text-white font-semibold hover:bg-blue-800">
              Login
            </Button>
            <div className="text-right text-sm mt-2">
              <a href="#" onClick={handleForgotPassword} className="text-red-600 hover:underline">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
