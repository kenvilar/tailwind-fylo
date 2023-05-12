import Image from "next/image";
import Quotes from "@/app/images/bg-quotes.png";
import Profile1 from "@/app/images/profile-1.jpg";
import Profile2 from "@/app/images/profile-2.jpg";
import Profile3 from "@/app/images/profile-3.jpg";

const Testimonials = () => {
  const items = [
    {
      icon: Profile1.src,
      name: "Satish Patel",
      role: "Founder & CEO. Huddle",
      desc: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
    {
      icon: Profile2.src,
      name: "Bruce McKenzie",
      role: "Founder & CEO. Huddle 2",
      desc: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
    {
      icon: Profile3.src,
      name: "Eva Boyd",
      role: "Founder & CEO. Huddle 3",
      desc: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
  ];

  return (
    <>
      <section id="testimonials" className="bg-gray-50 dark:bg-darkBlue">
        <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
          {/*boxes container*/}
          <div className="relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12">
            {/*quotes image*/}
            <img
              src={Quotes.src}
              alt="quotes"
              className="absolute left-1 -top-2 w-10 md:-top-16 md:w-20"
            />

            {/*box item*/}
            {items.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3"
                >
                  <p className="text-sm leading-5 md:text-lg">{item.desc}</p>
                  {/*custom info*/}
                  <div className="flex space-x-4">
                    <img
                      src={item.icon}
                      alt="profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h5 className="text-sm font-semibold">{item.name}</h5>
                      <p className="text-xs font-extralight">{item.role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
