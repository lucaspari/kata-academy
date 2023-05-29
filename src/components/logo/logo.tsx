import { Jolly_Lodger } from "next/font/google";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "600" });
const jolly_lodger = Jolly_Lodger({ subsets: ["latin"], weight: "400" });
export default function Logo() {
  return (
    <div>
      <div className={jolly_lodger.className}>
        <div className="tracking-[0.09em] text-[58px] leading-[50px]">
          <span>Ka</span>
          <span className=" text-[#FF2F2F]">ta</span>
        </div>
        <div className={poppins.className}>
          <span className="tracking-[0.12em] leading-[24px] text-[1.6em]">
            academy
          </span>
        </div>
      </div>
    </div>
  );
}
