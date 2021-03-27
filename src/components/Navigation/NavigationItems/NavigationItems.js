import React from 'react'

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burger Oluştur</NavigationItem>
        <NavigationItem link="/">Ödeme</NavigationItem>
    </ul>
)

export default navigationItems