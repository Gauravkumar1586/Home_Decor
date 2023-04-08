
const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]
const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },

]

export default function About() {
  return (
    <>

      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="./images/about_logo.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <svg
          viewBox="0 0 1097 845"
          aria-hidden="true"
          className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
        >
          <path
            fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
            fillOpacity=".2"
            d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
          />
          <defs>
            <linearGradient
              id="10724532-9d81-43d2-bb94-866e98dd6e42"
              x1="1097.04"
              x2="-141.165"
              y1=".22"
              y2="363.075"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF" />
              <stop offset={1} stopColor="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          viewBox="0 0 1097 845"
          aria-hidden="true"
          className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <path
            fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
            fillOpacity=".2"
            d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
          />
          <defs>
            <linearGradient
              id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
              x1="1097.04"
              x2="-141.165"
              y1=".22"
              y2="363.075"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF" />
              <stop offset={1} stopColor="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
        <div className="mx-auto mr-1 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-8xl font-bold tracking-tight text-black sm:text-8xl">Welcome</h2>
            <p className="mb-6 text-xl font-normal text-black-900 lg:text-xl  dark:text-gray-400">
              Furniture is material product already, it is artistic creation again, this is the furniture that people often say double characteristic.The type, quantity, function, form, style and production level of furniture and the possession situation at that time, still reflected the social life style of a country and region in a certain historical period, the level of social material civilization and historical and cultural characteristics.Furniture is a country or region in a certain historical period of social productivity development level of the symbol, is a certain way of life in miniature, is a certain cultural form of the show, so furniture condensed rich and profound social.The use makings of certain so called solid wood furniture is board of medium fiber-board, particleboard outside stick stick walnut skin or other wood skin, not be pure natural wood makes.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="" >
        <div className="">
          <h2 className="my-12 text-center mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">BRIEFING ABOUT HOME DECOR</span></h2>
          <p className="mb-6 text-lg font-normal text-gray-800 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Furniture Collections of Living Room Furniture, Bed Room Furniture, Dining Room Furniture, Storage Furniture, Sofa Set,Corner Sofa,  Cot, Cupboards, Wardrobes, TV-Stand, TV-Shelf, Study Tables, Corner Stand, Bed Side Table, Steel Almirah, Steel Cupboards, Office Tables, Coffee Tables, Teapoy, Book Shelf, Crockery Shelf, Coat Stand, Dining Tables, Stainless Steel Dining Chair, 3 Seater Sofa, Cheap sofa Set, Center Table, Bed room Set, Living Room Set, Double Cot, Double Bed, Dressing Table, Study Desk, Dressing Mirror with Lights, Vanity Set, Dressing Table with Storage, Dining Table Set, Wardrobe with Mirror, Cupboard for Bedroom, Modular Cupboard, Almirah with Mirror, Steel Almirah with Locker, Computer Desk, Computer Tables for Home, Workstations, Modular Office Furniture, Study Table with Bookshelf Design, Bookcase with Glass Doors, Office Almirah. </p>
        </div>

        <div className="">
          <h2 className="my-12 text-center mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            RAW MATERIALS USED</h2>
          <p className="mb-6 text-lg font-normal text-gray-800 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            For manufacturing good quality furniture , in our factory using several different types of material . The most common raw materials are – Particle Board, MDF, Plywood, Veneer, and wood timber. For Full Cover Sofa Set manufacturing raw materials like Jute, artificial leather, PU Form etc. For frame work treated hard wood using. Depending on furniture design, furniture quality , furniture price etc raw materials are selected. We are always using only high quality raw materials for making furniture. We believe that quality is critical to satisfying our customers and retaining their loyalty so they continue to buy from you in the future
          </p>
        </div>


        <div className="">
          <h2 className="my-12 text-center mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">WHY CHOOSE HOME DECOR</span></h2>
          <p className="mb-6 text-lg font-normal text-gray-800 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Our Approach. To us, it’s not just a sales – we take pride in the product we deliver. More over Our Attitude. …, Our Unique Abilities. …, Our experience. …,Quality. …, Quick response…,Our after sales  service and care….. and many more. We are offering best quality furniture at reasonable price.  Best Furniture Stores near me</p>
        </div>

        <div>
          <h2 className="my-12 text-center mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            HOW TO SELECT A SUITABLE FURNITURE</h2>
          <p className="mb-6 text-lg font-normal text-gray-800 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            <div className="my-6">Many factors are considered before buying furniture, most important underlying reason to buy furniture is that it is like backdrop of our life….Moreover furniture in a home express our character and sense of style and have an important role in creating an impression of us. Different rooms have different furniture for different purposes. We need furniture for more comfortable lives and use it for storage, for sitting on and for sleeping</div>
            <div className="my-6">Factors which influence home furnishings choices include style, func tion, construction features, cost, availability, and color. Research has also shown that values and stage in life are factors that affect the decision-making process.</div>
            <div className="my-6">For the best utilization of space, furniture is placed to allow free movement. This makes the space around furniture as important as its arrangement. Thus, furniture works as a functional and circulatory element in interior design. Interior designers use furniture to establish a pleasing sense of order.</div>
          </p>
        </div>
      </div>
    </>
  )
}