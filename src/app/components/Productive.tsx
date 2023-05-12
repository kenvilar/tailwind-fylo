import Image from "next/image";
import ProductiveImg from "@/app/images/illustration-stay-productive.png";
import IconArrow from "@/app/images/icon-arrow.svg";

const Productive = () => {
  return (
    <>
      <section id="productive" className="bg-white dark:bg-darkBlue">
        <div className="container flex flex-col items-center mx-auto px-6 pt-24 pb-32 md:flex-row md:space-x-16">
          {/*image*/}
          <div className="md:w-1/2">
            <img
              src={ProductiveImg.src}
              alt="productive-img"
              className="mb-10"
            />
          </div>

          {/*content*/}
          <div className="flex flex-col items-start md:w-1/2">
            <div className="flex flex-col space-y-5">
              <h4 className="max-w-md text-xl font-bold md:text-4xl">
                Stay productive, wherever you are
              </h4>
              <p className="text-sm md:text-lg">
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>
              <p className="text-sm md:text-lg">
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
            </div>

            {/*link*/}
            <div className="block mt-14">
              <a
                href="#"
                className="border-b border-accentCyan text-accentCyan"
              >
                See how Flyo works
                <Image src={IconArrow} alt={"arrow"} className="inline pb-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Productive;
