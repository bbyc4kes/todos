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
	desktop: '1024px',
	tablet: '472px',
	mobile: '472px',
};

export const breakpointsNumbers: IBreakpointsNumbers = {
	desktop: 1024,
	tablet: 472,
	mobile: 472,
};

export const DEVICES = {
	desktopOnly: `(min-width: ${breakpoints.desktop})`,
	tabletOnly: `(min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop})`,
	mobileOnly: `(max-width: ${breakpoints.mobile})`,
};
