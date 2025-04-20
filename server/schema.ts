import { relations } from "drizzle-orm";
import {
    timestamp,
    pgTable,
    text,
    primaryKey,
    integer,
    pgEnum,
    boolean,
    serial,
    real,
  } from "drizzle-orm/pg-core";


export const products = pgTable('product',{
    id : serial('id').primaryKey(),
    color : text('color'),
    release_date : text('release_date'),
    material : text('material'),
    shopFrom : text('shopFrom'),
    shopFromUrl : text('shopFromUrl'),
})

export const productImages = pgTable('product_images',{
    id: serial('id').primaryKey(),
    productId : integer('productId').references(() => products.id , {onDelete : 'cascade'}).notNull(),
    imageUrl : text('imageUrl').notNull(),
    imageAlt : text('imageAlt').notNull(),
    serialNum : serial('serialNum').notNull(),
})

export const productCares = pgTable('product_care',{
    id: serial('id').primaryKey(),
    productId : integer('productId').references(() => products.id , {onDelete : 'cascade'}).notNull(),
    careUrl : text('careUrl').notNull(),
    careAlt : text('careAlt').notNull(),
    serialNum : serial('serialNum').notNull(),
})

// Products -> Product Images (One-to-Many)
export const productImageRelation = relations(products,({many})=> ({
    images : many(productImages,{
        relationName : "product_images"
    }),
}))

// Product Images -> Products (Many-to-One)
export const productImageRelations = relations(productImages,({one})=> ({    
    product : one(products, { 
        fields: [productImages.productId],
        references: [products.id],
        relationName : "product_images"
    })
    
}))

// Products -> Product Care (One-to-Many)
export const productCareRelation = relations(products,({many})=> ({
    cares : many(productCares,{
        relationName : "product_cares"
    }),
}))

// Product care -> Products (Many-to-One)
export const productCareRelations = relations(productCares,({one})=> ({    
    product : one(products, { 
        fields: [productCares.productId],
        references: [products.id],
        relationName : "product_cares"
    })
    
}))

