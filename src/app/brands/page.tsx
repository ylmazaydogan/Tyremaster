import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { useBrands } from "@/hooks/useBrands";
import { Button } from "@/components/ui/button";


export default function Brands() {
    const {
        brands,
        loading,
        toggleLetter,
        hasBrand,
        getButtonVariant,
        selectedLetters,
      } = useBrands();
    
      const filteredBrands = selectedLetters.includes("ALL")
        ? brands
        : Object.fromEntries(
            Object.entries(brands || {}).filter(([letter]) =>
              selectedLetters.includes(letter)
            )
          );
      return (
        <div className="flex flex-col">
          <div className={`py-5 flex border-b`}>
            <div className="flex flex-col">
              <h1 className="text-primary text-3xl font-semibold">Brands</h1>
            </div>
          </div>
    
          <div className="flex flex-col mt-9">
            <div className={``}>
              <div
                className="grid grid-cols-6 md:flex md:flex-wrap md:justify-between place-items-center items-center 
          w-full md:w-full space-y-1 space-x-0.5 gap-0.5 px-1 py-1 md:py-0.5 "
              >
                {[
                  "ALL",
                  ...Array.from({ length: 26 }, (_, i) =>
                    String.fromCharCode(65 + i)
                  ),
                ].map((letter) => (
                  <Button
                    className={`flex-shrink-0 !bg-transparent !border-none !text-primary relative !w-fit !h-fit !text-sm !font-semibold ${
                      selectedLetters.includes(letter)
                        ? ""
                        : ""
                    }`}
                    disabled={
                      !hasBrand(letter) ||
                      (letter === "ALL" && selectedLetters.includes("ALL"))
                    }
                    variant={getButtonVariant(letter)}
                    size={"icon"}
                    key={letter}
                    onClick={() => toggleLetter(letter)}
                  >
                    {letter}
                    {selectedLetters.includes(letter) && (
                      <div
                        className="absolute -bottom-1 -translate-x-1/2 left-1/2 w-full h-[3px] z-10
                       bg-secondary transition-colors duration-300 ease"
                      ></div>
                    )}
                  </Button>
                ))}
              </div>
              <div className="pt-9 w-full">
                {filteredBrands && Object.keys(filteredBrands).length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-y-10 gap-x-4">
                    {Object.keys(filteredBrands).map((letter) => (
                      <div className="flex flex-col gap-0.5" key={letter}>
                        <span className="text-base font-medium pb-1">{letter}</span>
                        {filteredBrands[letter].map((brand) => (
                          <Link
                            href={brand.link}
                            key={brand.key}
                            className="text-sm font-light"
                          >
                            {brand.key}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : loading ? (
                  <div className="grid grid-cols-4 w-full gap-y-10 ">
                    {Array.from({ length: 26 }, (_, i) =>
                      String.fromCharCode(65 + i)
                    ).map((letter) => (
                      <div className="flex flex-col gap-0.5" key={letter}>
                        <span className="text-base font-medium pb-1">{letter}</span>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Skeleton key={index} className="h-5  " />
                        ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>No brands found</div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
}
