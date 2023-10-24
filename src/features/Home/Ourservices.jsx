import { servicesitems } from '../../data/data-ourservices';
import Title from '../../UI/Title';

function Ourservices() {
    return (
        <>
            <div className="containers text-center mt-12 mb-8">
                <Title
                    title={'Nos Services'}
                    subtitle={
                        'Nous avons une large gamme de service afin de mieux vous satisfaire'
                    }
                />
            </div>

            <div className="containers grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                {servicesitems.map((items) => (
                    <div
                        className="  p-6 bg-white border border-gray-200 rounded-lg shadow"
                        key={items.id}
                    >
                     
                        <img
                            src={items.icon}
                            alt=""
                            className=" w-16 h-16    mb-3"
                        />
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
                                {items.title}
                            </h5>
                        </a>
                        <p className="mb-3 paragraph  ">{items.subtitle}</p>
                        <a
                            href={items.link}
                            className="inline-flex items-center text-primarycolor hover:underline"
                        >
                            En savoir plus
                            <svg
                                className="w-3 h-3 ml-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                                />
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Ourservices;
