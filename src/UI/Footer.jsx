import logoblanc from '../assets/logofondnoir.png';

function Footer() {
    return (
        <footer className="bg-black mt-12 pt-14">
            <div className="containers">
                <div className="footer__firstpart grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className=" text-white">
                        <img
                            src={logoblanc}
                            alt="logo entreprise"
                            className="w-[45%]"
                        />
                        <p className="pt-1 text-sm ">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Incidunt optio nemo, tempore voluptate
                            voluptas facere sit culpa distinctio quasi itaque et
                            cupiditate sed labore qui doloremque perferendis id
                            nulla ex.
                        </p>
                        <div className="mt-4 flex gap-2 text-xl">
                            <a
                                href="#"
                                className=" hover:scale-110 transition-transform ease-linear"
                            >
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </a>

                            <a
                                href="#"
                                className=" hover:scale-110 transition-transform ease-linear"
                            >
                                <ion-icon name="logo-youtube"></ion-icon>
                            </a>
                            <a
                                href="#"
                                className=" hover:scale-110 transition-transform ease-linear"
                            >
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                            <a
                                href="#"
                                className=" hover:scale-110 transition-transform ease-linear"
                            >
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col  text-white">
                        <h3 className="font-bold mb-4 text-lg">Contact</h3>
                        <div className="flex flex-col gap-3 text-sm">
                            <p className="flex items-center gap-1">
                                <ion-icon name="mail"></ion-icon>
                                <a
                                    href="mailto:info@cm.whitefishes.com"
                                    className="hover:underline"
                                >
                                    info@cm.Whitefishes.com
                                </a>
                            </p>
                            <p className="flex items-center gap-1">
                                <ion-icon name="call"></ion-icon>
                                <a
                                    href="tel:tel:+4915231918349"
                                    className="hover:underline"
                                >
                                    +49 152 3191 8349
                                </a>
                            </p>

                            <p className="flex items-center gap-1">
                                <ion-icon
                                    name="location"
                                    class="text-white text-base"
                                ></ion-icon>
                                <span>
                                    Douala - Deido, derrière <br /> pharmacie de la Rive
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col  text-white">
                        <h3 className="font-bold mb-4 text-lg">Liens Rapide</h3>
                        <div className="pl-3 flex flex-col gap-2 text-sm">
                            <a
                                href="#"
                                className={
                                    'flex items-center hover:pl-1 transition-all ease-linear'
                                }
                            >
                                <ion-icon name="chevron-forward"></ion-icon>
                                <span>Accueil </span>
                            </a>

                            <a
                                href="#"
                                className={
                                    'flex items-center hover:pl-1 transition-all ease-linear'
                                }
                            >
                                <ion-icon name="chevron-forward"></ion-icon>
                                <span>A propos</span>
                            </a>
                           
                            <a
                                href="#"
                                className={
                                    'flex items-center hover:pl-1 transition-all ease-linear'
                                }
                            >
                                <ion-icon name="chevron-forward"></ion-icon>
                                <span>Contact</span>
                            </a>
                            <a
                                href="#"
                                className={
                                    'flex items-center hover:pl-1 transition-all ease-linear'
                                }
                            >
                                <ion-icon name="chevron-forward"></ion-icon>
                                <span>Politique de Confidentialité</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col text-white">
                        <h3 className="font-bold mb-4 text-lg">Nos Services</h3>
                        <div className="pl-3 flex flex-col gap-2 text-sm">
                            <a
                                href="#"
                                className={
                                    'flex items-center hover:pl-1 transition-all ease-linear'
                                }
                            >
                              
                                <span>Livaison repas</span>
                            </a>
                            <a
                                href="#"
                                className={
                                    'flex items-center hover:pl-1 transition-all ease-linear'
                                }
                            >
                            
                                <span>Vente poisson</span>
                            </a>
                            <a
                                href="#"
                                className={
                                    'flex items-center hover:pl-1 transition-all ease-linear'
                                }
                            >
                              
                                <span>Vente boisson</span>
                            </a>
                            <a
                                href="#"
                                className={
                                    'flex items-center hover:pl-1 transition-all ease-linear'
                                }
                            >
                               
                                <span>Location Espace</span>
                            </a>
                          
                        </div>
                    </div>
                </div>
            </div>

            <div className=" mt-6 footer__secondpart text-white text-xs py-4 text-center font-light bg-black border-t">
                <p className="containers">
                    Copyright &copy; 2023 Whitefishes Cameroun SARL
                </p>
            </div>
        </footer>
    );
}

export default Footer;
