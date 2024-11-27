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
import { LayoutGrid, Link, Mail } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { QRCodeSVG } from 'qrcode.react';

function QrCodeGenerator() {

  const [url, setUrl] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [bgColor, setBgColor] = useState("#057fff");
  const [logo, setLogo] = useState<string | null>(null);
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
                          className='w-full border-2 border-white/70 focus:border-[#057fff]/70 rounded-md outline-none focus-visible:ring-0 placeholder:text-gray-400'
                        />
                      </div>
                    </div>
                  </TabsContent>
              </Tabs>
              <div className='space-y-4'>
                {/* color selector section */}
                <div className='flex space-x-4'>
                  {/* QR COlor section */}
                  <div className='space-y-2 flex-1'>
                    <Label 
                      htmlFor='color'
                      className='font-semibold text-[#057fff]'
                    >
                      QR Code Color
                    </Label>
                    <div className='flex items-center gap-1'>
                      <div className='relative w-12 flex-1 h-12 rounded-md border-2 border-white/70'
                      style={{backgroundColor: color}}
                      >
                        <Input 
                          type='color'
                          id='color'
                          value={color}
                          onChange={(e) => setColor(e.target.value)}
                          className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                        />
                      </div>
                      <Input
                        type='text'
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className='flex-1 border-2 h-12 bg-transparent border-white/70 focus:border-[#057fff]/70 rounded-md outline-none focus-visible:ring-0 placeholder:text-gray-400'
                      />
                    </div>
                  </div>

                  {/* Background Color section */}
                  <div className='space-y-2 flex-1'>
                    <Label 
                      htmlFor='color'
                      className='font-semibold text-[#057fff]'
                    >
                      Background Color
                    </Label>
                    <div className='flex items-center gap-1'>
                      <div className='relative w-12 flex-1 h-12 rounded-md border-2 border-white/70'
                      style={{backgroundColor: bgColor}}
                      >
                        <Input 
                          type='color'
                          id='color'
                          value={bgColor}
                          onChange={(e) => setBgColor(e.target.value)}
                          className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                        />
                      </div>
                      <Input
                        type='text'
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        className='flex-1 border-2 h-12 bg-transparent border-white/70 focus:border-[#057fff]/70 rounded-md outline-none focus-visible:ring-0 placeholder:text-gray-400'
                      />
                    </div>
                  </div>

                  

                </div>

                {/* select logo section */}
                <div className='space-y-2'>
                  <Label
                    htmlFor='logo'
                    className='font-bold text-[#037fff]'
                  >
                    Logo
                  </Label>
                  {/* logo input section */}
                  <Input
                    type='file'
                    id='logo'
                    accept='image/*'
                    onChange={(e: any) => {
                      if(e.target.files && e.target.files[0]){
                        setLogoFile(e.target.files[0]);

                        const reader = new FileReader();

                        reader.onloadend = () => {
                          setLogo(reader.result as string);
                        }
                        reader.readAsDataURL(e.target.files[0]);

                      }
                    }}
                    className='w-full border-2 bg-transparent border-white/70 focus:border-[#057fff]/70 rounded-md outline-none focus-visible:ring-0 placeholder:text-gray-400'
                  />
                </div>
              </div>
            </div>
            <div className='relative flex-1 bg-[#037fff] rounded-lg flex -flex-col justify-center space-y-6 '>
              <span>
                <LayoutGrid className='w-12 h-12 text-white absolute top-4 right-4'/>
              </span>

              <div id='qr-code' className='flex justify-center items-center'>
                <div className='relative '>
                  <QRCodeSVG 
                    value={url}
                    size={256}
                    fgColor={bgColor}
                    bgColor={color}
                    imageSettings={logo ? {
                      src: logo,
                      height:50,
                      width: 50,
                      excavate: true
                    }: undefined}
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>

        </Card>
    </div>
  )
}

export default QrCodeGenerator