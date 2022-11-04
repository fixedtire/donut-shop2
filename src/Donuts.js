import bw from './img/bw.png'
import brown from './img/brown.png'
import flower from './img/flower.png'
import pink from './img/pink.png'
import striped from './img/striped.png'
import red from './img/red.png'
import { useState } from 'react'

export let donuts = [
    {
        id:1,
        name:'Camel Caramel',
        description:'keep it oldschool',
        img:brown,
        price:'8.99'
    },
    {
        id:2,
        name:'Rednose Rhubarb',
        description:'get sticky wit it',
        img:red,
        price:'7.50'
    },
    {
        id:3,
        name:'Unicorn',
        description:"it's magic",
        img:pink,
        price:'10.20'
    },
    {
        id:4,
        name:'Lemon Submarine',
        description:'on board sailor!',
        img:striped,
        price:'7.60'
    },
    {
        id:5,
        name:'Chess KO',
        description:"don't overthink it",
        img:bw,
        price:'9.45'
    },
]