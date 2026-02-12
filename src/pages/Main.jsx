import Hero from '../components/common/Hero';
import Live from '../components/main/Live';
import LiveShow from '../components/main/LiveShow';
import News from '../components/main/News';
import Fitting from '../components/main/Fitting';
import Recommend from '../components/main/Recommend';

const Main = () => {
    return (
        <div>
            <Hero />
            <LiveShow />
            <News />
            <Fitting />
            <Recommend />
        </div>
    );
};

export default Main;
