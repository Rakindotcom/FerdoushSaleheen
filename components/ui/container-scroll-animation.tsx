import type { ReactNode } from "react";

export function ContainerScroll({
  titleComponent,
  children,
}: {
  titleComponent: string | ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="relative flex items-center justify-center px-4 py-24 md:px-10 md:py-32">
      <div className="relative w-full">
        <div className="mx-auto max-w-5xl text-center">{titleComponent}</div>
        <div className="mx-auto mt-10 h-[28rem] w-full max-w-5xl rounded-[2rem] border border-[#d6a642]/30 bg-[#0b0a08] p-2 shadow-[0_40px_100px_-35px_rgba(214,166,66,.32)] md:h-[38rem] md:p-3">
          <div className="h-full w-full overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#11100d]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
