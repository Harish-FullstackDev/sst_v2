"use client";

import { useId, useState } from "react";

// Ported from the HRMS portal (HrmsSST JobSectionAccordion, Figma 1380:3005):
// 56-tall light-blue bar with an 18px title and a 26px "+" tile that turns
// into "−" when open. The list opens below the title inside the same tile.
// Pass `items` for a bullet list, or `children` for any other content.
export default function JobSectionAccordion({ title, items = [], children, defaultOpen = false }) {
    const [open, setOpen] = useState(defaultOpen);
    const panelId = useId();

    return (
        <div className="w-full overflow-hidden rounded-lg bg-[#ecf2f9]">
            <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpen((value) => !value)}
                className="flex h-14 w-full cursor-pointer items-center justify-between gap-4 p-3 text-left"
            >
                <span className="text-lg leading-[1.2] font-medium text-[#0e2b4b]">{title}</span>
                <span aria-hidden="true" className="relative size-[26px] shrink-0 rounded bg-[#afc9e6]">
                    <span className="absolute top-1/2 left-1/2 h-[1.625px] w-[13px] -translate-1/2 bg-[#0061af]" />
                    <span
                        className={`absolute top-1/2 left-1/2 h-[1.625px] w-[13px] -translate-1/2 bg-[#0061af] transition-transform duration-300 ${
                            open ? "rotate-0" : "rotate-90"
                        }`}
                    />
                </span>
            </button>
            <div
                id={panelId}
                className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
                <div className="overflow-hidden" inert={!open}>
                    {children ? (
                        <div className="px-3 pb-4 text-sm leading-5 text-[#415773]">{children}</div>
                    ) : (
                        <ul className="flex list-disc flex-col gap-2 pr-3 pb-4 pl-8 text-sm leading-5 text-[#415773]">
                            {items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
