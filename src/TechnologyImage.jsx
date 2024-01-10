const TechnologyImage = ({image, alt}) => {
    return ( 
        <li>
            <img className="w-64 h-64 object-contain" src={image} alt={alt} />
        </li>
     );
}
 
export default TechnologyImage;