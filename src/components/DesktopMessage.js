import React, { useEffect, useState } from 'react';
import MobileDetect from 'mobile-detect';

import computerImg from '../images/computer.svg';

const DesktopMessage = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const md = new MobileDetect(window.navigator.userAgent);
        setIsMobile(md.mobile() !== null);
    }, []);

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={computerImg} className="max-w-sm h-44 w-44 m-10 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-3xl text-center font-bold">Please Open in Desktop Mode For Best Expirience</h1>
                    <p className="mt-6 text-center italic text-md">"Dev Quote"</p>
                    <p className="py-1 text-center italic text-md">"Why do Java developers wear glasses? Because they don't C"</p>
                </div>
            </div>
        </div>
    );
}

export default DesktopMessage;
