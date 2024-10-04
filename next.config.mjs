/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	compiler: {
		styledComponents: true,
	},
	images: {
		domains: ["lh3.googleusercontent.com","auth-server-jwo5.onrender.com","avatars.githubusercontent.com"],
	},
};

export default nextConfig;
