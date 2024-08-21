import Color from '../../components/utils/page.colors.util';
import ComingSoon from '../../components/sections/comingsoon';

import colors from '../../content/projects/_colors.json';

export default function Projects({}) {
    return (
        <>
            <Color colors={colors} />
            <ComingSoon />
        </>
    );
}

// This gets called on every request
export async function getServerSideProps({ res }) {

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=600, stale-while-revalidate=59'
    );

    return {
        props: {} // No need to fetch data since we're showing a Coming Soon message
    };
}
