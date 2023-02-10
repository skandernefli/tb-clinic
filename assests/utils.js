import React from 'react';
import {moderateScale} from 'react-native-size-matters'
//colors
export const colors={
    BACKGROUNDCOLOR:'#F9F9F9',
    TEXTCOLOR:'#FFFFFF',
    GREYTEXTCOLOR:'#5A5A5A',
    LINECOLOR:'#606060',
    PRIMARYCOLOR:'#353365',
    SECONDARYCOLOR:'#C2362F',
    ERRORCOLOR:'#F44336',
    SUCCESSCOLOR:'#4CAF50',
    HIGHLIGHTCOLOR:'',
    
}
//shadow
export const SHADAW={
    SHADAWCOLOR:'#0000',
    SHADAWOPACITY:0.2,
    SHADOWRADIUS:20,
    SHADAWOFFSET:{
        WIDTH:0,
        HEIGHT:20,
    }
}
//typography
export const FONTSIZE={
    h1: moderateScale(32),
    h2: moderateScale(28),
    h3: moderateScale(24),
    h4: moderateScale(20),
    h5: moderateScale(16),
    h6: moderateScale(12),
    h7: moderateScale(10),
}

//fontweight
export const FONTWEIGHT={
    light:'300',
    regular:'400',
    semibold:'500',
    bold:'600',
}

//fontfamily
export const FONTFAMILY='Open Sans';

//spacing
export const SPACING={
    xs:moderateScale(8),
    sm:moderateScale(16),
    md:moderateScale(24),
    lg:moderateScale(32),
    xl:moderateScale(40)
}
//Icon Size
export const IconSize=moderateScale(24);