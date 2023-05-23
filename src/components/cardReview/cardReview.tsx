import Image from "next/image";
import "./style.css";
interface ICardReview {
  src: string;
  alt: string;
  name: string;
  commentary: string;
  memberSince: string;
}
export default function CardReview(props: ICardReview) {
  return (
    <div className=" rounded-md  px-10 py-10 gradient-card">
      <div className="flex gap-4">
        <Image width={50} src={props.src} alt={props.alt}></Image>
        <div>
          <p className="text-[18px] font-semibold">{props.name}</p>
          <p className="text-[14px] opacity-60">{props.memberSince}</p>
        </div>
      </div>
      <div className="commentary font-semibold text-[16px] my-10">
        <p>{props.commentary}</p>
      </div>
    </div>
  );
}
