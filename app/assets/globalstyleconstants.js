import { StyleSheet, Dimensions } from "react-native";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;
const ratioX = Width < 375 ? (Width < 320 ? 0.75 : 0.875) : 1;
const ratioY = Height < 568 ? (Height < 480 ? 0.75 : 0.875) : 1;
const ratio = width / 375
const base_unit = 14;
const unit = base_unit * ratioX;
export const winsize = Width
function em(value) {
    return unit * value;
    // return value * ratio;
}
export const uid = 6050

const { scale, width } = Dimensions.get('window');
let iconSize = 35;
let resultFontSize = 24;
let weekTextFontSize = 16;
let slashLength = 80;
if (width < 350) {
    resultFontSize = 20;
    weekTextFontSize = 14;
    iconSize = 20;
    slashLength = 70;
}



export const fontSize = {
    extralittle:10,
    extrasmallest: em(0.55),
    smallest: em(0.7),
    smaller: em(0.8),
    small: em(0.9),
    normal: em(1),
    medium: em(1.1),
    large: em(1.2),
    larger: em(1.3),
    largest: em(1.4), //titlefont is largest
    extralarge: em(1.6),
    extralarger: em(1.8),
    extralargest: em(2),
    superlargest: em(2.5)
}

export const colors = {
    simangel:'rgba(119, 248, 228,0.1)',
    main_1:'#77F8E4',
    main_2:'#1AC7AF',
    main_3:'#04BA99',
    main_4:'#00BD62',
    white: '#fff',
    black: '#000',
    red: '#D9243D',
    highlight: '#D9233C',
    pink: '#FFEEF0',
    title: '#1D3554',
    subtitle: '#949DB2',
    subtitleOpacity: 'rgba(148, 157, 178, 0.5)',
    background: '#F4F8FD',
    borderColor: '#cbcbcb',
    blackgradient: 'rgba(0, 0, 0, 0.80)',
    lightblackgradient: '#0000004d',
    darkgreen: "#008000",
    lightgreen: "#2bd977",
    cardBackground: "#78849e17",
    transparent: 'transparent',
    navyblue: '#1D3554',
    travelred: '#D9243D',
    lightgray: '#707070',
    backgroundColor: '#1F2227',
    orange :'#FA6F2A',
    lightblue:'#69F3FF',
    lightcyan:'#C2FCF2'
    // your colors
}


export const font = {
    ralewayLight:'Releway-Light',
    ralewayLightItalic:'Releway-LightItalic',
    ralewayMedium:'Releway-Medium',
    ralewayMediumItalic:'Releway-MediumItalic',
    ralewayBlack: 'Raleway-Black',
    ralewayBlackItalic: 'Raleway-BlackItalic',
    ralewayBold: 'Raleway-Bold',
    ralewayBoldItalic: 'Raleway-BoldItalic',
    ralewayExtraBold: 'Raleway-ExtraBold',
    ralewyExtraBoldItalic: 'Raleway-ExtraBoldItalic',
    robotoMonoLight:'RobotoMono-Light',
    robotoMonoLightItalic:'RobotoMono-LightItalic',
    robotoMonoMedium:'RobotoMono-Medium',
    robotoMonoMediumItalic:'RobotoMono-MediumItalic',
    robotoMonoBold:'RobotoMono-Bold',
    robotoMonoBoldItalic:'RobotoMono-BoldItalic',
}

export const globalstyles = StyleSheet.create({
    comment:{
        fontFamily:font.ralewayLight,
        fontSize:fontSize.small
    },
    writeComment:{
        width:width/2,
        fontFamily:font.ralewayLight,
        // fontSize:fontSize.small
    },
    userImage:{
        width:36,
        height:36,
        marginLeft:10,
        borderRadius:20,
    },
    inputContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:8,
        paddingHorizontal:12,
        marginVertical:26,
        borderWidth:0,
        borderRadius:25,
        // width:width,
        height:Height/7
    },
    commentContainer:{
        width:Width/1.5,
        height:Height/12,
        borderRadius:20,
        borderWidth:0.5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:12,
    },
    mainBorder:{
        borderRadius:25,
    },
    smallBorder:{
        borderRadius:15,
    }

})