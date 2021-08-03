// import { useState, useEffect } from 'react';
import styles from './currencies.module.css';

const Currencies = ({ color, base, currencies }) => {
    return (
        <table className='pair-table'>
            <thead>
            {Object.entries(currencies).map((pair, i) => {
                return <tr className='table-row' key={i}>
                    <th className='table-element'>{base + pair[0]}</th>
                    <th><div className={styles[`${color}-currency-price`]}>{pair[1].toFixed(4)}</div></th>    
                </tr>
            })}
            </thead>
        </table>
    )
}

export default Currencies;