import CareInstructions from '@/components/home/careInstructions'
import ContactUs from '@/components/home/contactUs'
import { ImageSlider } from '@/components/home/imageSlider'
import OurLink from '@/components/home/ourLink'
import ProductDetails from '@/components/home/productDetils'
import SizeChart from '@/components/home/table/sizeChart'
import { db } from '@/server'
import React from 'react'
import {products} from '@/server/schema'
import { eq } from 'drizzle-orm'

type Props = {
    params : Promise<{id : string}>
}


const page = async({params} : Props) => {
    const {id} = await params 
    // const ProductId = Number(id) // convert to number
    console.log('id',id);


    const productsInfo = await db.query.products.findFirst({
      where : eq(products.id,Number(id)),
      with : {
        images:true , 
        cares : true 
      }
    })

    console.log('productsInfo',productsInfo);
     

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