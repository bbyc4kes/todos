interface IBreakpoints {
	readonly desktop: string;
	readonly tablet: string;
	readonly mobile: string;
}

interface IBreakpointsNumbers {
	readonly desktop: number;
	readonly tablet: number;
	readonly mobile: number;
}

export const breakpoints: IBreakpoints = {
	desktop: '768px',
	tablet: '425px',
	mobile: '320px',
};

export const breakpointsNumbers: IBreakpointsNumbers = {
	desktop: 768,
	tablet: 425,
	mobile: 320,
};

export const DEVICES = {
	desktopOnly: `(min-width: ${breakpoints.desktop})`,
	tabletOnly: `(min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop})`,
	mobileOnly: `(max-width: ${breakpoints.mobile})`,
};
