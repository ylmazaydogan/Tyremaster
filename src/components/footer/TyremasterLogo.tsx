import Image from "next/image";


export default function TyremasterLogo() {
    return (
        

            <div className="flex flex-col gap-2 mt-5 text-base text-white mx-4 ">  
            <Tyremaster/>
            <TyremasterInfo/>
            <div className="ml-3"> 
            <TyremasterAddress/>
            <TyremasterPhone/>
            <TyremasterEmail/>
            </div>
            </div>
        
    )
}

const TyremasterInfo = () => {
    return (
        <p className="text-white mx-4 mt-2.5 text-sm md:text-center xl:text-start ">
            Your premier tyre wholesaler platform, where  sourcing your tyre needs for supply is made easy. 
        </p>
    )
}

const TyremasterAddress = () => {
    return (
        <a href="https://www.google.com/maps/place?q=Patersstraat%20100%202300%20Turnhout%2C%20BE" target="_blank" className="flex gap-1 items-center group mt-5">
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" className="text-white text-md group-hover:text-green" height="1em" width="1em">
                <path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"></path>
            </svg>
            Patersstraat 100 2300 Turnhout, BE
        </a>
    )
}

const TyremasterPhone=()=>{
    return(
        <a href="tel:+32456661560" className="flex gap-1 mt-2 items-center group">
        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" className="text-white text-lg group-hover:text-green" height="1em" width="1em">
            <path d="M160 32c-16 0-32 16-32 32v384c0 16 16 32 32 32h192c16 0 32-16 32-32V64c0-16-16-32-32-32H160zm21.68 23h96v18h-96V55zM304 55h32v18h-32V55zM154 96h204v320H154V96zm70 342h63.984c16 0 16 16 16 16v6H208v-6s0-16 16-16z"></path>
        </svg>
        Phone: +32 (0) 45 666 15 60
    </a>
    )
}

const TyremasterEmail=()=>{
    return(
        <a href="mailto:hello@tyremaster.app" className="flex gap-1 mt-2 items-center group">
        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" className="text-white text-md group-hover:text-green" height="1em" width="1em">
            <path d="M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14a1.75 1.75 0 0 1-1.75 1.75H1.75A1.75 1.75 0 0 1 0 18.75v-14C0 3.784.784 3 1.75 3ZM1.5 7.412V18.75c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0Zm0-2.662v.852l10.36 7a.25.25 0 0 0 .28 0l10.36-7V4.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"></path>
        </svg>
        Email: hello@tyremaster.app
    </a>
    )
}

const Tyremaster=()=>{
    return(
        <div className="flex flex-col mx-4 mt-2.5">
            <a href="#"
                className="self-center xl:self-start flex items-center mt-5">
                <Image
                    src="/images/tyremasteryeni.jpg"
                    alt="TyreMaster Logo"
                    width={208}
                    height={120}
                    className="bg-transparent object-contain"
                />
            </a>
            </div>

    )
}
