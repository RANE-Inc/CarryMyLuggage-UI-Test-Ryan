import React from 'react';
import { Button } from "../components/ui/button";
import DropMyMenu from '../components/ui/dropMyMenu';
import {Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,} from "../components/ui/card";

function Cart(){

    const cart = {cartNum:'1' ,airport:'YOW', battery: 50, status:'Moving To', Location:'Gate 1', timeRem:30};

    return(

        <div>
            <DropMyMenu/>

            <Card className="bg-indigo-300" style={{fontFamily:'Kanit', position:"fixed", top:"20%", left:'40%'}}>
                <CardTitle style={{paddingTop:'3%', fontSize:'225%'}}>
                    Cart {cart.cartNum}
                </CardTitle>
                <CardContent className='text-left' style={{paddingTop:'8%', fontSize:'150%'}}>
                    Airport: {cart.airport}
                </CardContent>
                <CardContent className='text-left' style={{fontSize:'150%'}}>
                    Battery: {cart.battery}
                </CardContent>
                <CardContent className='text-left' style={{fontSize:'150%'}}>
                    Status: {cart.status} {cart.Location}
                </CardContent>
                <CardContent className='text-left' style={{fontSize:'150%'}}>
                    Time Remaining: {cart.timeRem} Minutes
                </CardContent>
                <div style={{paddingTop:'10%', paddingBottom:'5%'}}>
                    <Button style={{fontSize:'150%', color:"white"}} variant="secondary"  className="bg-indigo-500">
                        <a style={{color:"white"}} href="/ScheduleCart">
                            Schedule Cart {cart.cartNum}
                        </a>
                    </Button>
                </div>
            </Card>
        </div>
    );
}

export default Cart;