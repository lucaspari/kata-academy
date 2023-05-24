"use client";
import SideBar from "@/components/sideBar/sideBar";
import { UserContext } from "@/context/userContext";
import { useContext } from "react";
import { redirect } from "next/navigation";
export default function Dashboard() {
  const userContext = useContext(UserContext);
  // verify if user is logged
  if (userContext?.user === undefined) {
    redirect("/");
  } else {
    return (
      <div>
        <SideBar />
        <main className="max-w-screen-lg mx-auto">
          <h1 className="text-5xl">Dashboard</h1>
          <span className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In cum ea
            tenetur ullam repudiandae magni neque, autem illum praesentium
            voluptatibus et optio beatae consequatur repellendus consectetur. Ea
            vero omnis obcaecati! Ut dignissimos porro, aliquid labore eveniet
            iusto rem natus, ab quia ex aliquam dolor sunt eius nam? Neque
            aperiam sunt dolor, ullam vel aliquid ut maiores, est earum
            excepturi magnam. Expedita voluptas nulla neque eligendi commodi
            optio corrupti, iusto non aspernatur a? Dolor vero inventore
            asperiores. Qui rem nisi nam quidem, quas quo nobis, sed quam autem,
            magnam dolores ipsum. Veniam ut quam optio architecto quo. Quis
            dolorum vero quae sed earum temporibus nisi laboriosam, sequi
            sapiente nemo, illum dolores? Laboriosam nisi, natus alias
            asperiores cupiditate eos necessitatibus pariatur quos! Eius,
            maiores. Vel excepturi repellat, rerum debitis eius, blanditiis nemo
            magni perspiciatis aperiam animi minima, ad veritatis ullam ipsa
            fugiat. Quidem ad vel dolorum! Similique nam voluptates rem placeat
            sint. Modi iure maiores sapiente aspernatur non, hic nostrum, nisi
            architecto error at delectus, assumenda dignissimos repudiandae
            natus. Excepturi illo delectus exercitationem perspiciatis itaque
            ab, aperiam eaque laborum voluptatibus dicta voluptatum? Corporis
            inventore animi, neque quod impedit in dicta dolores non dolorum
            facere, aliquam vitae? Accusantium, nobis unde. Distinctio animi in
            vel atque aut rem nulla totam? Minima odio facilis corrupti. Commodi
            fugit distinctio eos quisquam, vel molestias nemo similique eius
            quasi id voluptas dolore officiis assumenda perspiciatis placeat.
            Impedit ullam voluptatibus veniam voluptate nulla porro est fuga
            facere repellat fugit? Consequuntur eveniet assumenda voluptatum
            quidem omnis enim sint necessitatibus fuga neque porro blanditiis et
            suscipit eum praesentium exercitationem aperiam, ad numquam ipsa
            fugiat illum voluptates, eligendi doloremque. Voluptatum, facilis
            itaque. Mollitia officiis iure eos delectus neque perferendis, quae
            ducimus accusantium vero eum asperiores nam inventore totam nostrum
            a itaque dicta. Officiis blanditiis explicabo, eos voluptatem
            aliquid laboriosam adipisci ex harum. Totam quo distinctio sapiente
            ex, quod labore qui corporis eius neque veritatis rerum. Culpa
            eveniet ea nemo pariatur, facere iure modi enim similique
            consectetur dolore inventore impedit assumenda repellat vitae.
            Voluptatibus voluptatum quaerat dolor maxime, voluptates hic quo
            sint, tempore possimus asperiores explicabo, fugiat aliquam
            obcaecati quod consectetur? A est laudantium natus quo perspiciatis
            repellendus eius perferendis adipisci quidem tempore. Odit impedit
            cupiditate quos animi ipsa tenetur repellat iure quidem, in nostrum,
            totam illo! Ipsam cum repudiandae, odit iusto modi dolorum! Velit,
            odio explicabo recusandae autem aut aspernatur repellendus cum!
            Aliquid, facere, ducimus harum possimus aperiam consequuntur minus,
            sit officia hic expedita accusantium! Mollitia, perferendis
            officiis. Consequatur minus nemo suscipit quas. Repellat, ducimus
            soluta. Molestias libero repudiandae porro. Amet, commodi.
            Recusandae asperiores quidem ipsa est, nulla ipsam doloremque
            impedit. Porro quia mollitia, molestias esse necessitatibus incidunt
            est fugit voluptates quidem suscipit laboriosam, temporibus,
            aspernatur excepturi nobis magnam consequatur maxime a! Vero
            distinctio quo sequi expedita dignissimos officiis fuga praesentium
            impedit unde maiores, culpa sunt, itaque, rem asperiores. Iste nobis
            animi velit libero enim ex autem beatae ad molestias! Eveniet, iste.
            Aspernatur magnam odit iusto labore neque nostrum voluptatibus harum
            quos quibusdam quidem in, debitis beatae atque aliquam qui error
            libero eos impedit, voluptates blanditiis optio autem praesentium.
            Error, obcaecati ipsam. Mollitia qui soluta libero nostrum quibusdam
            enim dolores autem ex. Itaque incidunt, qui vitae suscipit
            repellendus recusandae veniam autem assumenda dolorem maiores,
            exercitationem, tempore minima voluptate possimus. Suscipit,
            praesentium ab? Quos est temporibus minus quisquam fugiat.
            Repudiandae sequi nobis alias porro vel illo eveniet mollitia, fugit
            nostrum culpa? Fugit fuga illo dignissimos rem, neque voluptates
            impedit distinctio eligendi nesciunt nostrum! Deleniti inventore
            veniam iste, nobis illum commodi nihil eaque hic voluptatibus a
            tempore consectetur totam, delectus molestias! Cum reprehenderit
            eveniet quia expedita delectus optio! Ratione quod optio doloribus
            dignissimos earum?
          </span>
        </main>
      </div>
    );
  }
}
