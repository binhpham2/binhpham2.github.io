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

The Welcome section should become transparent when not viewed.
However, it should not be removed like other sections.
The reason is because if it is removed, whenever the user navigate back to it,
the animation shall be rerun, which is weird.
*/
const Welcome = ({ currentViewedSection }) => {
    return (
        <div className={`Welcome ${(currentViewedSection !== 'Welcome') ? 'WelcomeDisappear' : ''}`}>
            <Name/>
            <EmptyWelcomeGridItem/>
            <Introduction/>
        </div>
    );
}

export default Welcome