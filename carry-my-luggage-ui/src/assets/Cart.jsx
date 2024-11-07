import React from 'react';
import { Button } from "../components/ui/button";
import {Link} from 'react-router-dom';


function Cart(){

    return(
        <div style={{fontFamily:'Kanit', position:"fixed", top:"20%", left:'45%'}}>
            <div style={{fontSize:"250%"}}>
                Cart
            </div>
            <div style={{fontSize:"250%"}}>
                Screen    
            </div>
            <div className="grid grid-cols-1" style={{paddingTop:'15%'}}>

            </div>
        </div>
    );
}

export default Cart;