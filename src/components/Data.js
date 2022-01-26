import React, {Component, useState, useEffect} from 'react';
import { appImages } from '../assets/utility';
import { appColor, COLORS, SIZES, } from '../constants/colors';

export const [DataItems, setDataItems] = useState([ 

]);
export const [cardIcons, setcardIcons] = useState([ 
  {id: '1', title: 'Student Preview', image: appImages.burger},
  {id: '2', title: 'impressions', image: appImages.pizza},
  {id: '3', title: 'Profile', image: appImages.panini},
  {id: '4', title: 'pasta', image: appImages.pasta},
  {id: '5', title: 'sandwhich', image: appImages.sandwhich},
  {id: '6', title: '1Student Preview', image: appImages.burger},
  {id: '7', title: '2impressions', image: appImages.pizza},
  {id: '8', title: '3Profile', image: appImages.panini},
  {id: '9', title: '4pasta', image: appImages.pasta},
  {id: '10', title:'5sandwhich', image: appImages.sandwhich},
]);
