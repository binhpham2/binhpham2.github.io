import './background.css'
import FirstBackground from './FirstBackground';
import { FirstBackgroundPreload, SecondBackgroundPreload, ThirdBackgroundPreload } from './BackgroundPreloads';
import Leafs from './Leafs';

/*
-------------------------
BACKGROUND AND DECORATION
-------------------------
Contains the cover background, which persists throughout the whole document use flow.
Also contains the leafs falling as decoration. Leafs also persists throughout the sections.

The naming is a bit weird as there is a "FirstBackground", but it is the only background displaying all images in turn.
Therefore, "FirstBackground" just means the whole cover background, having the fading animation between images.
Each of the background preloads, however, does not contain all images.
Each of them, in fact, only contains one image for preloading.

In summary, the "FirstBackground" holds all 3 images for animation.
Meanwhile, each of the background preloads hold only 1 of those 3 images.
*/
const Background = () => {
    return (
        <div className='Background'>
            {/* Make sure CSS has all of the images for the background animation before starting the animation. */}
            <>
                <FirstBackgroundPreload/>
                <SecondBackgroundPreload/>
                <ThirdBackgroundPreload/>
            </>
            <FirstBackground/>
            <Leafs/>
        </div>
    );
}

export default Background