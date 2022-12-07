import { Schema , Prop , SchemaFactory } from '@nestjs/mongoose'
import  { Document } from 'mongoose'

@Schema()
export class  Signup {
    @Prop()
    username : String ;

    @Prop({unique:true})
    email : String ;
     
    @Prop()
    password : String
} 


export type  SignupModule  =  Signup & Document 

export const  SignupSchema  = SchemaFactory.createForClass(Signup)