import CardReview from "../cardReview/cardReview";
import Timotte from "@/public/timotte.svg";
import Geraldo from "@/public/geraldo.svg";
import Jane from "@/public/jane.svg";
export default function Commentaries() {
  return (
    <section className="dark:bg-black h-[900px]">
      <div className="max-w-screen-lg mx-auto">
        <div>
          <div className="text-[40px] font-semibold">
            <p>Avaliações de integrantes</p>
            <p>da plataforma</p>
          </div>
          <div>
            <p className="opacity-70 text-[15px]">
              Venha participar também,dessa comunidade
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-20">
          <div className="row-start-1 row-end-4">
            <CardReview
              name="Eddard Stark"
              alt="Eddard Stark"
              src={Timotte}
              commentary="“Através da plataforma consegui complementar meus treinos de karatê, em casa”"
              memberSince="Aluno há 7 meses"
            ></CardReview>
          </div>
          <div className="row-start-1 row-end-4">
            <CardReview
              name="Eddard Stark"
              alt="Eddard Stark"
              src={Geraldo}
              commentary="“Através da plataforma consegui complementar meus treinos de karatê, em casa”"
              memberSince="Aluno há 7 meses"
            ></CardReview>
          </div>
          <div className="row-start-1 row-end-4">
            <CardReview
              name="Eddard Stark"
              alt="Eddard Stark"
              src={Jane}
              commentary="“Através da plataforma consegui complementar meus treinos de karatê, em casa”"
              memberSince="Aluno há 7 meses"
            ></CardReview>
          </div>
        </div>
      </div>
    </section>
  );
}
