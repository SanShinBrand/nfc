
import CareInstructions from '@/components/home/careInstructions'
import ContactUs from '@/components/home/contactUs'
import { ImageSlider } from '@/components/home/imageSlider'
import OurLink from '@/components/home/ourLink'
import ProductDetails from '@/components/home/productDetils'
import SizeChart from '@/components/home/table/sizeChart'
import React from 'react'

type Props = {
    params : Promise<{id : string}>
}


const page = async({params} : Props) => {
    const {id} = await params 
    // const ProductId = Number(id) // convert to number
    console.log('id',id);
    

    

  return (
    <main className="flex flex-col gap-5 sm:gap-7 md:gap-9">
    <ImageSlider />
    <OurLink/>
    <ProductDetails id = {id} />
    <CareInstructions/>
    <SizeChart/>
    <ContactUs/>
    {/* <Footer/> */}
  </main>
  )
}

export default page