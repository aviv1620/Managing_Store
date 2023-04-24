import React from 'react'
import logo from '../../../logo.svg';
import { useNavigate } from 'react-router-dom';
import { HomePage } from '../../ui/HomePage';


export const Home = () => {

    const navigate = useNavigate();  

    const contents = ` An application for managing a store with the ability to manage products,
    customers, and purchases would be a Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Morbi feugiat massa a lorem volutpat,
    id bibendum ex hendrerit. Nullam tristique felis vitae congue tincidunt.
    Sed aliquet felis eget nulla molestie, id tempus nisi sodales.
    Sed sagittis non orci vel commodo.`

    const buttons = [
        { label: 'products', onClick: () => navigate('/products') },
        { label: 'customers', onClick: () => navigate('/customers') },
        { label: 'purchases', onClick: () => navigate('/purchases') },
    ]


    return (
        <HomePage logoSrc={logo} contents={contents} buttons={buttons}/>
    )
}
