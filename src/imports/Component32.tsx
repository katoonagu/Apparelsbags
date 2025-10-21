import img12 from "figma:asset/ceb1ed6c484abef22100b895ae4ed78a70cf7510.png";

/**
 * @figmaAssetKey 176822c5675ed023f1ab6dd9b293be9e9ea680fa
 */
function Component32({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Component 32">
      <div className="absolute h-[220px] left-0 right-0 top-0" data-name="1 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img12} />
      </div>
      <div className="absolute bottom-[24.59px] capitalize flex flex-col font-['Abel:Regular',_sans-serif] h-[10.826px] justify-center leading-[0] left-0 not-italic right-0 text-[13px] text-black translate-y-[50%]">
        <p className="leading-[10px]">Louis Vuitton Keepall Vernis Silver 50</p>
      </div>
      <div className="absolute bottom-[5.1px] flex flex-col font-['Abel:Regular',_sans-serif] h-[10.826px] justify-center leading-[0] left-0 not-italic right-0 text-[12px] text-black translate-y-[50%] uppercase">
        <p className="leading-[10px]">$ 6,500</p>
      </div>
    </div>
  );
}

export default function Component33() {
  return <Component32 className="relative size-full" />;
}