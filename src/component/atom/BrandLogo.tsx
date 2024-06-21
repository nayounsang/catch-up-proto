interface PropType{
    width?: number
    height?: number
}

export default function BrandLogo({width = 40,height = 40}:PropType){
    return(
        <img src="/vite.svg" width={width} height={height} alt="catch-up"/>
    )
}