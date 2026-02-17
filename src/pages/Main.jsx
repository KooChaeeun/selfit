import Hero from '../components/common/Hero';
import Live from '../components/main/Live';
import LiveShow from '../components/main/LiveShow';
import News from '../components/main/News';
import Fitting from '../components/main/Fitting';
import Recommend from '../components/main/Recommend';
import Seasonal from '../components/main/Seasonal';
import Community from '../components/main/Community';

const Main = () => {
    return (
        <div>
            <Hero />
            <LiveShow />
            <News />
            <Fitting />
            <Recommend />
            <Seasonal />
            <Community />
        </div>
    );
};

export default Main;
