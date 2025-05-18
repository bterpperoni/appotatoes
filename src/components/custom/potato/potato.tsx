
type PotatoProps = {
    potatype: string;
}

export function Potato({ potatype }: PotatoProps){
    return (
        <span className="text-white shadow-md">{potatype}</span>        
    )
};