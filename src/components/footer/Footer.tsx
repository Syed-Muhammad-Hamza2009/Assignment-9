import React from 'react'
import { Github,  Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#1b2232] mt-20 text-slate-200 py-12 ">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Hamza</h3>
            <p className="text-slate-400 mb-4">
              Frontend developer passionate about creating efficient, responsive and functional user interfaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-400">
              <Link href="/blog" className="hover:text-slate-200 transition-colors"><li>Blog</li>
              </Link>
              <Link href="/about" className="hover:text-slate-200 transition-colors"><li>About</li>
              </Link>
              <Link href="/learnTech" className="hover:text-slate-200 transition-colors"><li>Learn Tech</li>
              </Link>
              <Link href="/" className="hover:text-slate-200 transition-colors"><li>Home</li>
              </Link>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4 gap-5">
              <Link href="" className="hover:text-slate-200 transition-colors">
                <Github size={24} />
              </Link>
              
              <Link href="" className="hover:text-slate-200 transition-colors">
                <Linkedin size={24} />
              </Link>

              <Link href="" className="hover:text-slate-200 transition-colors">
                <Mail size={24} />
              </Link>
              
            </div>
            <p className="text-slate-400">
              Get in touch or follow my work through any of these channels.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} Hamza. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="/privacy" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-slate-200 transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
