import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (value) => {
    console.log("values", value);
    // try {
    // make the api call
    navigate("/");
    // } catch (error) {
    //     //error
    // }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center font-sans relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative z-10 w-full max-w-md px-6">
        <div className="bg-neutral-900/50 backdrop-blur-xl border border-white/5 p-8 rounded-3xl shadow-2xl">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-black tracking-tight italic">
              {isLogin ? "WELCOME " : "REGISTER "}
              <span className="text-emerald-500">BACK</span>
            </h2>
            <p className="text-neutral-400 text-sm mt-1">
              {isLogin
                ? "Enter your credentials to play"
                : "Create an account to track your ELO"}
            </p>
          </div>

          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="space-y-4">
              {/* Form Fields */}
              {!isLogin && (
                <div>
                  <label className="block text-xs font-bold text-neutral-500 uppercase ml-1 mb-2">
                    Username
                  </label>
                  <input
                    {...register("username", {
                      required: isLogin === false,
                    })}
                    type="text"
                    placeholder="Grandmaster123"
                    className="w-full bg-neutral-950 border border-neutral-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-500 transition-all"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-neutral-500 uppercase ml-1 mb-2">
                  Email
                </label>
                <input
                  {...register("email", { required: "email is required" })}
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-neutral-950 border border-neutral-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-500 uppercase ml-1 mb-2">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: true,
                  })}
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-neutral-950 border border-neutral-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-500 transition-all"
                />
              </div>

              <div>
                {(errors.email || errors.password || errors.username) && (
                  <span className="text-red-400">
                    {" "}
                    Above fields are required
                  </span>
                )}
              </div>

              {isLogin && (
                <div className="text-right">
                  <button className="text-xs font-bold text-emerald-500 hover:text-emerald-400 transition-colors">
                    FORGOT PASSWORD?
                  </button>
                </div>
              )}

              <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold py-4 rounded-xl transition-all transform active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.2)] mt-2">
                {isLogin ? "SIGN IN" : "CREATE ACCOUNT"}
              </button>
            </div>
          </form>

          {/* Social Login Divider */}
          <div className="flex items-center gap-4 py-6">
            <div className="h-px bg-neutral-800 flex-1"></div>
            <span className="text-neutral-600 text-xs font-bold">
              OR CONTINUE WITH
            </span>
            <div className="h-px bg-neutral-800 flex-1"></div>
          </div>

          {/* Toggle Link */}
          <p className="text-center text-neutral-500 text-sm mt-8">
            {isLogin ? "Don't have an account?" : "Already a member?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-emerald-500 font-bold hover:underline"
            >
              {isLogin ? "REGISTER" : "LOG IN"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
