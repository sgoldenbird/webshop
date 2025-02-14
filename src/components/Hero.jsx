import { Link } from "react-router-dom";
import womanImg from "../assets/womanImg.jpg";

const Hero = () => {
  return (
    <section className="bg-red-200 bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex flex-col justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="text-xl font-semibold flex uppercase items-center ">
            <div className="w-10 h-[2px] bg-[#a23f2d] mr-3"></div>New Trend
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            SPRING SALE STYLISH <br />
            <span className="font-semibold">WOMEN</span>
          </h1>
          <Link
            to={"/"}
            className="uppercase font-semibold border-b-2 border-orange-700 mb-4"
          >
            Discover More
          </Link>
        </div>

        <div className="hidden lg:block">
          <img src={womanImg} alt="woman's new trend" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

/*learn: line18, self-start

*/
