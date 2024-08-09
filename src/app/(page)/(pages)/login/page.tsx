import SignIn from "@/components/common/login-signup-modal/SignIn";
import LoginRegiHeader from "@/components/login_register/LoginRegiHeader";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Login  || Homez - Real Estate NextJS Template",
};

const Login = () => {
  return (
    <>
      <LoginRegiHeader/>
      {/* Our Compare Area */}
      <section className="our-compare pt100 pb60 ">
        <Image
          width={1012}
          height={519}
          src="/images/icon/login-page-icon.svg"
          alt="logo"
          className="login-bg-icon contain"
          data-aos="fade-right"
          data-aos-delay="300"
        />
        <div className="container">
          <div className="row" data-aos="fade-left" data-aos-delay="300">
            <div className="col-lg-6">
              <div className="log-reg-form signup-modal form-style1 bgc-white p50 p30-sm default-box-shadow2 bdrs12">
                <div className="text-center mb40">
                  <Link href="/">
                    <Image
                      width={138}
                      height={44}
                      className="mb25"
                      src="/images/bangezlogo.png"
                      alt="logo"
                    />
                  </Link>
                  <h2>로그인</h2>
                  <p className="text">
                    로그인하고 더 많은 서비스를 이용하세요!
                  </p>
                </div>
                <SignIn />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
