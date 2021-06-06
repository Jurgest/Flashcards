
import { Button } from "./Button"

export const Header = ({onAdd, showAdd}) => {
   
    return (
        <header className='header'>
            <h1 >Flashcards </h1>
            <Button 
            onClick = {onAdd}
            color={showAdd ? 'rgb(255, 119, 119)' : 'green' } 
            text= {showAdd ? 'Close' : 'add Question'} />
        </header>
    )
}
export default Header