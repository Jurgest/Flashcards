
export const Button = ({color, text, onClick}) => {
   
    return (
    <button
    onClick= {onClick}
     style={{borderBlockColor: color , color:color}} 
     className='btn'>{text}
    </button>)
    
}
