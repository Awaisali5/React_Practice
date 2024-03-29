import React from 'react'
import { useState, useEffect } from 'react';


export default function UseWindowListerner(eventType,listener ) {

    useEffect(()=>{
        window.addEventListener(eventType, listener); 
        return ()=> {
            window.removeEventListener(eventType,listener);
        };
    }, [eventType, listener]);
 
}

