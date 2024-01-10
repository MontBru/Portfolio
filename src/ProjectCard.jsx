const ProjectCard = ({ name, description, image, designName, link }) => {

    return (
        <li className={` bg-customColors-${designName}Primary border-2 border-customColors-accent`}>
            <button disabled={!link} onClick={
                ()=>{
                   window.location.href = link;
                }
                }>
                <img className="w-full max-h-96 object-cover border-b-2 border-customColors-accent" src={image} alt="" />
                <section className="p-3 text-start">
                    <h3 className={`text-3xl font-bold text-customColors-${designName}Accent`}>{name}</h3>
                    <p className={`text-xl text-customColors-${designName}Secondary`}>
                        {description}
                    </p>
                </section>
            </button>
            
            
        </li>
    );
}

export default ProjectCard;