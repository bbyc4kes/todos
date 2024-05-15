import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

passport.use(
	new JwtStrategy(
		{
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: process.env.JWT_SECRET || 'defaultSecret',
		},
		async (payload, done) => {
			try {
				const user = await prisma.user.findUnique({
					where: { id: payload.id },
				});
				if (!user) {
					return done(null, false);
				}
				return done(null, user);
			} catch (error) {
				return done(error, false);
			}
		},
	),
);

// Authentication Middleware
export const authenticate = passport.authenticate('jwt', { session: false });
