import CardReview from "../cardReview/cardReview";
import Timotte from "@/public/timotte.svg";
import Geraldo from "@/public/geraldo.svg";
import Jane from "@/public/jane.svg";
export default function Commentaries() {
  return (
    <section className="bg-[#B4EFFF] dark:bg-black py-40 h-[1100px]">
      <div className="max-w-screen-lg mx-auto">
        <div>
          <div className="mb-10 text-[40px] font-semibold lg:text-left text-center">
            <p>Avaliações de integrantes</p>
            <p>da plataforma</p>
          </div>
          <div>
            <p className="opacity-70 text-[15px] lg:text-left text-center">
              Venha participar também, dessa comunidade
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-20">
          <div className="lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-1 col-start-1 col-end-4">
            <CardReview
              name="Timotte Chalamet"
              alt="Eddard Stark"
              src={Timotte}
              memberSince="Aluno há 3 meses"
              commentary="Essa plataforma de karatê é um verdadeiro playground para entusiastas! 🥋🚀"
            ></CardReview>
          </div>
          <div className="lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-2 col-start-1 col-end-4">
            <CardReview
              name="Eddard Stark"
              alt="Eddard Stark"
              src={Geraldo}
              commentary="Esta plataforma de karatê é o lugar certo para dominar as artes marciais! 👊💥"
              memberSince="Aluno há 7 meses"
            ></CardReview>
          </div>
          <div className="lg:row-start-1 lg:row-end-4 lg:col-start-3 lg:col-end-4 col-start-1 col-end-4">
            <CardReview
              name="Toninha Tornada"
              alt="Eddard Stark"
              src={Jane}
              commentary="Esta plataforma de karatê é o meu refúgio digital para aprimorar minhas habilidades! 🥋💪"
              memberSince="Aluno há 10 meses"
            ></CardReview>
          </div>
        </div>
      </div>
    </section>
  );
}
