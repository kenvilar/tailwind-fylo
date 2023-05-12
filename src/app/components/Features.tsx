import Image from "next/image";
import AccessAnywhere from "@/app/images/icon-access-anywhere.svg";
import Security from "@/app/images/icon-security.svg";
import Collab from "@/app/images/icon-collaboration.svg";
import AnyFile from "@/app/images/icon-any-file.svg";

const Features = () => {
  const firstRowItems = [
    {
      icon: AccessAnywhere,
      title: "Access your file from an",
      desc: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
      icon: Security,
      title: "Security you can trust",
      desc: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
  ];

  const secondRowItems = [
    {
      icon: Collab,
      title: "Access your file from anywhere",
      desc: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
      icon: AnyFile,
      title: "Security you can trust",
      desc: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
  ];

  return (
    <>
      <section id="features" className="pt-12 bg-gray-50 dark:bg-darkBlue1">
        <div className="container mx-auto px-6 pb-32">
          {/*first row*/}
          <div className="flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
            {firstRowItems.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center space-y-2 md:w-1/2"
                >
                  <div className="flex items-center justify-center h-24 mb-6">
                    <Image src={item.icon} alt={"feature-img"} />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="max-w-md">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/*second row*/}
          <div className="flex flex-col space-y-24 mt-28 text-center md:flex-row md:space-y-0">
            {secondRowItems.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center space-y-2 md:w-1/2"
                >
                  <div className="flex items-center justify-center h-24 mb-6">
                    <Image src={item.icon} alt={"feature-img"} />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="max-w-md">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
