import { useEffect, useState } from 'react';
import { DEVICES } from '~shared/utils/breakpoints';

const useBreakpoints = (): {
	isDesktop: boolean;
	isTablet: boolean;
	isMobile: boolean;
} => {
	const [isDesktop, setIsDesktop] = useState(
		window.matchMedia(DEVICES.desktopOnly).matches,
	);
	const [isTablet, setIsTablet] = useState(
		window.matchMedia(DEVICES.tabletOnly).matches,
	);
	const [isMobile, setIsMobile] = useState(
		window.matchMedia(DEVICES.mobileOnly).matches,
	);

	useEffect(() => {
		const handleResize = (): void => {
			setIsDesktop(window.matchMedia(DEVICES.desktopOnly).matches);
			setIsTablet(window.matchMedia(DEVICES.tabletOnly).matches);
			setIsMobile(window.matchMedia(DEVICES.mobileOnly).matches);
		};

		window.addEventListener('resize', handleResize);

		return (): void => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return { isDesktop, isTablet, isMobile };
};

export default useBreakpoints;
