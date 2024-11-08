import React from 'react';
import { Button } from "../components/ui/button";
import DropMyMenu from '../components/ui/dropMyMenu';


function Cart(){

    const cart = {cartNum:'1' ,airport:'', battery: 50, status:'Moving To', Location:'Gate 1', timeRem:30};

    return(

        <div>
            <DropMyMenu/>

            <div style={{fontFamily:'Kanit', position:"fixed", top:"20%", left:'40%'}}>
                <div>
                    <Button style={{fontSize:'150%', color:"white"}} variant="secondary"  className="bg-indigo-500"> 
                        Cart {cart.cartNum}
                    </Button>
                </div>
                <div className="grid grid-cols-1" style={{paddingTop:'10%', fontFamily:'Kanit', fontSize:'150%'}}>
                    <div>
                        Airport: {cart.airport}
                    </div>
                    <div>
                        Battery: {cart.battery}
                    </div>
                    <div>
                        Status: {cart.status} {cart.Location}
                    </div>
                    <div>
                        Time Remaining: {cart.timeRem} Minutes
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;