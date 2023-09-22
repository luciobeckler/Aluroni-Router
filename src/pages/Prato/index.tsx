import React from 'react';
import styles from './Prato.module.scss';
import { useLocation, useParams } from 'react-router-dom';

export default function Prato() {
    const { state } = useLocation();
    const { prato } = state;

    console.log(state);
    console.log(prato);
    return <div>Prato</div>;
}
