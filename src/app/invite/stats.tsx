import { MousePointerClick, BadgeCheck, Medal } from "lucide-react";

export function Stats() {
    return (
        <div className="grid gap-3 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center gap-1 rounded-xl relative bg-gray-700 border border-gray-600 px-4 py-7">
                <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                    1500
                </span>
                <span className="text-sm text-gray-300 leading-none text-center">
                    Acessos ao Link
                </span>

                <MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
            </div>

            <div className="flex flex-col items-center justify-center gap-1 rounded-xl relative bg-gray-700 border border-gray-600 px-4 py-7">
                <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                    1030
                </span>
                <span className="text-sm text-gray-300 leading-none text-center">
                    Inscrições Feitas
                </span>

                <BadgeCheck className="size-5 text-purple absolute top-3 left-3" />
            </div>

            <div className="flex flex-col items-center justify-center gap-1 rounded-xl relative bg-gray-700 border border-gray-600 px-4 py-7">
                <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                    1°
                </span>
                <span className="text-sm text-gray-300 leading-none text-center">
                    Posição no Ranking
                </span>

                <Medal className="size-5 text-purple absolute top-3 left-3" />
            </div>
        </div>
    )
}