import './welcome.css'
import Name from './Name';
import Introduction from './Introduction';
import EmptyWelcomeGridItem from './EmptyWelcomeGridItem';

/*
---------------
WELCOME SECTION
---------------
The first section the user should see on every reload.
Contains: Name and Introduction.
*/
const Welcome = () => {
    return (
        <div className='Welcome'>
            <Name/>
            <EmptyWelcomeGridItem/>
            <Introduction/>
        </div>
    );
}

export default Welcome