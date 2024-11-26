'use client'
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Link, Mail } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

function QrCodeGenerator() {

  const [url, setUrl] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [bgColor, setBgColor] = useState("#057fff");
  const [logo, setLogo] = useState(null);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [qrType, setQrType] = useState("link");
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")


  return (
    <div className='relative mx-6 flex max-w-[1250px] w-full min-h-[700px] h-full'>
        <Card className='flex-1 flex flex-col w-full h-auto mx-auto bg-[#ecf7ff]/80 backdrop-blur-md shadow-sm border-2 border-white/40 rounded-xl'>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-[#037fff]">
            QR Code Generator
          </CardTitle>
        </CardHeader>
        <CardContent className='flex-1'>
          <div className='h-full flex flex-col md:flex-row gap-8'>
            <div className='flex-1 space-y-6'>
              <Tabs className='space-y-6' 
                defaultValue='link'
                onValueChange={(val) => setQrType(val)}
                >
                  <TabsList className='h-10 w-full grid grid-cols-2 bg-[#057fff] text-lg'>
                    <TabsTrigger value='link' className="text-white font-bold">
                      <Link className='w-4 h-4 mr-2'/>
                      Link
                    </TabsTrigger>
                    <TabsTrigger value='email' className='text-white font-bold'>
                      <Mail className='w-4 h-4 mr-2'/>
                      Email
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value='link'>
                    <div className='space-y-6'>
                      <div className='space-y-2'>
                        <Label htmlFor='url' className='font-semibold text-[#057fff]'>
                          URL
                        </Label>
                        {/* 38:23 */}
                        <Input 
                          id='url'
                          type='text'
                          value={url}
                          placeholder='https://example.com'
                          onChange={(e) => setUrl(e.target.value)}
                          className='w-full border-2 border-white/70 focus:border-red-300 rounded-md outline-none focus-visible:ring-0 placeholder:text-gray-400'
                        />
                      </div>
                    </div>
                  </TabsContent>
              </Tabs>
            </div>
            <div className='relative flex-1 bg-[#037fff] rounded-lg flex -flex-col justify-center space-y-6 '>
              
            </div>
          </div>
        </CardContent>

        </Card>
    </div>
  )
}

export default QrCodeGenerator