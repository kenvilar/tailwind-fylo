import Image from "next/image";
import Phone from "@/app/images/icon-phone.svg";
import Email from "@/app/images/icon-email.svg";
import Facebook from "@/app/images/facebook.svg";
import Twitter from "@/app/images/twitter.svg";
import Instagram from "@/app/images/instagram.svg";

const Footer = () => {
  const menu1 = ["About", "Jobs", "Press", "Blog"];
  const menu2 = ["Contact Us", "Terms", "Privacy"];
  const socials = [Facebook, Twitter, Instagram];

  return (
    <>
      <footer className="bg-darkBlue2">
        <div className="container mx-auto px-5 pb-10">
          <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
            {/*email and phone*/}
            <div className="mt-10 space-y-6">
              <div className="flex items-center space-x-3 md:-mt-10">
                <div className="w-6">
                  <Image src={Phone} alt={"phone"} className="scale-75" />
                </div>
                <div>+1-543-123-4567</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6">
                  <Image src={Email} alt={"email"} className="scale-75" />
                </div>
                <div>example@fylo.com</div>
              </div>
            </div>

            {/*menus*/}
            <div className="flex flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row">
              <div className="flex flex-col space-y-3">
                {menu1.map((item, idx) => {
                  return (
                    <a key={idx} href="#">
                      {item}
                    </a>
                  );
                })}
              </div>
              <div className="flex flex-col space-y-3">
                {menu2.map((item, idx) => {
                  return (
                    <a key={idx} href="#">
                      {item}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center pb-10 space-x-3">
              {socials.map((item, idx) => {
                return (
                  <div key={idx}>
                    <a href="#">
                      <Image
                        src={item}
                        alt={"social-icons"}
                        className="p-1.5 bg-darkBlue rounded-full ficon"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
