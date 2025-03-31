import {Instagram, Facebook, Twitter } from 'lucide-react'
import { Link } from 'react-router';

const Footer = () => {
   return (
      <div className="p-3 px-6 flex justify-between w-full bg-gray-100 h-20 content-center">
         <div className="text-gray-400 ">
            All rights reserved. Copyright c 2024 AssessAI
         </div>
         <div className="flex space-x-1">
            <div className="text-gray-400"><Link to="/"><Facebook /></Link></div>
            <div className="text-gray-400"><Link to="/"><Instagram /></Link></div>
            <div className="text-gray-400"><Link to="/"><Twitter /></Link></div>
         </div>
      </div>
   )
}

export default Footer;