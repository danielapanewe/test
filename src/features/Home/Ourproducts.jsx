import Title from '../../UI/Title';
import { productsitems } from '../../data/data-ourproducts';
function Ourproducts() {
    return (
        <div className="bg-[rgba(255,131,0,.04)] pb-12">
            <div className="containers text-center mt-12 mb-12 pt-8">
                <Title
                    title={'Nos produits'}
                    subtitle={
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat laudantium, totam vitae aperiam cumque aliquid corporis dolorem mollitia eligendi, neque ipsum impedit, cupiditate nihil molestiae? Necessitatibus libero quaerat non veritatis!'
                    }
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 containers gap-x-6 gap-y-16 md:gap-y-20 ">
                {productsitems.map((items) => (
                    <div
                        key={items.id}
                        className=" px-2 text-center   drop-shadow-lg p-2 pb-4 border border-gray-300 rounded-xl flex flex-col items-center justify-center"
                    >
                        <img
                            src={items.image}
                            alt={items.nom}
                            className="w-16 h-16 lg:w-20 lg:h-20 -mt-10 md:-mt-14 object-cover rounded-full"
                        />
                        <p className="text-base lg:text-lg font-semibold mt-3 ">
                            {items.nom}
                        </p>
                        <p className="paragraph my-2 ">{items.description}</p>
                        <p className=" !font-semibold paragraph">
                            <span >A partir de </span>
                            <span className=" text-primarycolor">
                            {items.prix}FCFA
                            </span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Ourproducts;
