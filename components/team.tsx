import Image from "next/image";
import TeamImage from "@/public/images/jahidun-business-photo.jpeg";
import ShuvroImage from "@/public/images/shuvro-business-photo.png";
import YeasinImage from "@/public/images/yeasin-business-photo.png";

export default function Team() {
    const founders = [
        {
            name: "Jahidun Nur Mahee",
            role: "CEO & Founder",
            designation: "Technical Lead Backend & Frontend Engineer",
            initials: "JM",
            image: TeamImage,
            objectPosition: "50% 40%",
        },
        {
            name: "Shuvro Sarkar",
            role: "Co-Founder",
            designation: "Co-Lead Frontend Engineer & Lead UI/UX",
            initials: "SS",
            image: ShuvroImage,
        },
        {
            name: "Yeasin Khalili",
            role: "Co-Founder",
            designation: "Business & Marketing Lead",
            initials: "YK",
            image: YeasinImage,
            objectPosition: "50% 25%",
        },
    ];

    const team = [
        {
            name: "Md Azim Howladar",
            role: "Junior Software Engineer (Frontend)",
            initials: "AH",
        },
    ];

    return (
        <section>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
                    {/* Section header */}
                    <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
                        <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
                            <span className="inline-flex bg-gradient-to-r from-[#027efc] to-[#99ccff] bg-clip-text text-transparent">
                                Our Team
                            </span>
                        </div>
                        <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                            Meet the Team
                        </h2>
                        <p className="text-lg text-blue-200/65">
                            Passionate innovators dedicated to building solutions that make a difference.
                        </p>
                    </div>

                    {/* Founders */}
                    <div className="mb-12">
                        <h3 className="mb-8 text-center font-nacelle text-xl font-semibold text-gray-200">
                            Founders
                        </h3>
                        <div className="mx-auto grid max-w-sm gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
                            {founders.map((founder, index) => (
                                <div
                                    key={index}
                                    className="relative overflow-hidden rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        {/* Avatar */}
                                        <div className="mb-4 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#027efc] to-[#0265ca]">
                                            {founder.image ? (
                                                <Image
                                                    src={founder.image}
                                                    alt={founder.name}
                                                    width={128}
                                                    height={128}
                                                    className="h-full w-full object-cover"
                                                    style={{
                                                        objectPosition:
                                                            founder.objectPosition ||
                                                            "center",
                                                    }}
                                                />
                                            ) : (
                                                <span className="text-2xl font-bold text-white">
                                                    {founder.initials}
                                                </span>
                                            )}
                                        </div>
                                        {/* Name */}
                                        <h4 className="mb-1 font-nacelle text-lg font-semibold text-gray-200">
                                            {founder.name}
                                        </h4>
                                        {/* Role */}
                                        <p className="text-sm text-blue-200/65">{founder.role}</p>
                                        {/* Designation */}
                                        {founder.designation && (
                                            <p className="text-xs text-gray-400">
                                                {founder.designation}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Team Members */}
                    <div>
                        <h3 className="mb-8 text-center font-nacelle text-xl font-semibold text-gray-200">
                            Team Members
                        </h3>
                        <div className="mx-auto grid max-w-sm gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
                            {team.map((member, index) => (
                                <div
                                    key={index}
                                    className="relative overflow-hidden rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        {/* Avatar */}
                                        <div className="mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-linear-to-br from-gray-700 to-gray-800">
                                            <span className="text-2xl font-bold text-gray-300">
                                                {member.initials}
                                            </span>
                                        </div>
                                        {/* Name */}
                                        <h4 className="mb-1 font-nacelle text-lg font-semibold text-gray-200">
                                            {member.name}
                                        </h4>
                                        {/* Role */}
                                        <p className="text-sm text-blue-200/65">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
