import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

const Login = () => (
    <div className="flex flex-grow flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-8 px-4">
            <h2 className="text-center text-2xl font-black text-white sm:text-3xl">
                Hold up right there bruh ✋🏻
            </h2>

            <LoginLink
                postLoginRedirectURL="/"
                className="transform-gpu rounded-xl bg-white/40 px-12 py-3.5 font-bold text-white transition-all duration-300 ease-in-out hover:bg-white/20"
            >
                Log in
            </LoginLink>
        </div>
    </div>
);

export default Login;
