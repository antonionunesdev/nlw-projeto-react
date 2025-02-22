import Image from "next/image";
import medalgold from "../../assets/medal-gold.svg";
import medalsilver from "../../assets/medal-silver.svg";
import medalcooper from "../../assets/medal-cooper.svg";

export function Ranking() {
    return (
        <div className="w-full max-w[440px] space-y-5">
                <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
                    Ranking de indicações
                </h2>

                <div className="space-y-4">
                    <div className="relative flex flex-col justify-center gap-3 rounded-xl bg-gray-700 border border-gray-600 p-6">
                        <span className="text-sm text-gray-300 leading-none">
                            <span className="font-semibold">1°</span> |
                            Antonio Nunes
                        </span>

                        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                            1030
                        </span>

                        <Image src={medalgold} alt="medalgold" className="absolute top-0 right-8" />
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="relative flex flex-col justify-center gap-3 rounded-xl bg-gray-700 border border-gray-600 p-6">
                        <span className="text-sm text-gray-300 leading-none">
                            <span className="font-semibold">2°</span> |
                            Maria Gerla
                        </span>

                        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                            960
                        </span>

                        <Image src={medalsilver} alt="medalsilver" className="absolute top-0 right-8" />
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="relative flex flex-col justify-center gap-3 rounded-xl bg-gray-700 border border-gray-600 p-6">
                        <span className="text-sm text-gray-300 leading-none">
                            <span className="font-semibold">3°</span> |
                            Carlos Germano
                        </span>

                        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                            890
                        </span>

                        <Image src={medalcooper} alt="medalcooper" className="absolute top-0 right-8" />
                    </div>
                </div>
            </div>
    )
}