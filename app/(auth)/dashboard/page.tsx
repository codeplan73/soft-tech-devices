import React from 'react'
import Sidebar from '../../components/Sidebar'
import Banner from '../../components/DashBanner'
import DashboardCard from '../../components/DashboardCard'

const page = () => {
  return (
    <div className="w-full py-4 px-4 flex flex-col space-y-4 overflow-y-scroll">
      <Banner title="Dashboard" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard
          title="Total Stock"
          amount={546}
          text="We have 546 items in stock"
        />
        <DashboardCard
          title="Total Sales"
          amount={435}
          text="we have sold 123 items"
        />
        <DashboardCard
          title="Total Orders"
          amount={53}
          text="we have 53 Orders"
        />
        <DashboardCard
          title="Total Swap"
          amount={19}
          text="we have 19 Swap deals"
        />
      </div>
      <div className="bg-white px-4 py-4 rounded-md shadow-xl">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, a
          minus eligendi maiores perspiciatis quisquam error, voluptas facilis
          accusantium culpa quasi assumenda fuga porro soluta fugit placeat.
          Temporibus, excepturi cumque?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ex
          dolorem est iusto, dolores exercitationem repellendus voluptates illo
          quia qui dolor eius architecto labore nisi? Expedita aperiam earum
          eveniet quae officia iusto et quaerat pariatur? Modi porro, pariatur,
          velit officiis odio, placeat accusantium ea odit id itaque vero
          consequuntur perspiciatis officia voluptas atque quasi optio ipsum
          error ipsam. Maiores nemo velit accusantium neque sed deserunt hic
          vitae rem. Animi repellendus a quae voluptas vitae libero, ea odit
          dignissimos eius, inventore cum? Delectus maxime modi iste quasi ullam
          quos omnis quisquam, reiciendis necessitatibus in id quod? Maiores,
          voluptate? Earum in distinctio dignissimos voluptates officia iste
          magnam, molestias dicta minus explicabo rerum odio ipsum facilis modi,
          itaque fugiat. Porro, eaque reiciendis ab repellendus necessitatibus
          voluptates similique reprehenderit totam? Illo, explicabo! Veniam odio
          enim nisi consequatur asperiores optio nostrum qui obcaecati molestias
          veritatis. Architecto ut consectetur, quidem eligendi beatae, vel
          impedit reprehenderit iure labore eaque voluptates! Est ipsum
          distinctio ullam accusamus in atque et voluptatum nobis aliquid
          laborum error maxime vitae, aspernatur voluptates illum fugiat tempore
          quae corporis commodi sint dicta? Vel temporibus quas voluptate libero
          consequatur, voluptatem odio, aliquam animi corrupti aspernatur porro.
          Voluptatum ducimus officia cupiditate necessitatibus deleniti soluta
          ad doloremque ipsum dignissimos, explicabo odit, sit earum animi
          consectetur facilis aut id veniam minima, ab eligendi fugit. Quaerat
          ducimus velit dicta eligendi pariatur molestiae inventore amet sit
          corrupti, tempora at nostrum repellendus accusamus nesciunt
          accusantium odit quidem itaque ut sint eaque? Quo, facilis placeat
          vero nihil animi temporibus ut! Ipsam possimus quod fugit et,
          obcaecati voluptates. Nesciunt, accusantium eum quis libero similique
          porro aliquid cupiditate facere atque fuga autem excepturi! Minus
          delectus repellat laudantium voluptas mollitia et obcaecati. Fugit
          doloribus id nostrum distinctio natus vero deleniti. Sequi commodi quo
          voluptatem? Aperiam, harum ex modi deserunt itaque exercitationem illo
          molestias cupiditate ipsa?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ex
          dolorem est iusto, dolores exercitationem repellendus voluptates illo
          quia qui dolor eius architecto labore nisi? Expedita aperiam earum
          eveniet quae officia iusto et quaerat pariatur? Modi porro, pariatur,
          velit officiis odio, placeat accusantium ea odit id itaque vero
          consequuntur perspiciatis officia voluptas atque quasi optio ipsum
          error ipsam. Maiores nemo velit accusantium neque sed deserunt hic
          vitae rem. Animi repellendus a quae voluptas vitae libero, ea odit
          dignissimos eius, inventore cum? Delectus maxime modi iste quasi ullam
          quos omnis quisquam, reiciendis necessitatibus in id quod? Maiores,
          voluptate? Earum in distinctio dignissimos voluptates officia iste
          magnam, molestias dicta minus explicabo rerum odio ipsum facilis modi,
          itaque fugiat. Porro, eaque reiciendis ab repellendus necessitatibus
          voluptates similique reprehenderit totam? Illo, explicabo! Veniam odio
          enim nisi consequatur asperiores optio nostrum qui obcaecati molestias
          veritatis. Architecto ut consectetur, quidem eligendi beatae, vel
          impedit reprehenderit iure labore eaque voluptates! Est ipsum
          distinctio ullam accusamus in atque et voluptatum nobis aliquid
          laborum error maxime vitae, aspernatur voluptates illum fugiat tempore
          quae corporis commodi sint dicta? Vel temporibus quas voluptate libero
          consequatur, voluptatem odio, aliquam animi corrupti aspernatur porro.
          Voluptatum ducimus officia cupiditate necessitatibus deleniti soluta
          ad doloremque ipsum dignissimos, explicabo odit, sit earum animi
          consectetur facilis aut id veniam minima, ab eligendi fugit. Quaerat
          ducimus velit dicta eligendi pariatur molestiae inventore amet sit
          corrupti, tempora at nostrum repellendus accusamus nesciunt
          accusantium odit quidem itaque ut sint eaque? Quo, facilis placeat
          vero nihil animi temporibus ut! Ipsam possimus quod fugit et,
          obcaecati voluptates. Nesciunt, accusantium eum quis libero similique
          porro aliquid cupiditate facere atque fuga autem excepturi! Minus
          delectus repellat laudantium voluptas mollitia et obcaecati. Fugit
          doloribus id nostrum distinctio natus vero deleniti. Sequi commodi quo
          voluptatem? Aperiam, harum ex modi deserunt itaque exercitationem illo
          molestias cupiditate ipsa?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ex
          dolorem est iusto, dolores exercitationem repellendus voluptates illo
          quia qui dolor eius architecto labore nisi? Expedita aperiam earum
          eveniet quae officia iusto et quaerat pariatur? Modi porro, pariatur,
          velit officiis odio, placeat accusantium ea odit id itaque vero
          consequuntur perspiciatis officia voluptas atque quasi optio ipsum
          error ipsam. Maiores nemo velit accusantium neque sed deserunt hic
          vitae rem. Animi repellendus a quae voluptas vitae libero, ea odit
          dignissimos eius, inventore cum? Delectus maxime modi iste quasi ullam
          quos omnis quisquam, reiciendis necessitatibus in id quod? Maiores,
          voluptate? Earum in distinctio dignissimos voluptates officia iste
          magnam, molestias dicta minus explicabo rerum odio ipsum facilis modi,
          itaque fugiat. Porro, eaque reiciendis ab repellendus necessitatibus
          voluptates similique reprehenderit totam? Illo, explicabo! Veniam odio
          enim nisi consequatur asperiores optio nostrum qui obcaecati molestias
          veritatis. Architecto ut consectetur, quidem eligendi beatae, vel
          impedit reprehenderit iure labore eaque voluptates! Est ipsum
          distinctio ullam accusamus in atque et voluptatum nobis aliquid
          laborum error maxime vitae, aspernatur voluptates illum fugiat tempore
          quae corporis commodi sint dicta? Vel temporibus quas voluptate libero
          consequatur, voluptatem odio, aliquam animi corrupti aspernatur porro.
          Voluptatum ducimus officia cupiditate necessitatibus deleniti soluta
          ad doloremque ipsum dignissimos, explicabo odit, sit earum animi
          consectetur facilis aut id veniam minima, ab eligendi fugit. Quaerat
          ducimus velit dicta eligendi pariatur molestiae inventore amet sit
          corrupti, tempora at nostrum repellendus accusamus nesciunt
          accusantium odit quidem itaque ut sint eaque? Quo, facilis placeat
          vero nihil animi temporibus ut! Ipsam possimus quod fugit et,
          obcaecati voluptates. Nesciunt, accusantium eum quis libero similique
          porro aliquid cupiditate facere atque fuga autem excepturi! Minus
          delectus repellat laudantium voluptas mollitia et obcaecati. Fugit
          doloribus id nostrum distinctio natus vero deleniti. Sequi commodi quo
          voluptatem? Aperiam, harum ex modi deserunt itaque exercitationem illo
          molestias cupiditate ipsa?
        </p>
      </div>
    </div>
  )
}

export default page
