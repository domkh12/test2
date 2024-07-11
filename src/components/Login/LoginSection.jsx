import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { fetchLogin } from "../../redux/user/UserSlice";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

function LoginSection() {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.user);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Submitting form with values:", values);
      dispatch(fetchLogin(values));
    },
  });

  return (
    <main className="px-16 bg-white max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2600cde3b03e2fe6ecf16468504b0c56811a1584f5c652b5897e911baa003dc7?apiKey=f31fd4ee56d247b9aa3f0b98047a7bf3&"
            alt=""
            className="h-auto max-w-lg"
          />
        </section>
        <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-11 text-base max-md:mt-10 max-md:max-w-full">
            <header className="flex gap-5 self-start text-2xl font-medium text-center whitespace-nowrap text-zinc-600">
              <img
                loading="lazy"
                src="./public/Login/2.jpg"
                alt=""
                className="shrink-0 aspect-[0.93] w-[50px]"
              />
              <h1 className="flex-auto my-auto">Showcase</h1>
            </header>
            <h2 className="mt-10 text-3xl font-medium text-black max-md:max-w-full">
              Welcome back to Showcase
            </h2>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="mt-9 text-neutral-600 max-md:max-w-full"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    {...formik.getFieldProps("email")}
                    className={`w-full mt-2.5 h-10 bg-white rounded-md border border-solid ${
                      formik.touched.email && formik.errors.email
                        ? "border-red-500"
                        : "border-neutral-300"
                    } max-md:max-w-full`}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mt-9 text-neutral-600 max-md:max-w-full"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={formik.values.showPassword ? "text" : "password"}
                    id="password"
                    {...formik.getFieldProps("password")}
                    className={`w-full mt-2.5 h-10 bg-white rounded-md border border-solid ${
                      formik.touched.password && formik.errors.password
                        ? "border-red-500"
                        : "border-neutral-300"
                    } max-md:max-w-full`}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.password}
                    </div>
                  ) : null}
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-2.5 justify-between text-neutral-600"
                    onClick={() =>
                      formik.setFieldValue(
                        "showPassword",
                        !formik.values.showPassword
                      )
                    }
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/92b1ab87a28fea866bc524a9570b53b522480bf60f54650f3d55f1bf3ee0920c?apiKey=f31fd4ee56d247b9aa3f0b98047a7bf3&"
                      alt=""
                      className="shrink-0 my-auto aspect-[1.11] w-[10px]"
                    />
                    <span>{formik.values.showPassword ? "Hide" : "Show"}</span>
                  </button>
                </div>
              </div>
              <div className="flex gap-3 self-start mt-5 text-neutral-500">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={formik.values.rememberMe}
                  onChange={() =>
                    formik.setFieldValue(
                      "rememberMe",
                      !formik.values.rememberMe
                    )
                  }
                  className="shrink-0 my-auto w-5 h-5 rounded-md border border-solid border-neutral-400"
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <button
                type="submit"
                className="justify-center items-center px-16 py-3 mt-4 max-w-full text-white whitespace-nowrap bg-indigo-600 rounded-md w-[219px] max-md:px-5"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Logging in..." : "Login"}
              </button>
            </form>
            {status === "failed" && (
              <p className="mt-5 text-sm text-red-600 max-md:max-w-full">
                {error}
              </p>
            )}
            <p className="mt-5 text-sm text-indigo-600 underline max-md:max-w-full">
              Already have an account?{" "}
              <a href="#" className="text-indigo-600 underline">
                Create an account
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginSection;
